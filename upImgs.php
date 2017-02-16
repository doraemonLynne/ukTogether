<?php 

include 'database.php';

date_default_timezone_set("Etc/GMT");
session_start();  //开启session

//添加上传照片
$username = $_SESSION['username'];//获得用户名
$pubdate = date("Y-m-d H:i:s");//照片发布时间

$picstitle=$_POST['picTitle'];
$imgfile=$_FILES['imgfile'];
$name=$imgfile['name'];  //取得图片名称
$type=$imgfile['type'];  //取得图片类型
$size=$imgfile['size'];  //取得图片长度
$tmpfile=$imgfile['tmp_name'];  //图片上传上来到临时文件的路径
$newtmpfile="/Users/sly/Desktop/phpPractice/birds/images/users/".$username.'/'.$name;  
//新的图片路径

move_uploaded_file($tmpfile,$newtmpfile); 

$t=$pdo->exec("INSERT INTO pics(pics_title,pics_name,pics_type,pics_image,user_name,pub_date) VALUES('{$picstitle}','{$name}','{$type}','{$newtmpfile}','{$username}','{$pubdate}')");

if($t){
header("location:picWall.php");
}
?>
