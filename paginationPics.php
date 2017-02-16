<?php 

	include 'database.php';

	Session_Start();

	$pagesize=12;
	$pagenum=@$_GET['page']?$_GET['page']:1;
	$page=($pagenum-1)*$pagesize;

 	// $rs=$pdo->query("SELECT * FROM pics as p left join picComment as c on p.pics_id=c.pics_id order by pub_date desc limit $page,$pagesize");
 	$rs=$pdo->query("SELECT * FROM pics order by pub_date desc limit $page,$pagesize");
	$values=$rs->fetchAll();
	$json_string = json_encode($values);
	echo $json_string;

	$result=$pdo->query("SELECT * FROM pics order by pub_date desc");
	$num = $result->rowCount();//数据总行数
	$totalPage=ceil($num/$pagesize);//总页数

	$_SESSION['totalPage']=$totalPage;

 ?>