<?php  
	date_default_timezone_set("Etc/GMT");
    include 'database.php';

    session_start();  //开启session

    $msgTitle = $_POST["msgTitle"];  
	$msgContent = $_POST["msgContent"];
	$msgId = $_POST["updateId"];
    $pubdate = date("Y-m-d H:i:s");
    $username = $_SESSION['username'];

	$rs=$pdo->query("SELECT * FROM msg where msg_id='$msgId';");
	$values=$rs->fetch();

	if($username==$values["user_name"]){
		// 修改
	    if($msgTitle == "" || $msgContent == "")  
		{  
		    echo "<script>alert('请输入标题和内容！'); history.go(-1);</script>";  
		}
		else
		{
			$pdo->exec("UPDATE msg SET msg_title='$msgTitle',msg_content='$msgContent',pub_date='$pubdate' WHERE msg_id='$msgId';");
			// header("location:main.php"); 
			// echo "<script>alert('修改成功！');</script>";
			echo "<script> alert('更改成功！');parent.location.href='main.php'; </script>"; 
		}
	}
	else{
		// header("location:main.php");
		echo "<script> alert('无法更改，你不是发布者，无权更改该留言！');parent.location.href='main.php'; </script>"; 
	}

?>

<meta http-equiv="content-type" content="text/html; charset=utf-8" >