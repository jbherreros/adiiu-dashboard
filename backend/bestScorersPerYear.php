<?php
include "connection.php";

$year = $_GET['year'];
$limit = $_GET['limit'];

header('Content-Type: application/json');
$query = "SELECT Player_Name, Goals, Shots FROM top_players WHERE League = 'La Liga' and Year=".intval($year)." ORDER BY `top_players`.`Goals`  DESC LIMIT ".intval($limit);
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>