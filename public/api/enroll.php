<?php
/**
 * Ebanex International - Training Enrollment API
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
$subject_prefix = "NEW TRAINING ENROLLMENT: ";
$from_email = "info@ebanexint.co.tz";
// Cloudflare Turnstile Secret Key is defined in security.php

// ── CORS HEADERS ──────────────────────────────────────────────────────
$allowed_origins = [
    "https://ebanexint.co.tz",
    "https://www.ebanexint.co.tz",
    "http://localhost:5173",
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
    echo json_encode(["ok" => true, "message" => "Enrollment transmitted successfully."]); // Fake success to fool bots
    exit;
}

// Turnstile Validation
$captcha_token = $_POST['captchaToken'] ?? $json_data['captchaToken'] ?? '';
if (!validate_turnstile($captcha_token)) {
    error_log("Turnstile validation failed for enrollment.");
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Security validation failed. Please try again."]);
    exit;
}

// Rate Limiting (e.g., max 3 enrollment requests per hour per IP)
if (!check_rate_limit('enroll', 3, 3600)) {
    error_log("Rate limit exceeded for enrollment from " . $_SERVER['REMOTE_ADDR']);
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Too many requests. Please try again later."]);
    exit;
}

$fullName = htmlspecialchars(strip_tags($_POST['fullName'] ?? $json_data['fullName'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? $json_data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($_POST['phone'] ?? $json_data['phone'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$institution = htmlspecialchars(strip_tags($_POST['institution'] ?? $json_data['institution'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$program = htmlspecialchars(strip_tags($_POST['program'] ?? $json_data['program'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$sessionType = htmlspecialchars(strip_tags($_POST['sessionType'] ?? $json_data['sessionType'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$trainingType = htmlspecialchars(strip_tags($_POST['trainingType'] ?? $json_data['trainingType'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$groupSize = htmlspecialchars(strip_tags($_POST['groupSize'] ?? $json_data['groupSize'] ?? '1'), ENT_QUOTES, 'UTF-8');
$totalCost = htmlspecialchars(strip_tags($_POST['totalCost'] ?? $json_data['totalCost'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$subject = $subject_prefix . $program . " - " . $fullName;

// ── EMAIL CONSTRUCTION (HTML using helper) ────────────────────────────────────
$content_html = "
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Training Program</div>
            <div style='font-size: 16px; color: #FFFFFF; font-weight: bold;'>$program</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Session Type</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$sessionType</div>
                    </td>
                    <td width='50%' style='vertical-align: top;'>
                        <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Training Type</div>
                        <div style='font-size: 14px; color: #FFFFFF;'>$trainingType</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>";

if ($trainingType === 'Group') {
    $personLabel = ($groupSize == 1) ? "Person" : "People";
    $content_html .= "
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Group Size</div>
            <div style='font-size: 14px; color: #FFFFFF;'>$groupSize $personLabel</div>
        </td>
    </tr>";
}

$content_html .= "
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Total Investment</div>
            <div style='font-size: 18px; color: #00BFFF; font-weight: 900;'>$totalCost</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 30px 0 10px 0;'>
            <div style='font-size: 12px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: 2px;'>Applicant Details</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Full Name</div>
            <div style='font-size: 14px; color: #FFFFFF;'>$fullName</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Contact Information</div>
            <div style='font-size: 14px; color: #FFFFFF; margin-bottom: 4px;'>Email: $email</div>
            <div style='font-size: 14px; color: #FFFFFF;'>Phone: $phone</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Institution</div>
            <div style='font-size: 14px; color: #FFFFFF;'>$institution</div>
        </td>
    </tr>";

$message_html = get_email_template("Training Program Enrollment", $content_html, "This enrollment was submitted via the Ebanex International training portal.");

// Build headers
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── SEND ─────────────────────────────────────────────────────────────
// Encode body to base64 and wrap at 76 chars (industry standard for email)
$encoded_message = chunk_split(base64_encode($message_html));

// Send to domain email first (more reliable), then external
$sent_primary = send_smtp_email($to_email_primary, $subject, $encoded_message, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $encoded_message, $headers);

if ($sent_primary || $sent_external) {
    error_log("Enrollment sent: domain=$sent_primary, external=$sent_external");
    echo json_encode(["ok" => true, "message" => "Enrollment transmitted successfully."]);
} else {
    error_log("SMTP delivery failed for enrollment");
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The enrollment service is currently unavailable. Please contact info@ebanexint.co.tz directly."
    ]);
}
