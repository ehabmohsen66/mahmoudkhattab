<?php
/**
 * Copy this file to config.php and edit the values.
 * config.php is git-ignored and blocked by .htaccess, so it never leaks.
 */
return [
    // Where enquiries are delivered.
    'to'             => 'info@mahmoudkhattab.com',

    // IMPORTANT: must be a real mailbox on THIS domain, otherwise the host's
    // SPF/DMARC record will make Gmail and Mail.ru drop the message.
    // Create it in cPanel -> Email Accounts first.
    'from'           => 'noreply@mahmoudkhattab.com',
    'from_name'      => 'Mahmoud Khattab Website',

    'subject_prefix' => '[Site enquiry]',
    'whatsapp'       => '201009686874',

    'min_seconds'    => 3,   // submissions faster than this are treated as bots
    'max_per_hour'   => 12,  // per visitor IP
];
