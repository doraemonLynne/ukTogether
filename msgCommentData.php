<?php 

	include 'database.php';

	Session_Start();

 	$rs=$pdo->query("SELECT * FROM msgComment order by comment_date desc");
	$values=$rs->fetchAll();
	$json_string = json_encode($values);
	echo $json_string;

 ?>