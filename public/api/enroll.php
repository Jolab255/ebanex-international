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
    <div class='field'>
        <div class='label'>Training Program</div>
        <div class='value'>$program</div>
    </div>
    <div class='field'>
        <div class='label'>Session Type</div>
        <div class='value'>$sessionType</div>
    </div>
    <div class='field'>
        <div class='label'>Training Type</div>
        <div class='value'>$trainingType</div>
    </div>";

if ($trainingType === 'Group') {
    $personLabel = ($groupSize == 1) ? "Person" : "People";
    $content_html .= "
    <div class='field'>
        <div class='label'>Group Size</div>
        <div class='value'>$groupSize $personLabel</div>
    </div>";
}

$content_html .= "
    <div class='field'>
        <div class='label'>Total Investment</div>
        <div class='value'>$totalCost</div>
    </div>
    <div class='field'>
        <div class='label'>Applicant Name</div>
        <div class='value'>$fullName</div>
    </div>
    <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'>$email</div>
    </div>
    <div class='field'>
        <div class='label'>Phone Number</div>
        <div class='value'>$phone</div>
    </div>
    <div class='field'>
        <div class='label'>Institution</div>
        <div class='value'>$institution</div>
    </div>";

$message_html = get_email_template("Training Program Enrollment", $content_html, "This enrollment was submitted via the Ebanex International training portal.");

// Build headers
$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── SEND ─────────────────────────────────────────────────────────────
// Send to domain email first (more reliable), then external
$sent_primary = send_smtp_email($to_email_primary, $subject, $message_html, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $message_html, $headers);

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
