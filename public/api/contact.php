<?php
/**
 * Ebanex International - Contact Inquiry API
 * Handles multipart form data and rich HTML email
 * Uses SMTP instead of mail() for better compatibility
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';
require_once 'security.php';

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email_primary = "info@ebanexint.co.tz";
$to_email_external = "yonahmatete@gmail.com";
$subject_prefix = "NEW CONTACT INQUIRY: ";
$from_email = "info@ebanexint.co.tz";
// Cloudflare Turnstile Secret Key is defined in security.php

// ── CORS HEADERS ──────────────────────────────────────────────────────
$allowed_origins = [
    "https://ebanexint.co.tz",
    "https://www.ebanexint.co.tz",
    "http://localhost:5173", // Vite default
    "http://localhost:3000"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ── VALIDATION ────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

// ── DATA PREPARATION ──────────────────────────────────────────────────
// Try to get data from POST (multipart) or JSON
$input = file_get_contents("php://input");
$json_data = json_decode($input, true);

// Honeypot check (hidden field to catch bots)
$honeypot = $_POST['website'] ?? $json_data['website'] ?? '';
if (!empty($honeypot)) {
    error_log("Bot detected via honeypot: $honeypot");
    echo json_encode(["ok" => true, "message" => "Inquiry transmitted successfully."]); // Fake success to fool bots
    exit;
}

// Turnstile Validation
$captcha_token = $_POST['captchaToken'] ?? $json_data['captchaToken'] ?? '';
if (!validate_turnstile($captcha_token)) {
    error_log("Turnstile validation failed for contact inquiry.");
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Security validation failed. Please try again."]);
    exit;
}

// Rate Limiting (e.g., max 3 contact requests per hour per IP)
if (!check_rate_limit('contact', 3, 3600)) {
    error_log("Rate limit exceeded for contact inquiry from " . $_SERVER['REMOTE_ADDR']);
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Too many requests. Please try again later."]);
    exit;
}

$fullName = htmlspecialchars(strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$service = htmlspecialchars(strip_tags($_POST['service'] ?? $json_data['service'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$messageContent = htmlspecialchars(strip_tags($_POST['message'] ?? $json_data['message'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$subject = $subject_prefix . $fullName . " (" . $service . ")";

// ── EMAIL CONSTRUCTION (HTML with proper encoding) ────────────────────────────────────
$boundary = "PHP-mixed-" . md5(time());
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// HTML Message with inline styles
$message_html = "<!DOCTYPE html>
<html>
<head>
<meta charset=\"UTF-8\">
<style type=\"text/css\">
  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; }
  .header { background: #004a99; padding: 20px; color: white; text-align: center; }
  .header h2 { margin: 0; font-size: 24px; }
  .content { padding: 20px; background: #f9f9f9; border: 1px solid #ddd; }
  .field { margin: 12px 0; padding: 10px; background: white; border-left: 3px solid #004a99; }
  .label { font-weight: bold; color: #004a99; font-size: 12px; text-transform: uppercase; }
  .value { margin-top: 5px; color: #333; }
  .footer { padding: 10px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #ddd; margin-top: 20px; }
</style>
</head>
<body>
<div class=\"container\">
  <div class=\"header\">
    <h2>New Contact Inquiry</h2>
  </div>
  <div class=\"content\">
    <div class=\"field\">
      <div class=\"label\">Full Name</div>
      <div class=\"value\">$fullName</div>
    </div>
    <div class=\"field\">
      <div class=\"label\">Email Address</div>
      <div class=\"value\">$email</div>
    </div>
    <div class=\"field\">
      <div class=\"label\">Service Interest</div>
      <div class=\"value\">$service</div>
    </div>
    <div class=\"field\">
      <div class=\"label\">Message</div>
      <div class=\"value\" style=\"white-space: pre-wrap;\">$messageContent</div>
    </div>
    <div class=\"footer\">
      This inquiry was submitted via the Ebanex International contact form.
    </div>
  </div>
</div>
</body>
</html>";

// Encode HTML content with quoted-printable to avoid line-length issues
$encoded_html = quoted_printable_encode($message_html);

// Build MIME message body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
$body .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";
$body .= $encoded_html . "\r\n\r\n";
$body .= "--$boundary--";

// ── SEND ─────────────────────────────────────────────────────────────
// Send to domain email first (more reliable), then external
$sent_primary = send_smtp_email($to_email_primary, $subject, $body, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $body, $headers);

if ($sent_primary || $sent_external) {
    error_log("Contact inquiry sent: domain=$sent_primary, external=$sent_external");
    echo json_encode(["ok" => true, "message" => "Inquiry transmitted successfully."]);
} else {
    error_log("SMTP delivery failed for contact inquiry");
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The contact service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
