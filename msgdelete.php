<?php  

    include 'database.php';

    session_start();  //开启session

    $msgid=$_GET['id'];
    $username = $_SESSION['username'];

    $rs=$pdo->query("SELECT * FROM msg where msg_id='$msgid';");
	$values=$rs->fetch();

	if($username==$values["user_name"]){
		$pdo->exec("DELETE FROM msg WHERE msg_id='$msgid';");
	    // header("location:main.php");
	    echo "<script> alert('删除成功！');parent.location.href='main.php'; </script>"; 
	}

	else{
		// header("无法删除，你不是发布者，无权删除该留言！");
		// header("location:main.php");
		echo "<script> alert('无法删除，你不是发布者，无权删除该留言！');parent.location.href='main.php'; </script>"; 
	}

    
?>

<meta http-equiv="content-type" content="text/html; charset=utf-8" >