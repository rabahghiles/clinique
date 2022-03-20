function resultSearch(data){


  if ( data.length === 0 ) {
    return `
      <h2>Resultat de votre recherche (0) :</h2>
      <p class="first">Aucun resultat trouvé en base de données.</p>
    `;
  }else {
    return `
      <h2>Resultat de votre recherche (${data.length}) :</h2>
      <ul class="result_search">
        <li class="header"><div>NIR</div><div>Date de naissance</div><div></div></li>
        ${getRows(data)}
      </ul>
    `;
  }


}


function getRows (data){

  let rows = "";

  data.forEach(benef => {

    rows += `
      <li class="row">
        <div>${benef.nir}</div>
        <div>${benef.date_n}</div>
        <ul class="actions">
        <li><a class="benef_action benef_action_detail" href="${benef.nir}">Détails</a></li>
        <li><a class="benef_action benef_action_add_affection" href="${benef.nir}">Ajouter une affection</a></li>
        <li><a class="benef_action benef_action_add_prestation" href="${benef.nir}">Ajouter une prestation</a></li>
        </ul>
      </li>
    `;

  })

  return rows;

}


export default resultSearch;