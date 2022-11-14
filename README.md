# Football Analytics Dashboard

This dashboard is a web application made with the Highcharts JavaScript library and PHP for the connection with the database (MySQL). It shows stats from different players and years. The data has been collected from kaggle (https://www.kaggle.com/datasets/mohamedhanyyy/top-football-leagues-scorers), although it also uses an external API (https://apifootball.com/) for one of the charts. 

## Installation

First of all, clone this repository in the XAMPP htdocs folder, set up the local server and then import the SQL code from /backend/adiiu-database.sql or just copy & paste it in the console in PhpMyAdmin. 

Now you can visualize the webpage at http://localhost/adiiu-dashboard/.

## Code

Backend is allocated at its own folder, where you will find all the endpoints in the different php files and a js file named controller.js, where all the endpoint calls are codified. 

For the frontend, there is only one HTML file called index.html where the web structure is created, one stylesheet named styles.css and two JS files: 

    - index.js: where we define all the interactions with the DOM
    - charts.js: where all chart functions are defined for its creation at index.js

## License 

This license lets others remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.
[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)

## Authors
Pau Nicolau Fiol and Juan Carlos Bujosa Herreros
