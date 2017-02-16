<?php  
	
    include 'database.php';
    
    date_default_timezone_set("Etc/GMT");
    session_start();  //开启session


    $msgtitle = $_POST["msgTitle"];  
    $msgcontent = $_POST["msgContent"];
    $username = $_SESSION['username'];//获得用户名
    $pubdate = date("Y-m-d H:i:s");


    // insert增
    if($msgtitle == "" || $msgcontent == "")  
	{  
	    echo "<script>alert('请输入标题和内容！'); history.go(-1);</script>";  
	}
	else
	{
		$pdo->exec("INSERT INTO msg(msg_title,msg_content,user_name,pub_date) VALUES('{$msgtitle}','{$msgcontent}','{$username}','{$pubdate}')");
		header("location:main.php"); 
		// echo "<script>alert('发布成功！');</script>";
	}

?>

<meta http-equiv="content-type" content="text/html; charset=utf-8" >