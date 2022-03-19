<?php

  // Supprimer un beneficiares
  include './connexion.php';

  $p = $db->prepare("DELETE FROM EB_INB_F WHERE BEN_NIR_IDT=?");
  $p->execute([
    $_POST["nir"]
  ]);

  $response->error = false;
  echo json_encode($response);

?>