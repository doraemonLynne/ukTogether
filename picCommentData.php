<?php 

	include 'database.php';

	Session_Start();

 	// $rs=$pdo->query("SELECT * FROM picComment as comment left join pics as p on comment.pics_id=p.pics_id order by comment_date desc");
 	$rs=$pdo->query("SELECT * FROM picComment order by comment_date desc");
	$values=$rs->fetchAll();
	$json_string = json_encode($values);
	echo $json_string;

 ?>