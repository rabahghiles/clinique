<?php

// register.php
$password = "hello.word.11";
$getpassword = password_hash($password, PASSWORD_ARGON2ID);


echo $getpassword;

// // login.php
// if (password_verify($password, $getpassword)) {
//     echo "Password matches.";
// }
// else {
//     echo "Password incorrect.";
// }
// ?>

