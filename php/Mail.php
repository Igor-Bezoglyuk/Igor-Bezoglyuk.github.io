<?php
$to = "igor.bezoglyuk@mail.ru"; // емайл получателя данных из формы
$tema = "Сообщение с вашего сайта {Web} Verstka:"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers, "-f igor.bezoglyuk.mail@mywebverstka.ru"); //отправляет получателю на емайл значения переменных
header("Location:../index.html"); //Програма будит работать , если вы укажите в настройках сервера в "Почта" SMTP Сервер, Порт, Указать  свою почту , и имя пользователя тоже ввести свою почту и пароль от почты, шыфрование Авто.

?>