function search(){

  const searchInput = document.getElementById("search");

  if ( searchInput ) {

    let value = "";

    searchInput.addEventListener("keyup", function(e){

      value = this.value.trim();

      if ( value.length >= 3 ) {
        console.log("Search ... for keyword : "+value);
      }

    })

  }

}


export default search;