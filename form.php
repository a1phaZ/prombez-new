<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 

    $to = 'pride.ots@gmail.com'; //Почта получателя, !!!!Заменить на свою
    $subject = rawurldecode($_POST['head_mess']); //Загаловок сообщения
    $q = '';
    if (isset($_POST['q'])&&$_POST['q']!="") {
        $q = '<p>Вопрос: '.$_POST['q'].'</p>';
    }
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>
                    '.$q.'                        
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <pride.ots@gmail.com>\r\n"; //Наименование и почта отправителя !!!ЗАменить на свою.

    mail($to, $subject, $message, $headers);
    echo true;
    // echo $to.' '.$subject.' '.$message.' '.$headers;
}
?>