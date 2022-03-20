<?php
  // search in database
  include './connexion.php';



  $q = $db->prepare('SELECT * FROM EB_INB_F WHERE BEN_NIR_IDT = ?');
  $q->execute([$_GET["nir"]]);
  $benef = $q->fetch();

  echo json_encode($benef);