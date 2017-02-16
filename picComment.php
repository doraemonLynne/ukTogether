<?php 
include 'database.php';

date_default_timezone_set("Etc/GMT");
session_start();  //开启session

$commentDate = date("Y-m-d H:i:s");//评论发布时间
$picId = $_POST['picId'];//获得图片Id
$commentUser=$_POST['commentUser'];//获取评论用户
$picComment=$_POST['picComment'];//获取评论内容

//插入数据
$commentAdd=$pdo->exec("INSERT INTO picComment(comment_content,comment_user,comment_date,pics_id) VALUES('{$picComment}','{$commentUser}','{$commentDate}','{$picId}')");
if($commentAdd){
	header("location:picWall.php");
}
?>