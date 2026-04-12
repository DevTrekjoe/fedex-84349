<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = $_POST['email'];
    $tracking = $_POST['tracking'];

    // Load JSON
    $json = file_get_contents("template.json");
    $data = json_decode($json, true);

    $subject = $data['subject'];

    // HTML Email Template
    $message = '
    <div style="background:#f5f5f5;padding:20px;font-family:Arial;">
      <div style="max-width:500px;margin:auto;background:#fff;padding:20px;border-radius:8px;">
        
        <div style="text-align:center;">
          <h1 style="color:#4D148C;">Fed<span style="color:#FF6600;">Ex</span></h1>
        </div>

        <h2 style="color:#4D148C;">'.$data['title'].'</h2>

        <p>'.$data['message'].'</p>

        <p><strong>Tracking Number:</strong> '.$tracking.'</p>

        <div style="text-align:center;margin:30px 0;">
          <a href="#" style="background:#4D148C;color:#fff;padding:12px 25px;text-decoration:none;border-radius:5px;">
            '.$data['button_text'].'
          </a>
        </div>

        <p>Best Regards,<br>FedEx Deliveries</p>

      </div>
    </div>
    ';

    // Headers for HTML email
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: FedEx <no-reply@yourdomain.com>" . "\r\n";

    // Send mail
    if(mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
