<?php

  // Ajouter un beneficiares
  include 'connexion.php'; 

  $q = $db->prepare('INSERT INTO EB_INB_F(BEN_NIR_IDT, BEN_NAI_ANN, BEN_RES_DPT, BEN_SEX_COD, BEN_DCD_AME) VALUES (?, ?, ?, ?, ?)');
  $q->execute([
    $_POST["nir"],
    $_POST["anneeNaissance"],
    $_POST["departement"],
    $_POST["sexe"],
    $_POST["anneeDeces"]."".$_POST["moisDeces"]
  ]);

  $response->error = false;
  echo json_encode($response);

?>