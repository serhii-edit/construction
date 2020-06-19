<?php

/* https://api.telegram.org/bot1229110276:AAHkRy5TNPPSuC30BdehHpqNiGEAKQzf-7c/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userObject = $_POST['userObject'];
$userMassage = $_POST['userMassage'];

$token = "1229110276:AAHkRy5TNPPSuC30BdehHpqNiGEAKQzf-7c";
$chat_id = "-493515914";
$arr = array(
  'User name: ' => $userName,
  'Telephone: ' => $userPhone,
  'Email: ' => $userEmail,
  'Object: ' => $userObject,
  'User massage: ' => $userMassage,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Form has been submited!";
} else {
  echo "Form has been submited!";
}
?>