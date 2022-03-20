function search(keyword){

  return new Promise((resolve, reject) => {

    fetch(`http://127.0.0.1/clinique/api/search.php?keyword=${keyword}`)
    .then( res => res.json())
    .then( data => resolve(data))

  });

}


export default search;