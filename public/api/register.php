<?php
/**
 * Ebanex International - Conference Registration API
 * Uses SMTP instead of mail() for better compatibility
 */

// Enable error reporting for debugging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';

// ── SETTINGS ──────────────────────────────────────────────────────────
$to_email_primary = "info@ebanexint.co.tz";
$to_email_external = "yonahmatete@gmail.com";
$subject_prefix = "NEW CONFERENCE REGISTRATION: ";
$from_email = "info@ebanexint.co.tz";

// ── CORS HEADERS ──────────────────────────────────────────────────────
header("Access-Control-Allow-Origin: *");
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

$fullName = strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = strip_tags($_POST['phone'] ?? $json_data['phone'] ?? 'N/A');
$institution = strip_tags($_POST['institution'] ?? $json_data['institution'] ?? 'N/A');
$role = strip_tags($_POST['role'] ?? $json_data['role'] ?? 'N/A');

$subject = $subject_prefix . $fullName;

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
    <h2>Digital Trust Conference Registration</h2>
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
      <div class=\"label\">Phone Number</div>
      <div class=\"value\">$phone</div>
    </div>
    <div class=\"field\">
      <div class=\"label\">Institution</div>
      <div class=\"value\">$institution</div>
    </div>
    <div class=\"field\">
      <div class=\"label\">Role / Position</div>
      <div class=\"value\">$role</div>
    </div>
    <div class=\"footer\">
      This registration was submitted via the Ebanex International conference portal.
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
    error_log("Registration sent: domain=$sent_primary, external=$sent_external");
    echo json_encode(["ok" => true, "message" => "Registration transmitted successfully."]);
} else {
    error_log("SMTP delivery failed for registration");
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The registration service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
