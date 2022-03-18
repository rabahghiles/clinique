import { checkInput } from "./utils.js"

function checkAddAffecForm(){

  const form = document.getElementById("form_add_affect");

  if ( form ) {

    // Inputs
    const nir = form.querySelector("#nir");
    const ald = form.querySelector("#ald");
    const dateD = form.querySelector("#date_d");
    const dateF = form.querySelector("#date_f");
    const motifE = form.querySelector("#motif_e");
    const motifM = form.querySelector("#motif_m");


    // Regex
    const nirRegex = /^[a-zA-Z]{17}$/;
    const aldRegex = /^[0-9]{8}$/;
    const motifERegex = /^[0-9]{8}$/;
    const motifMRegex = /^[a-zA-Z]{5}$/;
    const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;


    // Check Inputs on submit
    form.addEventListener("submit", function(e){

      e.preventDefault();

      form.querySelectorAll(".form_input_c_error").forEach( elem => elem.classList.remove("form_input_c_error"));
      
      let error = false;
      const data = {};

      checkInput(nir, nirRegex) ? data.nir = checkInput(nir, nirRegex) : error = true;
      checkInput(ald, aldRegex) ? data.ald = checkInput(ald, aldRegex) : error = true;

      checkInput(dateD, dateRegex) ? data.date_d = checkInput(dateD, dateRegex) : error = true;
      checkInput(dateF, dateRegex) ? data.date_f = checkInput(dateF, dateRegex) : error = true;

      checkInput(motifE, motifERegex) ? data.motif_e = checkInput(motifE, motifERegex) : error = true;
      checkInput(motifM, motifMRegex) ? data.motif_m = checkInput(motifM, motifMRegex) : error = true;

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

export default checkAddAffecForm;