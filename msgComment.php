<?php 
include 'database.php';

date_default_timezone_set("Etc/GMT");
session_start();  //开启session

$commentDate = date("Y-m-d H:i:s");//评论发布时间
$msgId = $_POST['msgId'];//获得评论Id
$commentUser=$_POST['commentUser'];//获取评论用户
$msgComment=$_POST['msgComment'];//获取评论内容

//插入数据
$commentAdd=$pdo->exec("INSERT INTO msgComment(comment_content,comment_user,comment_date,msg_id) VALUES('{$msgComment}','{$commentUser}','{$commentDate}','{$msgId}')");
if($commentAdd){
	header("location:main.php");
}
?>