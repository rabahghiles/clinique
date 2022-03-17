function checkAddBenefForm(){

  const form = document.getElementById("form_add_benef");

  if ( form ) {

    const anneeNSelect = document.getElementById("annee_n");
    const anneeDSelect = document.getElementById("annee_d");
    const moisDSelect = document.getElementById("mois_d");

    initSelects(anneeNSelect, anneeDSelect);


    form.addEventListener("submit", function(e){
      e.preventDefault();
      console.log("hello");
      // const nir = document.getElementById("");
    })

  }

}

function initSelects(anneeNSelect, anneeDSelect) {
  if (anneeNSelect) for (let i=new Date().getFullYear(); i>=1900; i--) anneeNSelect.appendChild(createOption(i,i));
  if (anneeDSelect) for (let i=new Date().getFullYear(); i>=1900; i--) anneeDSelect.appendChild(createOption(i,i));
};

function createOption(value, placeholder) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = placeholder;
  return option;
}




export default checkAddBenefForm;