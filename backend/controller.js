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

async function getAllPlayers() {
  let url = "./backend/getAllPlayers.php";
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }

  return await response.json();
}

// External Api Call
async function externalApiCall(){
  const response = await fetch('https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=18c70144b47b2e7f827fbb0ee839a5a52fe3954dedc2489d9b358d91b7283055');

  if(!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }

  return await response.json();
}
