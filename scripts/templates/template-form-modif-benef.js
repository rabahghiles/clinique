function renderFormAddBenef(nir){


  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1/clinique/api/get_benef.php?nir=${nir}`)
    .then( res => res.json() )
    .then( data => resolve(getTemplate(data)) )
  })

}


function getTemplate(data) {

  const {annee_d, mois_d} = getMonthAndYear(data.BEN_DCD_AME)

  return `
    <h2>Modifier les infos du bénéficiare : ${data.BEN_NIR_IDT}</h2>
    <form action="#" method="POST" id="form_add_benef">

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="nir">NIR</label>
          <input value=${data.BEN_NIR_IDT} id="nir" name="nir" type="text" placeholder="EX : AZSDRFFVBGKLPMDFC">
          <p>Le NIR n'est pas correct, ou déjà existant</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_n">Année de naissance</label>
          <select name="annee_n" id="annee_n">
            ${getBirthYear(data.BEN_NAI_ANN)}
          </select>
          <p>L'année de naissance n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="dep">Département de résidence</label>
          <input value=${data.BEN_RES_DPT} id="dep" type="number" placeholder="Ex: 91">
          <p>Le département de résidence n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="sexe">Sexe</label>
          <select name="sexe" id="sexe">
            ${ parseInt(data.sexe) === 1 ? `<option selected value="1">Homme</option>` : `<option value="1">Homme</option>` }
            ${ parseInt(data.sexe) === 2 ? `<option selected value="2">Femme</option>` : `<option value="2">Femme</option>` }
          </select>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_d">Année de décès du bénéficiaure</label>
          <select name="annee_d" id="annee_d">
            ${getBirthYear(annee_d)}
          </select>
        </div>
        <div class="form_input_c">
          <label for="mois_d">Mois de décès</label>
          <select name="mois_d" id="mois_d">
            ${ parseInt(mois_d) === 1 ? `<option selected value="01">Janvier</option>` : `<option value="01">Janvier</option>` }
            ${ parseInt(mois_d) === 2 ? `<option selected value="02">Février</option>` : `<option value="02">Février</option>` }
            ${ parseInt(mois_d) === 3 ? `<option selected value="03">Mars</option>` : `<option value="03">Mars</option>` }
            ${ parseInt(mois_d) === 4 ? `<option selected value="04">Avril</option>` : `<option value="04">Avril</option>` }
            ${ parseInt(mois_d) === 5 ? `<option selected value="05">Mai</option>` : `<option value="05">Mai</option>` }
            ${ parseInt(mois_d) === 6 ? `<option selected value="06">Juin</option>` : `<option value="06">Juin</option>` }
            ${ parseInt(mois_d) === 7 ? `<option selected value="07">Juillet</option>` : `<option value="07">Juillet</option>` }
            ${ parseInt(mois_d) === 8 ? `<option selected value="08">Août</option>` : `<option value="08">Août</option>` }
            ${ parseInt(mois_d) === 9 ? `<option selected value="09">Septembre</option>` : `<option value="09">Septembre</option>` }
            ${ parseInt(mois_d) === 10 ? `<option selected value="10">Octobre</option>` : `<option value="10">Octobre</option>` }
            ${ parseInt(mois_d) === 11 ? `<option selected value="11">Novembre</option>` : `<option value="11">Novembre</option>` }
            ${ parseInt(mois_d) === 12 ? `<option selected value="12">Décembre</option>` : `<option value="12">Décembre</option>` }
          </select>
        </div>
      </div>

      <div class="form_c_button">
        <button>Ajouter</button>
      </div>

    </form>`;

}


function getMonthAndYear(date){

  if (date.length <= 0 ) return {
    annee_d: "",
    mois_d: "",
  };
  else {

    const year = parseInt(date.substring(0,4));
    const month = parseInt(date.substring(4,6));

    return {
      annee_d: year,
      mois_d: month
    }

  }
}


function getBirthYear(year) {

  let content = "";

  for (let i=new Date().getFullYear(); i>=1900; i--){
    content += i === parseInt(year) ? `<option selected value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`
  }

  return content;

}

export default renderFormAddBenef;


