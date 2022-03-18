function renderFormAddBenef(){

  return `
    <h2>Ajouter un bénéciare</h2>
    <form action="#" method="POST" id="form_add_benef">

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="nir">NIR</label>
          <input id="nir" name="nir" type="text" placeholder="EX : AZSDRFFVBGKLPMDFC">
          <p>Le NIR n'est pas correct, ou déjà existant</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_n">Année de naissance</label>
          <select name="annee_n" id="annee_n"></select>
          <p>L'année de naissance n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="dep">Département de résidence</label>
          <input id="dep" type="number" placeholder="Ex: 91">
          <p>Le département de résidence n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="sexe">Sexe</label>
          <select name="sexe" id="sexe">
            <option value="0">Homme</option>
            <option value="1">Femme</option>
          </select>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="annee_d">Année de décès du bénéficiaure</label>
          <select name="annee_d" id="annee_d"></select>
        </div>
        <div class="form_input_c">
          <label for="mois_d">Mois de décès</label>
          <select name="mois_d" id="mois_d">
            <option value="01">Janvier</option>
            <option value="02">Février</option>
            <option value="03">Mars</option>
            <option value="04">Avril</option>
            <option value="05">Mai</option>
            <option value="06">Juin</option>
            <option value="07">Juillet</option>
            <option value="08">Août</option>
            <option value="09">Septembre</option>
            <option value="10">Octobre</option>
            <option value="11">Novembre</option>
            <option value="12">Décembre</option>
          </select>
        </div>
      </div>

      <div class="form_c_button">
        <button>Ajouter</button>
      </div>

    </form>`;

}

export default renderFormAddBenef;


