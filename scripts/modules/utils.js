export function initSelects(anneeNSelect, anneeDSelect) {

  if (anneeNSelect) for (let i=new Date().getFullYear(); i>=1900; i--) anneeNSelect.appendChild(createOption(i,i));
  if (anneeDSelect) for (let i=new Date().getFullYear(); i>=1900; i--) anneeDSelect.appendChild(createOption(i,i));

};


export function checkInput(input, regex) {


  let value = input.value.trim();

  if ( regex.test(value) ) return value
  else {
    // console.log(input.parentNode.classList);
    input.parentNode.classList.add("form_input_c_error");
    return false;
  }


}

function createOption(value, placeholder) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = placeholder;
  return option;
}