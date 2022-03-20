import { initSelects, checkInput } from "./utils.js"
import { renderPage } from "../app.js";

function checkAddBenefForm(type){

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
    const nirRegex = /^[a-zA-Z0-9]{10,16}$/;
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
      const data = new FormData();
      const params = {};

      checkInput(nir, nirRegex) ? data.append('nir', checkInput(nir, nirRegex).value) : error = true;
      checkInput(anneeNSelect, yearRegex) ? data.append('anneeNaissance', checkInput(anneeNSelect, yearRegex).value) : error = true;
      checkInput(departementR, depRegex) ? data.append('departement', checkInput(departementR, depRegex).value) : error = true;
      checkInput(sexe, sexeRegex) ? data.append('sexe', checkInput(sexe, sexeRegex).value) : error = true;
      checkInput(anneeDSelect, yearRegex) ? data.append('anneeDeces', checkInput(anneeDSelect, yearRegex).value) : error = true;
      checkInput(moisDSelect, monthRegex) ? data.append('moisDeces', checkInput(moisDSelect, monthRegex).value) : error = true;

      if ( error ) return false;

      if ( type === 1 ){

        fetch('http://127.0.0.1/clinique/api/edit_benef.php', {
          method: 'post',
          body: data
        })
        .then( response => response.json())
        .then( res => {
          alert("Modification apportée avec succes");
          renderPage(7, res.nir);
        });

      }else {

        fetch('http://127.0.0.1/clinique/api/add_benef.php', {
          method: 'post',
          body: data
        })
        .then( response => response.json())
        .then( res => {
          alert("Bénéficiare ajouté avec succes");
          renderPage(7, res.nir);
        });
        
      }


    })

  }

}

export default checkAddBenefForm;