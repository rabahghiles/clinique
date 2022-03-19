<?php

  // Modifier un beneficiares
  include './connexion.php';

  $q= $db->prepare("UPDATE EB_INB_F SET BEN_NAI_ANN=?, BEN_RES_DPT=?, BEN_SEX_COD=?, BEN_DCD_AME=? WHERE BEN_NIR_IDT=?");
  $q->execute([
    $_POST["anneeNaissance"],
    $_POST["departement"],
    $_POST["sexe"],
    $_POST["anneeDeces"]."".$_POST["moisDeces"],
    $_POST["nir"],
  ]);

  $response->error = false;
  echo json_encode($response);

?>