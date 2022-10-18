fetch("./assets/php/bestScorersPerYear.php")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.log(json[0]);

    Highcharts.chart("container", {
      chart: {
        zoomType: "xy",
      },
      title: {
        text: "Top 10 Scorers per Year",
        align: "left",
      },
      subtitle: {
        text:
          "Source: " +
          '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
          'target="_blank">YR</a>',
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
        align: "left",
        x: 80,
        verticalAlign: "top",
        y: 80,
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
          tooltip: {
            valueSuffix: " mm",
          },
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
          tooltip: {
            valueSuffix: "°C",
          },
        },
      ],
    });
  });

console.log("Hello World");
