/* In this js file all the charts are defined for their creation */

function createFirstChart(data, year) {
  let shots=[], goals=[], names=[];

  for (let i = 0; i < data.length; i++) {
    names.push(data[i].Player_Name);
    goals.push(parseInt(data[i].Goals));
    shots.push(parseInt(data[i].Shots));
  }

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
    credits: {
      enabled: false
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
            openFilter(1);
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

function createSecondChart(data,year){
  let array = [];

  for(let i = 0; i < data.length; i++){
    let arr = [];
    arr.push(data[i].League);
    arr.push(parseInt(data[i].Total_Goals));
    array.push(arr);
  }

  Highcharts.chart('container2', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Goals per league',
        align: "center",
    },
    subtitle: {
        text: 'Year ' + year,
        align: "center",
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [
      {
        name: 'Total number of Goals',
        data: array
      }
    ],exporting: {
      buttons: [
        {
          name: "boton2",
          text: "",
          symbol: "url(./assets/img/gear.svg)",
          symbolX: 19.5,
          symbolY: 18.5,
          titleKey: "settings",
          onclick: function () {
            openFilter(2);
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

function createThirdChart(data,name){
  let matches = [],  goals = [],  years = [];

  for(let i = 0; i < data.length; i++){
    matches.push(parseInt(data[i].Matches_Played));
    goals.push(parseInt(data[i].Goals));
    years.push(parseInt(data[i].Year));
  }

  Highcharts.chart('container3', {
    chart: {
        type: 'area',
        zoomType: 'x',
    },
    title: {
        text: 'Matches And Goals Per Year By '
    },
    subtitle: {
      text: name,
        align: 'center'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 60,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    plotOptions: {
        series: {
            pointStart: years[0]
        },
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Matches',
        data: matches
    }, {
        name: 'Goals',
        data: goals
    }],
    exporting: {
      buttons: [
        {
          name: "boton3",
          text: "",
          symbol: "url(./assets/img/gear.svg)",
          symbolX: 19.5,
          symbolY: 18.5,
          titleKey: "settings",
          onclick: function () {
            openFilter(3);
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

function createFourthChart(names,ages){
  let array = [];

  for(let i = 0; i < names.length; i++){
    let arr = [];
    arr.push(names[i]);
    arr.push(ages[i]);
    array.push(arr);
  }
Highcharts.chart('container4', {
  chart: {
      type: 'packedbubble'
  },
  title: {
      text: 'Arithemtic mean from ages of every team'
  },
  subtitle: {
    text: "Liga Santander",
    align: "center",
  },
  credits: {
    enabled: false
  },
  tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}'
  },
  plotOptions: {
      packedbubble: {
          minSize: '40%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 0
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
              }
          }
      }
  },
  series: [{
      data: array
  }]
});
}

// To handle interaction with the settings button of each chart
var scrollPosition = 0;
function goUp(){
  scrollPosition = window.scrollY; // saves previous position
  window.scrollTo(0, 0);
}

function goBack() {
  window.scrollTo(0, scrollPosition); // goes back to the previous position
}

// To handle the filter button, that displays the settings for the chart
var isFilterOpened = false;
var filterOpened; // filter opened is the id of the filter item that was last opened
async function openFilter(number) {
  let filter = document.getElementById("filter");
  let filterItems = document.getElementById("filter-items");

  if (!isFilterOpened) {
    if(number == 3) goUp();

    filterOpened = number;
    document.getElementById("filter-items-chart-"+number).style.display='flex';

    filter.style.height = "40px";
    filter.style.transform = "translateY(34px);";
    filterItems.style.transform = "translate(0px, 0px)";
    isFilterOpened = true;

  } else {   
    filter.style.height = "0px";
    filter.style.transform = "translateY(-34px);";
    filterItems.style.transform = "translate(0px, -39px)";
    isFilterOpened = false;

    await sleep(80); // Wait for the animation to finish, and hidden them all
    document.getElementById("filter-items-chart-1").style.display='none';
    document.getElementById("filter-items-chart-2").style.display='none';
    document.getElementById("filter-items-chart-3").style.display='none';

    if(filterOpened != number) { // In the case that the filter was already opened but the user wants to open another filter
      await sleep(200);
      openFilter(number);
    }
  }
}

// To sleep the execution of the code for n milliseconds
function sleep(n) {
  return new Promise(resolve => setTimeout(resolve, n));
}