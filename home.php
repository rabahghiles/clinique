<?php

  session_start();

  if ( empty($_SESSION["user_email"]) || !empty($_POST["deconnexion"]) ) {
    $_SESSION["user_email"] = false;
    $_SESSION["password"] = false;
    session_destroy();
    header("Location: index.php");
    exit;
  }

?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/login.css">
  <script src="https://kit.fontawesome.com/6b2ebd8067.js" crossorigin="anonymous"></script>
  <title>Document</title>
</head>
<body>
  
  <div class="main">

    <div class="pannel">
      <div class="pannel_c">
        <a class="switchBtn" href="1">Bénéficiaires</a>
      </div>
    </div>

    <div class="body">

      <div class="body_c">

        <div class="search">
          <div class="search_container">
            <input id="search" type="text" placeholder="Chercher par NIR ...">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <form class="deconnexion_form" action="home.php" method="post">
            <input type="hidden" name="deconnexion" value="deconnexion">
            <button>Déconnexion</button>
          </form>
        </div>

        <div class="form_c" id="form_c">
          <p class="first">Commncer une recherche pour avoir un resultat ...</p>
        </div>

      </div>

    </div>

  </div>

  <script src="./scripts/librairies/jquery.js"></script>
  <script type="module" src="./scripts/app.js"></script>

</body>
</html>