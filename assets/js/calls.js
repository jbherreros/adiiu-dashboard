document.addEventListener("DOMContentLoaded", function () {

  call(2016);

  function call(year) {
    let url = "./assets/php/bestScorersPerYear.php?year="+year;
    console.log(url); 
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        createChart(json);
      });
  }

  var isFilterOpened = false;
  function openFilter() {
    let filter = document.getElementById("filter");
    let filterItems = document.getElementById("filter-items");

    if (!isFilterOpened) {
      console.log("displaying filter");
      filter.style.height = "40px";
      filter.style.transform = 'translateY(34px);';
      /*filterItems.style.opacity = 1;*/
      filterItems.style.transform = 'translate(0px, 0px)';
      isFilterOpened=true;
    } else {
      console.log("hiding filter");
      filter.style.height = "0px";
      filter.style.transform = 'translateY(-34px);';
      /*filterItems.style.opacity = 0;*/
      filterItems.style.transform= 'translate(0px, -39px)';
      console.log("filter items transform: "+filterItems.style.transform);
      isFilterOpened=false;
    }
  }

  document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      console.log(e.target.value);
      call(e.target.value);
    });

  function createChart(json) {
    Highcharts.chart("container", {
      chart: {
        zoomType: "xy",
      },
      title: {
        text: "Top 10 Scorers per Year",
        align: "center",
      },
      subtitle: {
        text: "Year 2018",
        align: "center",
      },
      xAxis: [
        {
          categories: [
            json[0].Player_Names,
            json[1].Player_Names,
            json[2].Player_Names,
            json[3].Player_Names,
            json[4].Player_Names,
            json[5].Player_Names,
            json[6].Player_Names,
            json[7].Player_Names,
            json[8].Player_Names,
            json[9].Player_Names,
          ],
          crosshair: true,
        },
      ],
      yAxis: [
        {
          // Primary yAxis
          labels: {
            format: "{value}",
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          title: {
            text: "Goals",
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
        },
        {
          // Secondary yAxis
          title: {
            text: "Shots",
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        align: "center",
        x: 0,
        verticalAlign: "top",
        y: 60,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          "rgba(255,255,255,0.25)",
      },
      series: [
        {
          name: "Shots",
          type: "column",
          yAxis: 1,
          data: [
            parseInt(json[0].Shots),
            parseInt(json[1].Shots),
            parseInt(json[2].Shots),
            parseInt(json[3].Shots),
            parseInt(json[4].Shots),
            parseInt(json[5].Shots),
            parseInt(json[6].Shots),
            parseInt(json[7].Shots),
            parseInt(json[8].Shots),
            parseInt(json[9].Shots),
          ],
        },
        {
          name: "Goals",
          type: "spline",
          data: [
            parseInt(json[0].Goals),
            parseInt(json[1].Goals),
            parseInt(json[2].Goals),
            parseInt(json[3].Goals),
            parseInt(json[4].Goals),
            parseInt(json[5].Goals),
            parseInt(json[6].Goals),
            parseInt(json[7].Goals),
            parseInt(json[8].Goals),
            parseInt(json[9].Goals),
          ],
        },
      ],
      exporting: {
        buttons: [
          {
            text: "",
            symbol: "url(./assets/img/gear.svg)",
            symbolX: 19.5,
            symbolY: 18.5,
            titleKey: "settings",
            onclick: function () {
              openFilter();
            },
            theme: {
              "stroke-width": 1,
              stroke: "transparent",
              r: 5,
              states: {
                hover: {
                  fill: "#7cb6ec",
                },
                select: {
                  stroke: "#039",
                  fill: "#a4edba",
                },
              },
            },
          },
        ],
      },
    });
  }
});