<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/phpmailer/src/Exception.php';
require 'src/phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/language');
$mail ->IsHTML(true);

// От кого письмо
$mail->SetFrom('aodka@aodka.pp.ua', 'ДКА');
// $mail->SetFrom('kalenskiyvlad@gmail.com', 'ДКА');

// Кому отправить
$mail->addAddress('kalenskiyvlad@gmail.com');
// $mail->addAddress('aodka@aodka.pp.ua');

// Тема письма
$mail->Subject = 'Письмо от клиента';

//Тело письма
$body = '<h1>Данные клиента:</h1>';

if (trim(!empty($_POST['username']))) {
  $body .= '<p><strong>Имя:</strong> ' . htmlspecialchars($_POST['username']) . '</p>';
}

if (trim(!empty($_POST['email']))) {
  $body .= '<p><strong>E-mail:</strong> ' . htmlspecialchars($_POST['email']) . '</p>';
}

if (trim(!empty($_POST['telephone']))) {
  $body .= '<p><strong>tel:</strong> ' . htmlspecialchars($_POST['telephone']) . '</p>';
}

//Прикрепить файл
// if (!empty($_FILES['image']['tmp_name'])) {
//     //путь загрузки файла
//     $filePath = __DIR__ . "/files" . $_FILES['image']['name'];
//     //грузим файл
//     if (copy($_FILES ['image']['tmp_name'], $filePath)) {
//         $fileAttach = $filepath;
//         $body ->addAttachment($fileAttach);
//     }
// }

$mail->Body = $body;

//Отправляем

if (!$mail->send()) {
  $message = 'Ошибка при отправке: ' . $mail->ErrorInfo;
} else {
  $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header ('Content-type: application/json');
echo json_encode($response);
?>