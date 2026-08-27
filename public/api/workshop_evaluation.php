<?php
/**
 * Ebanex International - Workshop Evaluation API
 */

ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

require_once 'mailer.php';
require_once 'security.php';

$to_email_primary = "info@ebanexint.co.tz";
$to_email_external = "yonahmatete@gmail.com";
$subject_prefix = "NEW WORKSHOP EVALUATION: Practical IT Audit Workshop";
$from_email = "info@ebanexint.co.tz";

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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$input = file_get_contents("php://input");
$json_data = json_decode($input, true);

$honeypot = $_POST['website'] ?? $json_data['website'] ?? '';
if (!empty($honeypot)) {
    echo json_encode(["ok" => true, "message" => "Evaluation submitted successfully."]); 
    exit;
}

$captcha_token = $_POST['captchaToken'] ?? $json_data['captchaToken'] ?? '';
if (!validate_turnstile($captcha_token)) {
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Security validation failed. Please try again."]);
    exit;
}

if (!check_rate_limit('workshop_evaluation', 5, 3600)) {
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Too many requests. Please try again later."]);
    exit;
}

function s($key, $data) {
    return htmlspecialchars(strip_tags($data[$key] ?? ''), ENT_QUOTES, 'UTF-8');
}

$fullName = "Anonymous";

$fields = [
    'day1', 'day2', 'day3', 'day4', 'day5', 'relevance', 'balance', 'usefulness', 'depth',
    'knowledge', 'clearly', 'responsiveness', 'pace', 'materials',
    'suitability', 'setup', 'food', 'tea', 'environment', 'cleanliness', 'registration', 'value',
    'overall',
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6'
];

$d = [];
foreach($fields as $f) {
    $d[$f] = s($f, $json_data);
}

$subject = $subject_prefix . " - " . ($fullName ?: "Anonymous");

$content_html = "
    <tr>
        <td style='padding: 20px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 12px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>A. Workshop Content</div>
            <table width='100%' cellpadding='0' cellspacing='0'>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Day 1:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['day1']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Day 2:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['day2']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Day 3:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['day3']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Day 4:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['day4']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Day 5:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['day5']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Relevance:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['relevance']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Balance:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['balance']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Usefulness:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['usefulness']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Depth & Clarity:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['depth']}</td></tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 12px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>B. Facilitator(s) and Delivery</div>
            <table width='100%' cellpadding='0' cellspacing='0'>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Knowledge:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['knowledge']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Explain Clearly:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['clearly']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Responsiveness:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['responsiveness']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Pace:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['pace']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Materials:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['materials']}</td></tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 12px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>C. Venue, Food and Logistics</div>
            <table width='100%' cellpadding='0' cellspacing='0'>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Suitability:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['suitability']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Set-up:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['setup']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Food:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['food']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Tea:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['tea']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Environment:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['environment']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Cleanliness:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['cleanliness']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Registration:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['registration']}</td></tr>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Value:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['value']}</td></tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 20px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 12px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>D. Overall Assessment</div>
            <table width='100%' cellpadding='0' cellspacing='0'>
                <tr><td style='padding: 5px 0; font-size: 13px; color: #94A3B8;'>Overall Rating:</td><td style='padding: 5px 0; font-size: 13px; color: #FFFFFF; font-weight: bold; text-align: right;'>{$d['overall']}</td></tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q1: What did you like most about this workshop?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q1']}</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q2: What could be improved?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q2']}</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q3: What other topics?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q3']}</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q4: Recommend to colleague?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q4']}</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q5: Attend future workshops?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q5']}</div>
        </td>
    </tr>
    <tr>
        <td style='padding: 15px 0; border-bottom: 1px solid #1E293B;'>
            <div style='font-size: 10px; font-weight: 900; color: #00BFFF; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;'>Q6: Additional comments?</div>
            <div style='font-size: 14px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;'>{$d['q6']}</div>
        </td>
    </tr>
";

$message_html = get_email_template("Workshop Evaluation", $content_html, "Evaluation for Practical IT Audit Workshop.");

$headers = "From: Ebanex Website <$from_email>\r\n";
$headers .= "Reply-To: $from_email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$encoded_message = chunk_split(base64_encode($message_html));

$sent_primary = send_smtp_email($to_email_primary, $subject, $encoded_message, $headers);
$sent_external = send_smtp_email($to_email_external, $subject, $encoded_message, $headers);

if ($sent_primary || $sent_external) {
    echo json_encode(["ok" => true, "message" => "Evaluation submitted successfully."]);
} else {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "error" => "The evaluation service is currently unavailable."
    ]);
}
