<?php

  // search in database
  include './connexion.php';

  $q = $db->prepare('SELECT * FROM EB_INB_F WHERE BEN_NIR_IDT LIKE ?');
  $q->execute(["%".$_GET["keyword"]."%"]);
  $benefs = $q->fetchAll();

  $response = [];

  foreach( $benefs as $key => $value ){
    $obj->nir = $value["BEN_NIR_IDT"];
    $obj->date_n = $value["BEN_NAI_ANN"];
    array_push($response, $obj);
  }

  echo json_encode($response);

?>