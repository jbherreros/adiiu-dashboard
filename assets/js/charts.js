/* In this js file all the charts are defined for their creation */

function createFirstChart(data, year) {
  let shots = [],
    goals = [],
    names = [];

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
      enabled: false,
    },
    xAxis: [
      {
        labels:{
          style:{
            color: '#000000',
            fontWeight: 'bold',
          }  
        },
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
            color: '#000000',
          },
        },
        title: {
          text: "Goals",
          style: {
            color: '#000000',
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: "Shots",
          style: {
            color: '#000000',
          },
        },
        labels: {
          format: "{value}",
          style: {
            color: '#000000',
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
        borderColor: Highcharts.getOptions().colors[1],
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

function createSecondChart(data, year) {
  let array = [];
  Highcharts.getOptions().plotOptions.pie.colors = (
    function () {
       var colors = [];
       var base = Highcharts.getOptions().colors[0];
       var i;
 
       for (i = 0; i < 10; i += 1) {
          // Start out with a darkened base color (negative brighten), and end
          // up with a much brighter color
          colors.push(Highcharts.Color(base).brighten((i - 3) / 9).get());
       }
       return colors;
    }()
 );

  for (let i = 0; i < data.length; i++) {
    let arr = [];
    arr.push(data[i].League);
    arr.push(parseInt(data[i].Total_Goals));
    array.push(arr);
  }

  Highcharts.chart("container2", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: "Goals per league",
      align: "center",
    },
    subtitle: {
      text: "Year " + year,
      align: "center",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
        borderColor: '#000000',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
        }
      },
    },
    series: [
      {
        name: "Total number of Goals",
        data: array,
        
      },
    ],
    exporting: {
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

function createThirdChart(data, name) {
  let matches = [],
    goals = [],
    years = [];

  for (let i = 0; i < data.length; i++) {
    matches.push(parseInt(data[i].Matches_Played));
    goals.push(parseInt(data[i].Goals));
    years.push(parseInt(data[i].Year));
  }

  Highcharts.chart("container3", {
    chart: {
      type: "area",
      zoomType: "x",
    },
    title: {
      text: "Matches And Goals Per Year By ",
    },
    subtitle: {
      text: name,
      align: "center",
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      //x: 200,
      y: 30,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    },
    plotOptions: {
      series: {
        pointStart: years[0],
      },
      area: {
        fillOpacity: 0.5,
        fillColor: {
          pattern: {
            path: {
              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
              strokeWidth: 3
            },
            width: 10,
            height: 10,
          }
        }
      },
    },
    yAxis:{
      labels:{
        style:{
          color:'#000000'
        }
      },
      title:{
        style:{
          color:'#000000'
        }
      }
    },
    xAxis:{
      labels:{
        style:{
          color:'#000000'
        }
      }
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Matches",
        data: matches,
        fillColor: {
          pattern: {
          path:{d: 'M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5'},
            color: Highcharts.getOptions().colors[0]
          }
        }
      },
      {
        name: "Goals",
        data: goals,
        fillColor: {
          pattern: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      },
    ],
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

function createFourthChart(names, ages) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    let arr = [];
    arr.push(names[i]);
    arr.push(ages[i]);
    array.push(arr);
  }
  Highcharts.chart("container4", {
    chart: {
      type: "packedbubble",
    },
    legend: { 
      enabled:false
    },
    title: {
      text: "Arithemtic mean from ages of every team",
    },
    subtitle: {
      text: "Liga Santander",
      align: "center",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}",
    },
    plotOptions: {
      packedbubble: {
        minSize: "90%",
        maxSize: "120%",
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02,
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 0,
          },
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    series: [
      {
        name: "Liga Santander",
        data: array,
      },
    ],
  });
}

// To handle interaction with the settings button of each chart
var isFilterOpened = false;
var filterOpened; // filter opened is the id of the filter item that was last opened
async function openFilter(number) {
  let filter = document.getElementById("filter");
  let filterItems = document.getElementById("filter-items");

  if (!isFilterOpened) {
    if (number == 3) goUp();

    filterOpened = number;
    document.getElementById("filter-items-chart-" + number).style.display =
      "flex";

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
    document.getElementById("filter-items-chart-1").style.display = "none";
    document.getElementById("filter-items-chart-2").style.display = "none";
    document.getElementById("filter-items-chart-3").style.display = "none";

    if (filterOpened != number) {
      // In the case that the filter was already opened but the user wants to open another filter
      await sleep(200);
      openFilter(number);
    }
  }
}

// To sleep the execution of the code for n milliseconds
function sleep(n) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

// To scroll up and down the page when displaying the filter settings for the third chart
var scrollPosition = 0;
function goUp() {
  scrollPosition = window.scrollY; // saves previous position
  window.scrollTo(0, 0);
}

function goBack() {
  window.scrollTo(0, scrollPosition); // goes back to the previous position
}