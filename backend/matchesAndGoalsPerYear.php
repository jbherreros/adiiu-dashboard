<?php
include "connection.php";

$name = $_GET['name'];

header('Content-Type: application/json');
$query = "SELECT Matches_Played, Year, Goals FROM top_players WHERE Player_Name ='".$name."'";
$res = mysqli_query($con,$query);
$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>