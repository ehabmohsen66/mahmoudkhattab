<?php
/**
 * comments.php — Guest comments & reviews handler for shared cPanel / PHP hosting.
 *
 * Provides:
 *  - GET ?action=captcha  -> generates math captcha challenge and signed token
 *  - GET ?action=list     -> returns published user comments from storage/comments.json
 *  - POST                 -> validates captcha, checks honeypot, processes avatar upload
 *                            (or falls back to logo), and automatically publishes comment.
 */

declare(strict_types=1);

header('X-Content-Type-Options: nosniff');

$storageDir = __DIR__ . '/storage';
$commentsFile = $storageDir . '/comments.json';
$avatarsDir = __DIR__ . '/assets/avatars/user';
$defaultLogo = 'assets/branding/egypt-heritage-logo.png';

// Ensure directories exist
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0755, true);
}
if (!is_dir($avatarsDir)) {
    @mkdir($avatarsDir, 0755, true);
}

// Internal secret key for stateless captcha token signing
$secretKey = 'mk_tour_egypt_secret_captcha_key_2026';

function jsonResponse(array $data, int $code = 200): void
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function cleanInput(string $val, int $max = 1000): string
{
    $val = trim($val);
    $val = str_replace(["\r\n", "\r"], "\n", $val);
    $val = strip_tags($val);
    return mb_substr($val, 0, $max);
}

// ---------------------------------------------------------------- ACTIONS
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

// 1. Generate Captcha Challenge
if ($method === 'GET' && $action === 'captcha') {
    $num1 = rand(2, 9);
    $num2 = rand(1, 9);
    $sum = $num1 + $num2;
    $time = time();
    $signature = hash_hmac('sha256', "{$sum}|{$time}", $secretKey);
    $token = base64_encode("{$time}:{$signature}");

    jsonResponse([
        'ok' => true,
        'question' => "{$num1} + {$num2} = ?",
        'token' => $token,
    ]);
}

// 2. Fetch Published Comments
if ($method === 'GET') {
    $comments = [];
    if (file_exists($commentsFile)) {
        $content = @file_get_contents($commentsFile);
        if ($content) {
            $parsed = json_decode($content, true);
            if (is_array($parsed)) {
                $comments = $parsed;
            }
        }
    }
    jsonResponse([
        'ok' => true,
        'comments' => $comments,
        'total' => count($comments)
    ]);
}

// 3. Handle Comment Submission (POST)
if ($method === 'POST') {
    // Check honeypot
    if (!empty($_POST['website'] ?? '')) {
        // Silently succeed for bots
        jsonResponse(['ok' => true, 'message' => 'Comment published successfully.']);
    }

    // Validate captcha
    $captchaAnswer = trim((string)($_POST['captcha_answer'] ?? ''));
    $captchaToken = trim((string)($_POST['captcha_token'] ?? ''));

    if ($captchaAnswer === '' || $captchaToken === '') {
        jsonResponse(['ok' => false, 'message' => 'Пожалуйста, решите капчу / Please solve the security captcha.'], 400);
    }

    $decodedToken = base64_decode($captchaToken, true);
    if (!$decodedToken || !str_contains($decodedToken, ':')) {
        jsonResponse(['ok' => false, 'message' => 'Недействительный токен капчи / Invalid captcha token.'], 400);
    }

    [$tokenTime, $tokenSignature] = explode(':', $decodedToken, 2);
    $tokenTime = (int)$tokenTime;
    $now = time();

    // Expire captcha after 20 minutes
    if ($now - $tokenTime > 1200) {
        jsonResponse(['ok' => false, 'message' => 'Время действия капчи истекло. Попробуйте снова / Captcha expired. Please refresh.'], 400);
    }

    $expectedSignature = hash_hmac('sha256', "{$captchaAnswer}|{$tokenTime}", $secretKey);
    if (!hash_equals($expectedSignature, $tokenSignature)) {
        jsonResponse(['ok' => false, 'message' => 'Неверный ответ на капчу / Incorrect captcha answer.'], 400);
    }

    // Validate and sanitize content
    $name = cleanInput((string)($_POST['name'] ?? ''), 60);
    $location = cleanInput((string)($_POST['location'] ?? ''), 60);
    $text = cleanInput((string)($_POST['text'] ?? ''), 1500);
    $rating = (int)($_POST['rating'] ?? 5);

    if ($rating < 1 || $rating > 5) {
        $rating = 5;
    }

    if (mb_strlen($name) < 2) {
        jsonResponse(['ok' => false, 'message' => 'Пожалуйста, укажите ваше имя / Please enter your name.'], 400);
    }
    if (mb_strlen($text) < 5) {
        jsonResponse(['ok' => false, 'message' => 'Текст комментария слишком короткий / Comment text is too short.'], 400);
    }

    // Handle avatar upload
    $avatarPath = $defaultLogo;

    if (isset($_FILES['avatar']) && is_array($_FILES['avatar']) && ($_FILES['avatar']['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_OK) {
        $file = $_FILES['avatar'];
        $tmpPath = $file['tmp_name'];
        $fileSize = $file['size'];

        // Max 3MB
        if ($fileSize > 0 && $fileSize <= 3 * 1024 * 1024) {
            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $mime = $finfo->file($tmpPath);

            $allowedMimes = [
                'image/jpeg' => 'jpg',
                'image/png'  => 'png',
                'image/webp' => 'webp',
            ];

            if (isset($allowedMimes[$mime])) {
                $ext = $allowedMimes[$mime];
                $newFilename = 'avatar_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
                $destPath = $avatarsDir . '/' . $newFilename;

                if (move_uploaded_file($tmpPath, $destPath)) {
                    $avatarPath = 'assets/avatars/user/' . $newFilename;
                }
            }
        }
    }

    $newComment = [
        'id' => uniqid('c_', true),
        'name' => $name,
        'location' => $location ?: 'Гость / Guest',
        'rating' => $rating,
        'text' => $text,
        'avatar' => $avatarPath,
        'date' => date('Y-m-d'),
        'timestamp' => time(),
        'verified' => true
    ];

    // Persist to storage/comments.json with lock
    $existing = [];
    if (file_exists($commentsFile)) {
        $content = @file_get_contents($commentsFile);
        if ($content) {
            $parsed = json_decode($content, true);
            if (is_array($parsed)) {
                $existing = $parsed;
            }
        }
    }

    array_unshift($existing, $newComment);

    // Limit to last 200 comments
    if (count($existing) > 200) {
        $existing = array_slice($existing, 0, 200);
    }

    file_put_contents($commentsFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);

    jsonResponse([
        'ok' => true,
        'message' => 'Комментарий успешно опубликован! / Comment published successfully!',
        'comment' => $newComment,
    ]);
}

jsonResponse(['ok' => false, 'message' => 'Method not allowed'], 405);
