function resultSearch(){

  const data = [
    {
      nir: "AZSDECVFGTYHUJIPL",
      date_n: "1992-03-22",
    },
    {
      nir: "AAAAAAAAAADDDDDD",
      date_n: "1993-03-22",
    },
    {
      nir: "DDDDECVFGTCDDDDDD",
      date_n: "1989-03-22",
    },
    {
      nir: "CCCECVFGTYHUJIPLD",
      date_n: "1932-03-22",
    },
  ];

  return `
    <h2>Resultat de votre recherche (${data.length}) :</h2>
    <ul class="result_search">
      <li class="header"><div>NIR</div><div>Date de naissance</div><div></div></li>
      ${getRows(data)}
    </ul>
  `;

}


function getRows (data){

  let rows = "";

  data.forEach(benef => {

    rows += `
      <li class="row">
        <div>${benef.nir}</div>
        <div>${benef.date_n}</div>
        <ul class="actions">
          <li><a class="benef_action benef_action_add_affection" href="${benef.nir}">Ajouter une affection</a></li>
          <li><a class="benef_action benef_action_add_prestation" href="${benef.nir}">Ajouter une prestation</a></li>
          <li><a class="benef_action benef_action_delet_benef" href="${benef.nir}">Supprimer</a></li>
        </ul>
      </li>
    `;

  })

  return rows;

}


export default resultSearch;