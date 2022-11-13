<?php
include "connection.php";

header('Content-Type: application/json');
$query = "SELECT DISTINCT Player_Name FROM top_players ORDER BY Player_Name";
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>