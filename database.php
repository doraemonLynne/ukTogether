<?php
/****数据库信息****/
$dbhost="127.0.0.1";//主机名（如果PHP脚本与Mysql在同一台服务器填写localhost就可以）
$dbname="birds";//数据库名
$dbuser="root";//账户
$dbpassword="123456";//密码
/********/
$pdo= new PDO("mysql:host=".$dbhost.";dbname=".$dbname,$dbuser,$dbpassword); //PDO PHP DATA OBJECT
$pdo->exec("SET NAMES 'utf8';");

//下面开始增删改查
//增
//$pdo->exec("INSERT INTO user(user_name) VALUES('testInsert');");
//删
//$pdo->exec("INSERT INTO user(user_name) VALUES('testDelete');");
//$pdo->exec("DELETE FROM user WHERE user_name='testDelete';");
//改
//$pdo->exec("INSERT INTO user(user_name) VALUES('testUpdate');");
//$pdo->exec("UPDATE user SET user_name='haveUpdated' WHERE user_name='testUpdate';");
//查
//$rs=$pdo->query("SELECT * FROM user");
//$values=$rs->fetchAll();
//var_dump($values);
?>