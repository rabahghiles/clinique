import { initSelects, checkInput } from "./utils.js"


function checkAddBenefForm(){

  const form = document.getElementById("form_add_benef");

  if ( form ) {

    // Inputs
    const anneeNSelect = document.getElementById("annee_n");
    const anneeDSelect = document.getElementById("annee_d");
    const nir = document.getElementById("nir");
    const departementR = document.getElementById("dep");
    const sexe = document.getElementById("sexe");
    const moisDSelect = document.getElementById("mois_d");

    // Regex
    const nirRegex = /^[a-zA-Z]{17}$/;
    const yearRegex = /^[0-9]{4}$/;
    const monthRegex = /^[0-9]{2}$/;
    const depRegex = /^[0-9]{3}$/;

    // Init all selects
    initSelects(anneeNSelect, anneeDSelect);


    // Check Inputs
    // console.log(checkInput(nir, nirRegex));



    form.addEventListener("submit", function(e){
      e.preventDefault();
      form.querySelectorAll(".form_input_c_error").forEach( elem => elem.classList.remove("form_input_c_error"));
      console.log(checkInput(nir, nirRegex));
      // console.log({
      //   "NIR" : nir.value,
      //   "Année de naissance" : anneeNSelect.value,
      //   "Département de résidence" : departementR.value,
      //   "Sexe" : sexe.value,
      //   "Année de décès" : anneeDSelect.value,
      //   "Mois de décès" : moisDSelect.value,
      // })
    })

  }

}






export default checkAddBenefForm;