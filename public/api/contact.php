<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Invalid input data"]);
    exit;
}

$fullName = $data['fullName'] ?? 'N/A';
$email = $data['email'] ?? 'N/A';
$service = $data['service'] ?? 'N/A';
$messageContent = $data['message'] ?? 'N/A';

$to = "yonahmatete@gmail.com";
$subject = "NEW CONTACT INQUIRY: $fullName - $service";

$message = "
New Contact Inquiry received:

Full Name: $fullName
Email: $email
Service: $service

Message:
$messageContent

---
Sent via Ebanex International Website
";

$headers = "From: info@ebanexint.co.tz\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["ok" => true]);
} else {
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "Failed to send email. Please try again or contact us directly."]);
}
