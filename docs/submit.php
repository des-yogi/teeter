<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

try {
    $breakpoint = true;

    if ($_SERVER['REQUEST_METHOD'] != 'POST')
    {
        header("HTTP/1.0 405 Method Not Allowed");
        die('Method not allowed');
    }

    header("Content-Type: application/json");

    $firstName = isset($_POST['firstName']) ? strip_tags(trim($_POST['firstName'])) : null;
    $lastName = isset($_POST['lastName']) ? strip_tags(trim($_POST['lastName'])) : null;
    $tel = isset($_POST['tel']) ? strip_tags(trim($_POST['tel'])) : null;
    $email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : null;
    $payment = isset($_POST['payment']) ? strip_tags(trim($_POST['payment'])) : null;
    $delivery = isset($_POST['delivery']) ? strip_tags(trim($_POST['delivery'])) : null;
    $itemName = isset($_POST['itemName']) ? strip_tags(trim($_POST['itemName'])) : null;
    $quantity = isset($_POST['quantity']) ? strip_tags(trim($_POST['quantity'])) : null;
    $price = isset($_POST['price']) ? strip_tags(trim($_POST['price'])) : null;
    $agreement = isset($_POST['agreement']) ? ($_POST['agreement'] === true || $_POST['agreement'] === 'true') : null;

    if (!$firstName)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Имя должно быть указано',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$lastName)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Фамилия должна быть указана',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$tel)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Телефон должен быть указан',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$email)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Email должен быть указан',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$payment)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Не выбран вид оплаты',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$delivery)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Не выбран тип доставки',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$itemName)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Не указан товар',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$quantity)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Не указано количество',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$price)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Цена не указана',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!((is_numeric($price)) && preg_match('/^([0]|[1-9]\d*)(\.\d+)?$/', $price)))
    {
        die(json_encode([
            'success' => false,
            'error' => 'Некорректная цена',
        ], JSON_UNESCAPED_UNICODE));

    }

    if (!(($quantity) && (is_numeric($quantity)) && (preg_match('/^[1-9]\d*$/', $quantity))))
    {
        die(json_encode([
            'success' => false,
            'error' => 'Некорректное количество',
        ], JSON_UNESCAPED_UNICODE));
    }

    if (!$agreement)
    {
        die(json_encode([
            'success' => false,
            'error' => 'Нужно согласиться на обработку персональных данных',
        ], JSON_UNESCAPED_UNICODE));
    }

    switch ($payment)
    {
        case 'cashless':
            $payment = 'Безналичный расчет';
            break;
        case 'cash':
            $payment = 'Наличными в магазине';
            break;
        default:
            die(json_encode([
                'success' => false,
                'error' => 'Некорректный вид оплаты',
            ], JSON_UNESCAPED_UNICODE));
            break;
    }

    switch ($delivery)
    {
        case 'pickup':
            $delivery = 'Самовывоз';
            break;
        case 'new_post':
            $delivery = 'Новая почта';
            break;
        case 'courier':
            $delivery = 'Курьер по Киеву';
            break;
        default:
            die(json_encode([
                'success' => false,
                'error' => 'Некорректный тип доставки',
            ], JSON_UNESCAPED_UNICODE));
            break;
    }

    $message = 'Оформлен заказ с сайта teeter.com.ua' . PHP_EOL .
        'Имя, Фамилия:         ' . $firstName . ' ' . $lastName . PHP_EOL .
        'Телефон:    ' . $tel . PHP_EOL .
        'Email:      ' . $email . PHP_EOL .
        'Оплата:     ' . $payment . PHP_EOL .
        'Доставка:   ' . $delivery . PHP_EOL .
        'Товар:      ' . $itemName . PHP_EOL .
        'Количество: ' . $quantity . PHP_EOL .
        'Всего на сумму: ' . $price . ' грн.'
    ;

    $mailer = new PHPMailer;
    $mailer->isSendmail();
    //$mailer->isSMTP();
    $mailer->Host = 'mail.adm.tools';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'info@teeter.com.ua';
    $mailer->Password = 'zVp36hDS9Dg3';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 465;
    $mailer->setFrom('info@teeter.com.ua', 'Teeter - инверсионные столы');
    $mailer->addAddress('smatienko@mfitness.com.ua',  ''.$firstName.' '.$lastName.'');// client	
    // $mailer->addAddress('des.yogi@ukr.net', 'Joe User');
    $mailer->isHTML(false);
    $mailer->Subject = 'Новый заказ с сайта teeter.com.ua';
    $mailer->CharSet = 'UTF-8';
    $mailer->Body  = $message;

    $isSent = $mailer->send();

    if ($isSent)
    {
        die(json_encode([
            'success' => true
        ], JSON_UNESCAPED_UNICODE));
    }

    die(json_encode([
        'success' => false,
        'error' => 'Не удалось отправить email: ' . $mailer->ErrorInfo,
    ], JSON_UNESCAPED_UNICODE));
} catch (\Exception $e) {
    die(json_encode([
        'success' => false,
        'error' => 'Не удалось обработать запрос',
    ], JSON_UNESCAPED_UNICODE));
}
