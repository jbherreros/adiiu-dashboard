# Football Analytics Dashboard

This dashboard is a web application made with the Highcharts JavaScript library and PHP for the connection with the database (MySQL). It shows stats from different players and years. The data has been collected from kaggle (https://www.kaggle.com/datasets/mohamedhanyyy/top-football-leagues-scorers), although it also uses an external API for one of the charts (https://apifootball.com/).

## Installation

First of all, clone this repository in the XAMPP htdocs folder, set up the local server and then import the SQL code from /backend/adiiu-database.sql or just copy & paste it in the console in PhpMyAdmin. 

Now you can visualize the webpage at http://localhost/adiiu-dashboard/.

## Code

Backend is allocated at its own folder, where you will find all the endpoints in the different php files and a js file named controller.js, where all the endpoint calls are codified. Those endpoints extract the data from the database and convert it into JSON format, that will be passed as parameter to create the charts.

For the frontend, there is only one HTML file called index.html where the web structure is created, one stylesheet named styles.css and two JS files: 

    - index.js: where we define all the interactions with the DOM and initialize the charts
    - charts.js: where all chart functions are defined for its creation at index.js

A filter settings menu has been implemented to change the data that is displayed on the charts. You can find it at charts.js from line 421.

The web app design is fully responsive thanks to using Bootstrap v5.2. Highchart credits have been removed for design purposes. 

## License 

This license lets others remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they do not have to license their derivative works on the same terms.

[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)

## Authors
Pau Nicolau Fiol and Juan Carlos Bujosa Herreros
