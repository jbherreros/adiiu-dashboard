/* In this js file all the endpoints are called and the output data is passed through 
the chart functions to be displayed */

async function getBestScores(year,limit) {
  let url = "./backend/bestScorersPerYear.php?year=" + year+"&limit="+limit;
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }

  return await response.json();
}

async function getGoalsPerLeague(year) {
  let url = "./backend/goalsPerLeague.php?year=" + year;
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }

  return await response.json();
}


async function getMatchesAndGoalsPerYear(name) {
  let url = "./backend/matchesAndGoalsPerYear.php?name=" + name;
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }

  return await response.json();
}

/*function callApi(){
  //Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    console.log(JSON.parse(this.responseText));
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "apiv3.apifootball.com/?action=get_players&APIkey=$18c70144b47b2e7f827fbb0ee839a5a52fe3954dedc2489d9b358d91b7283055", true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);
}*/
