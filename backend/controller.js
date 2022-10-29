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