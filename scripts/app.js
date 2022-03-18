import search from "./modules/search.js";

import checkAddBenefForm from "./modules/contorlAddBenef.js";
import checkAddAffecForm from "./modules/controlAddAffec.js";
import checkAddPresForm from "./modules/controlAddPres.js";

import renderFormAddBenef from "./templates/template-form-add-benef.js";
import renderFormAddAffec from "./templates/template-form-add-affec.js";
import renderFormAddPres from "./templates/template-form-add-pres.js";

import renderFormEditBenef from "./templates/template-form-modif-benef.js";
import renderFormEditAffec from "./templates/template-form-modif-affec.js";
import renderFormEditPres from "./templates/template-form-modif-pres.js";

import resultSearch from "./templates/template-form-result-search.js";

(function init(){
  search();
  checkAddBenefForm();
  checkAddAffecForm();
  checkAddPresForm();
  switchPage();
  renderPage(0);
})()


function switchPage(){

  document.querySelectorAll(".switchBtn").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(this.getAttribute("href"))
  }))

  document.querySelectorAll(".benef_action_add_affection").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(2, this.getAttribute("href"))
  }))

  document.querySelectorAll(".benef_action_add_prestation").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(3, this.getAttribute("href"))
  }))

  document.querySelectorAll(".benef_action_delet_benef").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    // renderPage(this.getAttribute("href"))
  }))


}

function renderPage(page, nir) {

  const container = document.querySelector("#form_c");

  container.innerHTML = "";

  
  if ( page == 0 ) {

    container.innerHTML = resultSearch();
    switchPage();

  } else if ( page == 1 ) {

    container.innerHTML = renderFormAddBenef();
    checkAddBenefForm();

  } else if (page == 2) {

    container.innerHTML = renderFormAddAffec(nir);
    checkAddAffecForm();

  } else if (page == 3) {

    container.innerHTML = renderFormAddPres(nir);
    checkAddPresForm();

  } else if ( page ==  4) {

    container.innerHTML = renderFormEditBenef(nir);
    checkAddBenefForm;

  } else if ( page ==  5) {
    container.innerHTML = renderFormEditAffec(nir);
    checkAddBenefForm;

  } else if ( page ==  6) {

    container.innerHTML = renderFormEditPres(nir);
    checkAddBenefForm;

  }

}