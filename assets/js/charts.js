/* In this js file all the charts are defined for their creation */

function createFirstChart(names, goals, shots, year) {
  Highcharts.chart("container", {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: "Top 10 Scorers per Year",
      align: "center",
    },
    subtitle: {
      text: "Year " + year,
      align: "center",
    },
    xAxis: [
      {
        categories: names,
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
        data: shots,
      },
      {
        name: "Goals",
        type: "spline",
        data: goals,
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

// To handle the filter button, that displays the settings for the chart
var isFilterOpened = false;
function openFilter() {
  let filter = document.getElementById("filter");
  let filterItems = document.getElementById("filter-items");
  if (!isFilterOpened) {
    filter.style.height = "40px";
    filter.style.transform = "translateY(34px);";
    filterItems.style.transform = "translate(0px, 0px)";
    isFilterOpened = true;
  } else {
    filter.style.height = "0px";
    filter.style.transform = "translateY(-34px);";
    filterItems.style.transform = "translate(0px, -39px)";
    isFilterOpened = false;
  }
}
