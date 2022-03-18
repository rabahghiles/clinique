function renderFormAddAffec(){

  return `
    <h2>Ajouter une affection au bénéficiare : nom</h2>
    <form action="#" method="POST" id="form_add_affect">

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="nir">NIR<span>*</span></label>
          <input id="nir" name="nir" type="text" placeholder="EX : CCFDRDERDFCVFVGFRSS" value="FVGBNHRFGBFHGTDET" readonly disabled>
          <p>Le NIR n'est pas correct, ou déjà existant</p>
        </div>
      </div>

      <div class="form_c_row_1">
        <div class="form_input_c">
          <label for="ald">N ALD<span>*</span></label>
          <input id="ald" name="ald" type="number" placeholder="EX : 22398576">
          <p>Le numéro ALD n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="date_d">Date de début ALD ou MP<span>*</span></label>
          <input id="date_d" name="date_d" type="date">
          <p>la date du debut ALD ou MP n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="date_f">Date de fin ALD ou MP<span>*</span></label>
          <input id="date_f" name="date_f" type="date">
          <p>la date de fin ALD ou MP n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_row_2">
        <div class="form_input_c">
          <label for="motif_e">Motif exonération du bénéficiaire<span>*</span></label>
          <input id="motif_e" name="motif_e" type="number" placeholder="EX : 23456789">
          <p>Motif exonération n'est pas correct</p>
        </div>
        <div class="form_input_c">
          <label for="motif_m">Motif médical ou pathologie (code CIM10)<span>*</span></label>
          <input id="motif_m" name="motif_m" type="text" placeholder="EX : EfGjD">
          <p>Motif médical n'est pas correct</p>
        </div>
      </div>

      <div class="form_c_button">
        <button>Ajouter</button>
      </div>

    </form>
  `;

}

export default renderFormAddAffec;


