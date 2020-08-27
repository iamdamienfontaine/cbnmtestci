<?php
/**
 * This example shows sending a message using a local sendmail binary.
 */
require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

/**
 * FONCTIONS UTILES okokokokok
 */
function check_input($data) { 
    
    // On supprime les espaces supplémentaires
    $data = trim($data); 
    
    // On supprimes les antislashs de la chaîne
    if (get_magic_quotes_gpc()) {
        $data = stripslashes($data); 
    }
    $data = cleanInput($data);
    
//    $data = htmlspecialchars($data); 
    return $data; 
}

function cleanInput($input) {

    $search = array(
      '@<script[^>]*?>.*?</script>@si',   // Strip out javascript
      '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
      '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
      '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments
    );
    $output = preg_replace($search, '', $input);
    return $output;
}

// INITIALISATION DES VARIABLES
session_start();
$_SESSION['status'] = true;
$_SESSION['message'] = '';
$datas = [];
$errors = [];


$datas['mail_name'] =  check_input($_POST['mail_name']);
$datas['mail_email'] =  check_input($_POST['mail_email']);
$datas['mail_subject'] =  check_input($_POST['mail_subject']);
$datas['mail_content'] =  check_input($_POST['mail_content']);

// VALIDATIOn mail_name
if( !empty($datas['mail_subject']) ){
    // Sanitizing name value of type string
    $datas['mail_name'] = filter_var($datas['mail_name'], FILTER_SANITIZE_STRING);
    if ($datas['mail_name'] == ""){
        $errors[] = "Le nom saisi n'est pas valide";
    }
}
else {
    $errors[] = 'Le champ "nom" ne doit pas être vide';
}

// VALIDATION mail_email
if( !empty($datas['mail_email']) )
{    
    //sanitizing email
    $datas['mail_email'] = filter_var($datas['mail_email'], FILTER_SANITIZE_EMAIL);
    
    //After sanitization Validation is performed
    $datas['mail_email'] = filter_var($datas['mail_email'], FILTER_VALIDATE_EMAIL);
    
    if($datas['mail_email'] == ""){
        $errors[] = "L'email saisi n'est pas valide";
    }
}
else {
    $errors[] = 'Le champ "email" ne doit pas être vide';
}

// VALIDATIOn mail_subject
if( !empty($datas['mail_subject']) ){
    // Sanitizing name value of type string
    $datas['mail_subject'] = filter_var($datas['mail_subject'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
    if ($datas['mail_subject'] == ""){
        $errors[] = "Le champ \"sujet\" saisi n'est pas valide";
    }
}
else {
    $errors[] = 'Le champ "sujet" ne doit pas être vide';
}

// VALIDATIOn mail_content
if( !empty($datas['mail_content']) ){
    // Sanitizing name value of type string
    $datas['mail_content'] = filter_var($datas['mail_content'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
    if ($datas['mail_content'] == ""){
        $errors[] = "Le contenu du mail n'est pas valide";
    }
}
else {
    $errors[] = 'Le contenu du mail ne doit pas être vide';
}

if ( empty($errors) ) 
{
    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    $mail->CharSet = "UTF-8";
    // Set PHPMailer to use the sendmail transport
    $mail->isSendmail();

    //Set who the message is to be sent from
    $mail->setFrom('cbnm@www.cbnm.org', 'www.cbnm.org');

    //Set an alternative reply-to address
    // $mail->addReplyTo('ycuidet@cbnm.org', 'First Last');

    //Set who the message is to be sent to
    $mail->addAddress('cbnm@cbnm.org', 'CBNM');
    $mail->addAddress('administrateur@cbnm.org', 'Yann CUIDET');

    //Set the subject line
    $mail->Subject = 'Contact site du cbnm';

    //Set the body
    $mail->Body = 
            'Nom : '. 
		$datas['mail_name'] . "\n" . 
            'Adresse mail : '. 
		$datas['mail_email'] . "\n". 
            'Sujet : '. 
		$datas['mail_subject'] . "\n". 
            'Message : '. 
		$datas['mail_content'];

    //send the message, check for errors
    if (!$mail->send()) {
        $errors[] = $mail->ErrorInfo;
    } else {
        $_SESSION['status'] = 1; 
        $_SESSION['message'] = "Le mail a bien été envoyé";
    }

	
    if (!$mail->send()) {
        $errors[] = $mail->ErrorInfo;
    } else {
        $_SESSION['status'] = 1; 
        $_SESSION['message'] = "Le mail a bien été envoyé";
    }
}
else {
    $_SESSION['status'] = 0;
    $_SESSION['errors'] = $errors;
    $_SESSION['datas'] = $datas;
}

//require 'index.php';
header('Location: index.php'); 
