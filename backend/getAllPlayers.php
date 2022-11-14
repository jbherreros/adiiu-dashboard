<?php
include "connection.php";

header('Content-Type: application/json');

$query = "SELECT Player_Name FROM (SELECT COUNT(Year) AS tYears, Player_Name FROM `top_players` GROUP BY Player_Name) t1 WHERE t1.tYears>3";
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>