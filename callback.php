<?php $number = $_POST['number'];
$formcontent="From: $number";
$recipient = "traktor-ok@ukr.net";
$subject = "Callback Form";
mail($recipient, $subject, $formcontent) or die("Error!");
echo "Thank You!";
?>