<?php 

include 'database.php';

// select查
$rs=$pdo->query("SELECT * FROM msg order by pub_date desc");
$values=$rs->fetchAll();
$num = $rs->rowCount();
$json_string = json_encode($values);
echo $json_string;
?>