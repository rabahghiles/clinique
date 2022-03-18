import { initSelects, checkInput } from "./utils.js"

function checkAddBenefForm(){

  const form = document.getElementById("form_add_benef");

  if ( form ) {

    // Inputs
    const nir = document.getElementById("nir");
    const anneeNSelect = document.getElementById("annee_n");
    const departementR = document.getElementById("dep");
    const sexe = document.getElementById("sexe");
    const anneeDSelect = document.getElementById("annee_d");
    const moisDSelect = document.getElementById("mois_d");

    // Regex
    const nirRegex = /^[a-zA-Z]{17}$/;
    const yearRegex = /^[0-9]{4}$/;
    const monthRegex = /^[0-9]{2}$/;
    const depRegex = /^[0-9]{2,3}$/;
    const sexeRegex = /^[01]{1}$/;

    // Init all selects
    initSelects(anneeNSelect, anneeDSelect);


    // Check Inputs on submit
    form.addEventListener("submit", function(e){

      e.preventDefault();
      form.querySelectorAll(".form_input_c_error").forEach( elem => elem.classList.remove("form_input_c_error"));
      
      let error = false;
      const data = {};

      checkInput(nir, nirRegex) ? data.nir = checkInput(nir, nirRegex) : error = true;
      checkInput(anneeNSelect, yearRegex) ? data.anneeNaissance = checkInput(anneeNSelect, yearRegex) : error = true;
      checkInput(departementR, depRegex) ? data.departement = checkInput(departementR, depRegex) : error = true;
      checkInput(sexe, sexeRegex) ? data.sexe = checkInput(sexe, sexeRegex) : error = true;
      checkInput(anneeDSelect, yearRegex) ? data.anneeDeces = checkInput(anneeDSelect, yearRegex) : error = true;
      checkInput(moisDSelect, monthRegex) ? data.moisDeces = checkInput(moisDSelect, monthRegex) : error = true;

      if ( error ) {
        console.log("Error");
        console.log(data)
        return false;
      }

      console.log("Sub !!");
      console.log(data);

    })

  }

}

export default checkAddBenefForm;