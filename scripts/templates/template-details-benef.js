function detailsBenef(nir){

  const data = {
    personnal : {
      nir,
      annee_n: "1980",
      dep: 92,
      sexe: 1,
      annee_d: "1990", 
      mois_d: "09",
    },
    affections : [
      {
        nir: "GBFHGTDETDDDDDDDD",
        ald: "11156789",
        date_d: "2020-02-10",
        date_f: "2020-01-03",
        motif_e: "11156789",
        motif_m: "AAAEF",
      },
      {
        nir: "FVGBNHRFGBFHGTDET",
        ald: "23456789",
        date_d: "2022-02-10",
        date_f: "2022-04-09",
        motif_e: "23456789",
        motif_m: "ZSDEF",
      }
    ],
    prestations : [
      {
        nir: "CCCCERFTGYHUJLKDC",
        date_e_s: "2022-01-20",
        date_f_s: "2022-03-25",
        num_ps: "DVFGRTFGHNBGTDFVFgfEDjFGHYTGBDp",
        nat: "3449",
        date_d: "2022-11-29",
        spe_nat: "22222233",
        top_b: "Z",
        date_pr: "2021-09-12",
        q_ab: "356",
      },
      {
        nir: "DDDDDDDDDDHUJLKDC",
        date_e_s: "2002-01-20",
        date_f_s: "2002-01-10",
        num_ps: "DFCGRTFGHNBGTDFVFgfEDjFGHYTGBDp",
        nat: "3440",
        date_d: "2001-02-29",
        spe_nat: "12222233",
        top_b: "A",
        date_pr: "2009-09-12",
        q_ab: "156",
      },
      {
        nir: "XXXXXXXTGYHUJLKDC",
        date_e_s: "2000-01-20",
        date_f_s: "2000-01-10",
        num_ps: "A000POKLMLBGTDFVFgfEDjFGHYTGBDp",
        nat: "1149",
        date_d: "2000-11-29",
        spe_nat: "11122233",
        top_b: "B",
        date_pr: "2019-09-12",
        q_ab: "106",
      }
    ],
  }

  const {personnal, affections, prestations} = data;


  return `
    <h2>Détails bénéficiaire : ${personnal.nir}</h2>
            
    <h3>Informations personnels :</h3>
    <div class="personnal_infos">
      <div><span class="strong">NIR :</span>${personnal.nir}</div>
      <div><span class="strong">Année de naissance :</span> ${personnal.annee_n}</div>
      <div><span class="strong">Département de résidence :</span> ${personnal.dep}</div>
      <div><span class="strong">Sexe :</span> ${personnal.sexe === 0 ? 'Homme' : 'Femme'}</div>
      <div><span class="strong">Année de décès :</span> ${personnal.annee_d}</div>
      <div><span class="strong">mois de décès :</span> ${getMonth(personnal.mois_d)}</div>
      <div class="actions">
        <a class="action_benef action_benef_modif" href="${personnal.nir}">Modifier</a>
        <a class="action_benef action_benef_delet" href="${personnal.nir}">Supprimer</a>
      </div>
    </div>

    <h3>Affections :</h3>
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

    <h3>Informations Présatation :</h3>
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

}


function getAffection(data) {

  let result = "";

  data.forEach(affec => {
    result += `
      <li class="row">
        <div>${affec.ald}</div>
        <div>${affec.date_d}</div>
        <div>${affec.date_f}</div>
        <div>${affec.motif_e}</div>
        <div>${affec.motif_m}</div>
        <div class="actions">
          <a class="action_affec action_affec_modif" href="${affec.nir}">Modifier</a>
          <a class="action_affec action_affec_delet" href="${affec.nir}">Supprimer</a>
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
        <div>${press.date_e_s}</div>
        <div>${press.date_f_s}</div>
        <div>${press.num_ps}</div>
        <div>${press.nat}</div>
        <div>${press.date_d}</div>
        <div>${press.spe_nat}</div>
        <div>${press.top_b}</div>
        <div>${press.date_pr}</div>
        <div>${press.q_ab}</div>
        <div class="actions">
          <a class="action_press action_press_modif" href="${press.nir}">Modifier</a>
          <a class="action_press action_press_delet" href="${press.nir}">Supprimer</a>
        </div>
      </li>
    `;
  });

  return result;
}


function getMonth(month){
  const monthsArray = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  return monthsArray[parseInt(month)-1];
}


export default detailsBenef;