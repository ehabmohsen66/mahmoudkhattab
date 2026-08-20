<?php
/**
 * contact.php — enquiry handler for shared cPanel / PHP hosting.
 *
 * Replaces the old  <form action="mailto:...">  which opened the visitor's
 * mail client (and silently lost the lead on phones and webmail).
 *
 * Responds with JSON when called via fetch(), and with a plain HTML page
 * when JavaScript is unavailable — so the form works either way.
 *
 * Settings live in config.php (copy config.example.php -> config.php).
 * Requires nothing but PHP 7.4+ and the host's mail() function.
 */

declare(strict_types=1);

// ---------------------------------------------------------------- config
$defaults = [
    'to'             => 'info@mahmoudkhattab.com',
    // MUST be an address on this domain or SPF/DMARC will reject the mail.
    'from'           => 'noreply@mahmoudkhattab.com',
    'from_name'      => 'Mahmoud Khattab Website',
    'subject_prefix' => '[Site enquiry]',
    'whatsapp'       => '201009686874',
    'min_seconds'    => 3,      // faster than this = bot
    'max_per_hour'   => 12,     // per IP
];
$config = file_exists(__DIR__ . '/config.php')
    ? array_merge($defaults, (array) require __DIR__ . '/config.php')
    : $defaults;

// ---------------------------------------------------------------- helpers
$wantsJson = (
    (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'fetch')
    || (isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json'))
);

function respond(bool $ok, string $message, int $code = 200): void
{
    global $wantsJson, $config;
    http_response_code($code);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    $title = $ok ? 'Спасибо!' : 'Ошибка';
    $wa    = htmlspecialchars($config['whatsapp'], ENT_QUOTES);
    $msg   = htmlspecialchars($message, ENT_QUOTES);
    echo <<<HTML
<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>$title</title>
<style>body{font:16px/1.6 system-ui,sans-serif;background:#fbfaf7;color:#17242b;display:grid;
place-items:center;min-height:100vh;margin:0;padding:24px}
.c{max-width:520px;text-align:center;background:#fff;border:1px solid #d7e7eb;border-radius:16px;padding:40px 32px}
h1{margin:0 0 12px;font-size:26px}p{margin:0 0 22px;color:#4e6068}
a{display:inline-block;padding:13px 24px;border-radius:12px;background:#087ea4;color:#fff;
text-decoration:none;font-weight:700;margin:4px}
a.w{background:#25d366}</style></head>
<body><div class="c"><h1>$title</h1><p>$msg</p>
<a href="/">На главную</a>
<a class="w" href="https://wa.me/$wa">Написать в WhatsApp</a>
</div></body></html>
HTML;
    exit;
}

function clean(string $v, int $max = 2000): string
{
    $v = str_replace(["\r", "\0"], '', trim($v));
    $v = preg_replace('/[[:cntrl:]](?<!\n)/u', '', $v) ?? '';
    return mb_substr($v, 0, $max);
}

/** Reject values containing header-injection payloads. */
function hasHeaderInjection(string $v): bool
{
    return (bool) preg_match('/(content-type|bcc:|cc:|to:|from:|mime-version)/i', $v);
}

// ---------------------------------------------------------------- guards
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Отправьте форму с сайта.', 405);
}

// honeypot — a field real people never see and never fill
if (!empty($_POST['website'] ?? '')) {
    respond(true, 'Спасибо! Ваш запрос отправлен.');   // silent success for bots
}

// time trap — form rendered less than N seconds ago is a bot
$started = (int) ($_POST['started'] ?? 0);
if ($started > 0 && (time() - $started) < (int) $config['min_seconds']) {
    respond(true, 'Спасибо! Ваш запрос отправлен.');
}

// crude per-IP rate limit (no database needed)
$ip   = preg_replace('/[^0-9a-f:.]/i', '', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$file = sys_get_temp_dir() . '/mk_rate_' . md5((string) $ip);
$hits = [];
if (is_readable($file)) {
    $hits = array_filter(
        (array) json_decode((string) file_get_contents($file), true),
        static fn($t) => is_numeric($t) && $t > time() - 3600
    );
}
if (count($hits) >= (int) $config['max_per_hour']) {
    respond(false, 'Слишком много запросов. Напишите, пожалуйста, в WhatsApp.', 429);
}
$hits[] = time();
@file_put_contents($file, json_encode(array_values($hits)), LOCK_EX);

// ---------------------------------------------------------------- input
$name    = clean((string) ($_POST['name'] ?? ''), 120);
$contact = clean((string) ($_POST['phone'] ?? ($_POST['contact'] ?? '')), 120);
$message = clean((string) ($_POST['message'] ?? ''), 4000);
$lang    = clean((string) ($_POST['lang'] ?? 'ru'), 8);

$errors = [];
if (mb_strlen($name) < 2)       { $errors[] = 'имя'; }
if (mb_strlen($contact) < 5)    { $errors[] = 'телефон или мессенджер'; }
if (mb_strlen($message) < 5)    { $errors[] = 'сообщение'; }
if (hasHeaderInjection($name) || hasHeaderInjection($contact)) {
    respond(false, 'Некорректные данные.', 400);
}
if ($errors) {
    respond(false, 'Пожалуйста, заполните: ' . implode(', ', $errors) . '.', 422);
}

// ---------------------------------------------------------------- send
$subject = sprintf('%s %s', $config['subject_prefix'], $name);
$body = implode("\n", [
    'Новый запрос с сайта mahmoudkhattab.com',
    str_repeat('-', 46),
    'Имя:        ' . $name,
    'Контакт:    ' . $contact,
    'Язык:       ' . $lang,
    '',
    'Сообщение:',
    $message,
    '',
    str_repeat('-', 46),
    'IP:         ' . $ip,
    'Страница:   ' . clean((string) ($_SERVER['HTTP_REFERER'] ?? '-'), 300),
    'Время:      ' . date('Y-m-d H:i:s'),
]);

$fromName = mb_encode_mimeheader((string) $config['from_name'], 'UTF-8');
$headers = [
    'From: ' . $fromName . ' <' . $config['from'] . '>',
    'Reply-To: ' . (filter_var($contact, FILTER_VALIDATE_EMAIL) ? $contact : $config['from']),
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = @mail(
    (string) $config['to'],
    mb_encode_mimeheader($subject, 'UTF-8'),
    $body,
    implode("\r\n", $headers),
    '-f' . $config['from']
);

// Always keep a local copy so a lead is never lost to a mail() failure.
$logDir = __DIR__ . '/storage';
if (!is_dir($logDir)) { @mkdir($logDir, 0750, true); }
@file_put_contents(
    $logDir . '/enquiries.log',
    date('c') . " | " . ($sent ? 'SENT' : 'MAIL-FAILED') . " | " .
    str_replace("\n", ' / ', $body) . "\n",
    FILE_APPEND | LOCK_EX
);

if ($sent) {
    respond(true, 'Спасибо! Ваш запрос отправлен — Махмуд свяжется с вами в ближайшее время.');
}
respond(false, 'Не удалось отправить письмо. Пожалуйста, напишите в WhatsApp — так быстрее всего.', 500);
