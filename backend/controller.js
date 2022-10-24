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

// Not implemented yet
function secondChartCall() {
  let url = "./backend/...";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      createSecondChart();
    });
}