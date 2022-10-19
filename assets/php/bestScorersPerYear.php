<?php
include "connection.php";

$year = $_GET['year'];

header('Content-Type: application/json');
$query = "SELECT Player_Names, Goals, Shots FROM top_players WHERE League = 'La Liga' and Year=".intval($year)." ORDER BY `top_players`.`Goals`  DESC LIMIT 10";
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>