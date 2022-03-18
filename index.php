<?php

  include 'api/connexion.php';

  session_start();

  if(!empty($_SESSION["user_email"])) {
    header("Location: home.php");
    exit;
  }

  $error = false;

  if ( !empty($_POST) ) {

    if ( empty($_POST["email"]) || empty($_POST["password"])  ) $error = true;
    else {
      
      $q = $db->prepare('SELECT email, password FROM users WHERE email LIKE ?');
      $q->execute([$_POST["email"]]);
      $user = $q->fetch();

      if ( !$user ) $error = true;
      else {

        if (password_verify($_POST["password"], $user["password"])) {

          $_SESSION["user_email"] = $user["email"];
          header("Location: home.php");
          exit;

        } else $error = true;

      }

    }

  }

?>


<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/login.css">
  <title>Clinique</title>
</head>
<body>
  
  <div class="login">
    <div class="login_1">
      <div class="img_over"></div>
    </div>
    <div class="login_2">
      <form class="login_form" action="index.php" method="POST">
          <?php if($error) : ?><p>Login ou mot de passe incorrect(s).</p><?php endif; ?>
          <h2>Login</h2>
          <label for="email">Email</label>
          <input id="email" name="email" type="text" placeholder="Ex: xaviermorgon@gmail.com">
          <label for="password">Mot de passe</label>
          <input id="password" name="password" type="password" placeholder="**************">
          <div>
            <button>Connexion</button>
          </div>
      </form>
    </div>
  </div>

</body>
</html>