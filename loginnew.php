<!DOCTYPE html>
<html>
<head>
<title>login</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="images/favicon.ico"/>
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="css/loginnew.css">
<link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css">
</head>

<body>
<div class="container">
    <form class="form-signin" role="form" action="logincheck.php" method="post">
        <h2 class="form-signin-heading">Log in</h2>
        <br />
        <div class="form-signin-content">
            <i class="fa fa-user"></i>
            <input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus maxlength="50">
            <i class="fa fa-lock"></i>
            <input type="password" id="password" name="password" class="form-control" placeholder="Password" required maxlength="50">
        </div>
        <button id="loginButton" class="btn btn-lg btn-primary btn-block beuti" type="submit" style="outline:none;"><i class="fa fa-arrow-right"></i></button>
        <a href="index.php" class="stuBtn">Return</a>
    </form>
</div>
</body>
</html>