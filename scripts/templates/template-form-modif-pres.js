function renderFormAddPres(nir){

  console.log(nir);

  const data = {
    nir: "1234ERFTGYHUJLKDC",
    date_e_s: "2022-01-20",
    date_f_s: "2022-03-25",
    num_ps: "DVFGRTFGHNBGTDFVFgfEDjFGHYTGBDp",
    nat: "3449",
    date_d: "2022-11-29",
    spe_nat: "22222233",
    top_b: "Z",
    date_pr: "2021-09-12",
    q_ab: "356",
  }

  return `
    <h2>Modifier la prestation au bénéficiare : ${data.nir}</h2>
    <form action="#" method="POST" id="form_add_pres">

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="nir">NIR<span>*</span></label>
          <input value="${data.nir}" id="nir" name="nir" type="text" placeholder="EX : CCFDRDERDFCVFVGFRSS" readonly disabled>
          <p>Le NIR n'est pas correct, ou déjà existant</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="date_e_s">Date de début d'exécution des soins<span>*</span></label>
          <input value="${data.date_e_s}" id="date_e_s" name="date_e_s" type="date">
          <p>la date de debut d'exécution soins n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="date_f_s">Date de fin d'exécution des soins<span>*</span></label>
          <input id="date_f_s" name="date_f_s" type="date">
          <p>la date de fin d'exécution des soins n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="num_ps">N° PS prescripteur crypté<span>*</span></label>
          <input value="${data.num_ps}" id="num_ps" name="num_ps" type="text" placeholder="EX : EDFBDGFHFBGTPO34RFHGTYUD">
          <p>Le numéro PS n n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="nat">Nature de la prestation de référence<span>*</span></label>
          <input value="${data.nat}" id="nat" name="nat" type="number" placeholder="EX : 3429">
          <p>Le code nature de la prestation n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="date_d">Date de mise à disposition des données<span>*</span></label>
          <input value="${data.date_d}" id="date_d" name="date_d" type="date">
          <p>La date de mise à disposition n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="spe_nat">Spécialité ou nature d'activité du PS exécutant<span>*</span></label>
          <input value="${data.spe_nat}" id="spe_nat" name="spe_nat" type="number" placeholder="EX : 343459829">
          <p>La spécialité ou nature d'activité n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="top_b">Top bénéficiaire CMU Complémentaire<span>*</span></label>
          <input value="${data.top_b}" id="top_b" name="top_b" type="text" placeholder="EX : A">
          <p>Le top bénéficiaire n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="date_pr">Date de prescription<span>*</span></label>
          <input value="${data.date_pr}" id="date_pr" name="date_pr" type="date">
          <p>La date de prescription n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="q_ab">Quantité (signée) de l'acte de base<span>*</span></label>
          <input value="${data.q_ab}" id="q_ab" name="q_ab" type="number" placeholder="EX : 334">
          <p>Le quantité (signée) de l'acte de base n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_button">
        <button>Ajouter</button>
      </div>

    </form>`;

}

export default renderFormAddPres;


