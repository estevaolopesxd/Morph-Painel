<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Configurações do e-mail
    $to = 'estevao.correia@hotmail.com';
    $subject = 'Contato do site';
    $message = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false));
    }
} else {
    echo json_encode(array('success' => false));
}
?>