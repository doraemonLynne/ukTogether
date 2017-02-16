<!DOCTYPE html>
<html>
<head>
<title>login</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="images/favicon.ico"/>
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/login.css">
<link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css">
<?php
 include 'loginBg.php';
?>
</head>

<body>
<canvas id="sakura"></canvas>
<div class="btnbg">
    <div class="m-fm" id="main">
        <form action="logincheck.php" method="post">
            <div class="loginframe a-fadeinT">
                <div class="frame">
                    <div class="heading">
                        <span class="first">log in</span>
                        <span class="middle">or</span>
                        <span class="second"><a href="#">sign up</a>  </span>
                    </div>
                    <div class="content">
                        <label for="username"><i class="fa fa-user"></i>username</label>
                        <input type="text" id="username" name="username" placeholder="Username or email"
                               required="required" maxlength="50">
                        <label for="password"><i class="fa fa-key"></i>password</label>
                        <input type="password" id="password" name="password" placeholder="Password" required="required"
                               maxlength="50">
                        <button type="submit" id="loginButton">Log in</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</body>
</html>