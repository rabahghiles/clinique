import search from "./modules/search.js";

import checkAddBenefForm from "./modules/contorlAddBenef.js";
import checkAddAffecForm from "./modules/controlAddAffec.js";
import checkAddPresForm from "./modules/controlAddPres.js";

import renderFormAddBenef from "./templates/template-form-add-benef.js";
import renderFormAddAffec from "./templates/template-form-add-affec.js";
import renderFormAddPres from "./templates/template-form-add-pres.js";

(function init(){
  search();
  checkAddBenefForm();
  checkAddAffecForm();
  checkAddPresForm();
  switchPage();
  renderPage(1);
})()


function switchPage(){

  document.querySelectorAll(".switchBtn").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(this.getAttribute("href"))
  }))

}

function renderPage(page) {

  const container = document.querySelector("#form_c");

  container.innerHTML = "";

  if ( page == 1 ) {
    container.innerHTML = renderFormAddBenef();
    checkAddBenefForm();
  }
  else if (page == 2) {
    container.innerHTML = renderFormAddAffec();
    checkAddAffecForm();
  }
  else {
    container.innerHTML = renderFormAddPres();
    checkAddPresForm();
  }

}