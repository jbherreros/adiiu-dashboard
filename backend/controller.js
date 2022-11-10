/* In this js file all the endpoints are called and the output data is passed through 
the chart functions to be displayed */

function firstChartCall(year,limit) {
  let url = "./backend/bestScorersPerYear.php?year=" + year+"&limit="+limit;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let names= [], goals = [], shots = [];
    
      for (let i = 0; i < json.length; i++) {
        names.push(json[i].Player_Name);
        goals.push(parseInt(json[i].Goals));
        shots.push(parseInt(json[i].Shots));
      }

      createFirstChart(names, goals, shots ,year);
    });
}

function secondChartCall(year){
  let url = "./backend/goalsPerLeague.php?year=" + year;
  let array = [];
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      for(let i = 0; i < json.length; i++){
        let arr = [];
        arr.push(json[i].League);
        arr.push(parseInt(json[i].Total_Goals));
        array.push(arr)
      }
      createChartGoalsPerLeague(year,array);
    });
}

function thirdChartCall(name){
  let url = "./backend/matchesAndGoalsPerYear.php?name=" + name;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let matches = [];
      let goals = [];
      let years = [];
      for(let i = 0; i < json.length; i++){
        matches.push(parseInt(json[i].Matches_Played));
        goals.push(parseInt(json[i].Goals));
        years.push(parseInt(json[i].Year));
      }
      createThirdChart(matches,goals,years,name);
    });
}

// Not implemented yet
function seconddChartCall() {
  let url = "./backend/...";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      createSecondChart();
    });
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
