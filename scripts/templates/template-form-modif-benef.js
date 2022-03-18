function renderFormAddBenef(nir){

  console.log(nir);

  const data = {
    nir,
    annee_n: "1980",
    dep: 92,
    sexe: 1,
    annee_d: "1990", 
    mois_d: "09",
  }

  return `
    <h2>Modifier les infos du bénéficiare : ${data.nir}</h2>
    <form action="#" method="POST" id="form_add_benef">

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="nir">NIR</label>
          <input value=${data.nir} id="nir" name="nir" type="text" placeholder="EX : AZSDRFFVBGKLPMDFC">
          <p>Le NIR n'est pas correct, ou déjà existant</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_n">Année de naissance</label>
          <select name="annee_n" id="annee_n">
            ${getBirthYear(data.annee_n)}
          </select>
          <p>L'année de naissance n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="dep">Département de résidence</label>
          <input value=${data.dep} id="dep" type="number" placeholder="Ex: 91">
          <p>Le département de résidence n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="sexe">Sexe</label>
          <select name="sexe" id="sexe">
            ${ parseInt(data.sexe) === 0 ? `<option selected value="0">Homme</option>` : `<option value="0">Homme</option>` }
            ${ parseInt(data.sexe) === 1 ? `<option selected value="1">Femme</option>` : `<option value="1">Femme</option>` }
          </select>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_d">Année de décès du bénéficiaure</label>
          <select name="annee_d" id="annee_d">
            ${getBirthYear(data.annee_d)}
          </select>
        </div>
        <div class="form_input_c">
          <label for="mois_d">Mois de décès</label>
          <select name="mois_d" id="mois_d">
            ${ parseInt(data.mois_d) === 1 ? `<option selected value="01">Janvier</option>` : `<option value="01">Janvier</option>` }
            ${ parseInt(data.mois_d) === 2 ? `<option selected value="02">Février</option>` : `<option value="02">Février</option>` }
            ${ parseInt(data.mois_d) === 3 ? `<option selected value="03">Mars</option>` : `<option value="03">Mars</option>` }
            ${ parseInt(data.mois_d) === 4 ? `<option selected value="04">Avril</option>` : `<option value="04">Avril</option>` }
            ${ parseInt(data.mois_d) === 5 ? `<option selected value="05">Mai</option>` : `<option value="05">Mai</option>` }
            ${ parseInt(data.mois_d) === 6 ? `<option selected value="06">Juin</option>` : `<option value="06">Juin</option>` }
            ${ parseInt(data.mois_d) === 7 ? `<option selected value="07">Juillet</option>` : `<option value="07">Juillet</option>` }
            ${ parseInt(data.mois_d) === 8 ? `<option selected value="08">Août</option>` : `<option value="08">Août</option>` }
            ${ parseInt(data.mois_d) === 9 ? `<option selected value="09">Septembre</option>` : `<option value="09">Septembre</option>` }
            ${ parseInt(data.mois_d) === 10 ? `<option selected value="10">Octobre</option>` : `<option value="10">Octobre</option>` }
            ${ parseInt(data.mois_d) === 11 ? `<option selected value="11">Novembre</option>` : `<option value="11">Novembre</option>` }
            ${ parseInt(data.mois_d) === 12 ? `<option selected value="12">Décembre</option>` : `<option value="12">Décembre</option>` }
          </select>
        </div>
      </div>

      <div class="form_c_button">
        <button>Ajouter</button>
      </div>

    </form>`;

}


function getBirthYear(year) {

  let content = "";

  for (let i=new Date().getFullYear(); i>=1900; i--){
    content += i === parseInt(year) ? `<option selected value="${i}">${i}</option>` : `<option value="${i}">${i}</option>`
  }

  return content;

}

export default renderFormAddBenef;


