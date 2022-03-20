function detailsBenef(nir){

  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1/clinique/api/get_benef_infos.php?nir=${nir}`)
    .then( res => res.json() )
    .then( data => resolve(getTemplate(data)) )
  })

}

function getTemplate({personnal, affections, prestations}) {

  let template = `
    <h2>Détails bénéficiaire : ${personnal.BEN_NIR_IDT}</h2>
              
    <h3>Informations personnels :</h3>
    <div class="personnal_infos">
      <div><span class="strong">NIR :</span>${personnal.BEN_NIR_IDT}</div>
      <div><span class="strong">Année de naissance :</span> ${personnal.BEN_NAI_ANN}</div>
      <div><span class="strong">Département de résidence :</span> ${personnal.BEN_RES_DPT}</div>
      <div><span class="strong">Sexe :</span> ${personnal.BEN_SEX_COD === 1 ? 'Homme' : 'Femme'}</div>
      ${getMonthAndYear(personnal.BEN_DCD_AME)}
      <div class="actions">
        <a class="action_benef action_benef_modif" href="${personnal.BEN_NIR_IDT}">Modifier</a>
        <a class="action_benef action_benef_delet" href="${personnal.BEN_NIR_IDT}">Supprimer</a>
      </div>
    </div>
  `;

  template += `<h3>Affections : (${affections.length})</h3>`;

  if (affections.length > 0) template += `
    <div class="affecs">
      <ul>
        <li class="head">
          <div>N° ALD</div>
          <div>Début ALD ou MP</div>
          <div>Fin ALD ou MP</div>
          <div>Motif exonération</div>
          <div>Motif médical</div>
          <div></div>
        </li>
        ${getAffection(affections)}
      </ul>
    </div>
  `;

  template += `<h3>Prestations : (${prestations.length})</h3>`;

  if (prestations.length > 0) template += `
    <div class="press">
      <ul>
        <li class="head">
          <div>Début des soins</div>
          <div>Fin des soins</div>
          <div>N° PS</div>
          <div>Nature de la prestation</div>
          <div>Mise à disposition</div>
          <div>Nature d'activité</div>
          <div>Top bénéficiaire CMU</div>
          <div>Prescription</div>
          <div>Quantité</div>
          <div></div>
        </li>
        ${getPresstation(prestations)}
      </ul>
    </div>

  `;


  return template;

}


function getAffection(data) {

  let result = "";

  data.forEach(affec => {
    result += `
      <li class="row">
        <div>${affec.IMB_ALD_NUM}</div>
        <div>${affec.IMB_ALD_DTD}</div>
        <div>${affec.IMB_ALD_DTF}</div>
        <div>${affec.IMB_ETM_NAT}</div>
        <div>${affec.MED_MTF_COD}</div>
        <div class="actions">
          <a class="action_affec action_affec_modif" href="${affec._id}">Modifier</a>
          <a class="action_affec action_affec_delet" href="${affec._id}">Supprimer</a>
        </div>
      </li>
    `;
  });

  return result;
}

function getPresstation(data) {

  let result = "";

  data.forEach(press => {
    result += `
      <li class="row">
        <div>${press.EXE_SOI_DTD}</div>
        <div>${press.EXE_SOI_DTF}</div>
        <div>${press.PFS_PRE_CRY}</div>
        <div>${press.PRS_NAT_REF}</div>
        <div>${press.FLX_DIS_DTD}</div>
        <div>${press.PSE_ACT_SPE}</div>
        <div>${press.BEN_CMU_TOP}</div>
        <div>${press.PRE_PRE_DTD}</div>
        <div>${press.PRS_ACT_QTE}</div>
        <div class="actions">
          <a class="action_press action_press_modif" href="${press._id}">Modifier</a>
          <a class="action_press action_press_delet" href="${press._id}">Supprimer</a>
        </div>
      </li>
    `;
  });

  return result;
}


function getMonthAndYear(date){

  if (date.length <= 0 ) return "";
  else {

    const monthsArray = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const year = date.substring(0,4);
    const month = monthsArray[parseInt(date.substring(4,6))-1];

    return `
      <div><span class="strong">Année de décès :</span> ${parseInt(year)}</div>
      <div><span class="strong">Mois de décès :</span> ${month.charAt(0).toUpperCase() + month.slice(1)}</div>
    `;

  }
}


export default detailsBenef;