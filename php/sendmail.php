<?php




use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\Exception;

require 'Phpmailer/Exception.php';
require 'Phpmailer/PHPMailer.php';
require 'Phpmailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;              //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'enviodeprospect0@gmail.com';                     //SMTP username
    $mail->Password   = 'baonufyqvheqxytr';                               //SMTP password
    $mail->SMTPSecure = 'tsl';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('enviodeprospect0@gamil.com', 'danielurzola.com');
    $mail->addAddress('daniel.urzola96@gmail.com');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Nuevo mensaje';
    $mail->Body    = $body;
    $mail->CharSet    = 'UTF-8';

    $mail->send();
    echo 'El mensaje fue enviado';
}   catch (Exception $e) {
    echo "El mensaje no pudo ser enviado: {$mail->ErrorInfo}";
}