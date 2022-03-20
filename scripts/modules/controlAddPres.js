import { checkInput } from "./utils.js"

function checkAddPresForm(){

  const form = document.getElementById("form_add_pres");

  if ( form ) {

    // Inputs
    const nir = form.querySelector("#nir");
    const date_e_s = form.querySelector("#date_e_s");
    const date_f_s = form.querySelector("#date_f_s");
    const num_ps = form.querySelector("#num_ps");
    const nat = form.querySelector("#nat");
    const date_d = form.querySelector("#date_d");
    const spe_nat = form.querySelector("#spe_nat");
    const top_b = form.querySelector("#top_b");
    const date_pr = form.querySelector("#date_pr");
    const q_ab = form.querySelector("#q_ab");
    

    // Regex
    const nirRegex = /^[a-zA-Z0-9]{10,16}$/;
    const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    const numPsRegex = /^[a-zA-Z]{32}$/;
    const natRegex = /^[0-9]{4}$/;
    const speNatRegex = /^[0-9]{8}$/;
    const topBRegex = /^[a-zA-Z]{1}$/;
    const qAbRegex = /^[0-9]{3}$/;


    // Check Inputs on submit
    form.addEventListener("submit", function(e){

      e.preventDefault();

      form.querySelectorAll(".form_input_c_error").forEach( elem => elem.classList.remove("form_input_c_error"));
      
      let error = false;
      const data = {};

      checkInput(nir, nirRegex) ? data.nir = checkInput(nir, nirRegex) : error = true;
      checkInput(date_e_s, dateRegex) ? data.date_e_s = checkInput(date_e_s, dateRegex) : error = true;
      checkInput(date_f_s, dateRegex) ? data.date_f_s = checkInput(date_f_s, dateRegex) : error = true;
      checkInput(num_ps, numPsRegex) ? data.num_ps = checkInput(num_ps, numPsRegex) : error = true;
      checkInput(nat, natRegex) ? data.nat = checkInput(nat, natRegex) : error = true;
      checkInput(date_d, dateRegex) ? data.date_d = checkInput(date_d, dateRegex) : error = true;
      checkInput(spe_nat, speNatRegex) ? data.spe_nat = checkInput(spe_nat, speNatRegex) : error = true;
      checkInput(top_b, topBRegex) ? data.top_b = checkInput(top_b, topBRegex) : error = true;
      checkInput(date_pr, dateRegex) ? data.date_pr = checkInput(date_pr, dateRegex) : error = true;
      checkInput(q_ab, qAbRegex) ? data.q_ab = checkInput(q_ab, qAbRegex) : error = true;


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

export default checkAddPresForm;