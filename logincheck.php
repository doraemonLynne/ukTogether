<?php  

include 'database.php';

session_start();  //开启session

$user = $_POST["username"];  
$pwd = $_POST["password"];

if($user == "" || $pwd == "")  
{  
    echo "<script>alert('请输入用户名或密码！'); history.go(-1);</script>";  
}  
else  
{  
    $rs=$pdo->query("SELECT user_name,password,credits from user WHERE user_name ='".$_POST['username']."' and password ='".$_POST['password']."'");
    $value=$rs->fetch();  //fetchALL 结果类似于values[n]['id'] fetch()只取一条结果value['id']
    $num = $rs->rowCount();
    if($num)  
    {  
        if($pwd==$value['password'])
        {   //对密码进行判断。
            $_SESSION['username'] = $value['user_name']; //登陆成功之后保存session
            $_SESSION['credits'] = $value['credits'];
            $credits=$_SESSION['credits']+5;
            $_SESSION['new_credits']=$credits;
            $pdo->exec("UPDATE user SET credits='$credits' WHERE user_name='$user';");
            header("location:main.php");
        }
        else
        {
            echo "Wrong password!";
            echo "<a href='index.php'>返回登陆页面</a>";
        }   
    }  
    else  
    {  
        header("location:loginerror.php"); 
    } 
}    
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
</head>
<body>
    
</body>
</html>
