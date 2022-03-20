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
import detailsBenef from "./templates/template-details-benef.js";

(function init(){
  onHomeSearch();
  switchPage();
})()

function onHomeSearch() {
  const searchInput = document.getElementById("search");

  if ( searchInput ) {

    let value = "";
    let data = [];

    searchInput.addEventListener("keyup", function(e){

      value = this.value.trim();

      if ( value.length >= 3 ) search(value).then( data => renderPage(0, data) );

    })

  }
}

function switchPage(){

  document.querySelectorAll(".switchBtn").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(this.getAttribute("href"))
  }))

}

function benefUserActions(){

  document.querySelectorAll(".benef_action_detail").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(7, this.getAttribute("href"))
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

function eventListnerDetailsBenef(){

  document.querySelectorAll(".action_benef_modif").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    renderPage(4, this.getAttribute("href"))
  }))
  document.querySelectorAll(".action_benef_delet").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    const data = new FormData();
    data.append('nir', this.getAttribute("href"))
    fetch('http://127.0.0.1/clinique/api/delete_benef.php', {
      method: 'post',
      body: data
    })
    .then( () => {
      alert("Supression du bénéficiare avec succes");
      renderPage(8, "");
    })
  }))

  document.querySelectorAll(".action_affec_modif").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    // renderPage(7, this.getAttribute("href"))
  }))
  document.querySelectorAll(".action_affec_delet").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    // renderPage(7, this.getAttribute("href"))
  }))


  document.querySelectorAll(".action_press_modif").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    // renderPage(7, this.getAttribute("href"))
  }))
  document.querySelectorAll(".action_press_delet").forEach(btn => btn.addEventListener("click", function(e){
    e.preventDefault();
    // renderPage(7, this.getAttribute("href"))
  }))
  

  
  
  
  

}

export function renderPage(page, data) {

  const container = document.querySelector("#form_c");

  container.innerHTML = "";

  
  if ( page == 0 ) {

    container.innerHTML = resultSearch(data);
    benefUserActions();

  } else if ( page == 1 ) {

    container.innerHTML = renderFormAddBenef();
    checkAddBenefForm(2);

  } else if (page == 2) {

    container.innerHTML = renderFormAddAffec(data);
    checkAddAffecForm();

  } else if (page == 3) {

    container.innerHTML = renderFormAddPres(data);
    checkAddPresForm();

  } else if ( page ==  4) {

    renderFormEditBenef(data)
    .then(template => {
      container.innerHTML = template;
      checkAddBenefForm(1);
    })

  } else if ( page ==  5) {
    container.innerHTML = renderFormEditAffec(data);
    checkAddAffecForm()

  } else if ( page ==  6) {

    container.innerHTML = renderFormEditPres(data);
    checkAddPresForm();

  } else if ( page ==  7) {

    detailsBenef(data)
    .then(template => {
      container.innerHTML = template;
      eventListnerDetailsBenef();
    })

  }else if (page == 8) {
    container.innerHTML = `<p class="first">Commncer une recherche pour avoir un resultat ...</p>`;
  }

}