<?php 

	include 'database.php';

 	$rs=$pdo->query("SELECT * FROM pics order by pub_date desc");
	$values=$rs->fetchAll();
	$num = $rs->rowCount();//数据总行数
	$json_string = json_encode($values);
	echo $json_string;
	
 ?>