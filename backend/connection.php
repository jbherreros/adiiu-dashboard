<?php
$con = mysqli_connect("localhost","root","") or die("Localhost not available");
$db = mysqli_select_db($con,"adiiu-database") or die("Database not available");
$con -> set_charset("utf8");
?>