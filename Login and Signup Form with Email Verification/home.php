<?php require_once "controllerUserData.php"; ?>
<?php
$email = $_SESSION['email'];
$password = $_SESSION['password'];
if($email != false && $password != false){
    $sql = "SELECT * FROM usertable WHERE email = '$email'";
    $run_Sql = mysqli_query($con, $sql);
    if($run_Sql){
        $fetch_info = mysqli_fetch_assoc($run_Sql);
        $status = $fetch_info['status'];
        $code = $fetch_info['code'];
        if($status == "verified"){
            if($code != 0){
                header('Location: reset-code.php');
            }
        }else{
            header('Location: user-otp.php');
        }
    }
}else{
    header('Location: login-user.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home | <?php echo $fetch_info['name'] ?></title>
    <link rel="shortcut icon" href="image/success.png" type="image/x-icon">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    nav{
        padding-left: 100px!important;
        padding-right: 100px!important;
        background-image: radial-gradient( circle farthest-corner at 10.2% 55.8%,  rgba(252,37,103,1) 0%, rgba(250,38,151,1) 46.2%, rgba(186,8,181,1) 90.1% );
        font-family: 'Poppins', sans-serif;
    }
    nav a.navbar-brand{
        color: #fff;
        font-size: 30px!important;
        font-weight: 500;
    }
    button a{
        color: #6665ee;
        font-weight: 500;
    }
    button a:hover{
        text-decoration: none;
    }
    h1{
        position: absolute;
        top: 40%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-weight: 600;
    }
    h1 span{
      text-decoration: underline;
    }
    h2{
      position: absolute;
      top: 55%;
      left: 50%;
      width: 100%;
      text-align: center;
      transform: translate(-50%, -50%);
      font-size: 50px;
      font-weight: 500;
    }
    .btn1{
      position: absolute;
      top: 75%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      transition: 0.5s;
      box-shadow: 0 0 20px #eee;
      display: block;
    }
    #myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 50%;
    }
    </style>
</head>
<body>
  <video autoplay muted loop id="myVideo">
<source src="image/welcome.mp4" type="video/mp4">
Your browser does not support HTML5 video.
</video>
    <nav class="navbar">
    <a class="navbar-brand" href="#">D&F's Fitness🏋| Welcome Page</a>
    <button type="button" class="btn btn-light"><a href="logout-user.php">Logout</a></button>
    </nav>
    <h1>Welcome aboard <span><?php echo $fetch_info['name'] ?></span>!!</h1>
    <h2>We are so delighted to see you here!!<br>Let's start your fitness journey</h2>
    <a href="http://localhost/Capstone/D&F%20FitnessWebsite/joinnow.html" target="_blank" class="btn1">
    <button type="button" name="button">Let's do this!!</button></a>
</body>
</html>
