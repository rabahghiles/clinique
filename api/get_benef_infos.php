<?php
  // search in database
  include './connexion.php';



  $q = $db->prepare('SELECT * FROM EB_INB_F WHERE BEN_NIR_IDT = ?');
  $q->execute([$_GET["nir"]]);
  $benef = $q->fetch();

  $q = $db->prepare('SELECT * FROM EB_IMB_R WHERE BEN_NIR_IDT = ?');
  $q->execute([$_GET["nir"]]);
  $affec = $q->fetchall();


  $q = $db->prepare('SELECT * FROM ES_PRS_F WHERE BEN_NIR_IDT = ?');
  $q->execute([$_GET["nir"]]);
  $pres = $q->fetchall();

  $result->personnal = $benef;
  $result->affections = $affec;
  $result->prestations = $pres;

  echo json_encode($result);