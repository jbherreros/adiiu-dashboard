<?php
include "connection.php";

$year = $_GET['year'];

header('Content-Type: application/json');
$query = "SELECT League, SUM(Goals) as Total_Goals FROM top_players WHERE Year = ".intval($year)." GROUP BY League ORDER BY Total_Goals DESC";
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>