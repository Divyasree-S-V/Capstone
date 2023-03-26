<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscription Form</title>
    <link rel="shortcut icon" href="message.gif" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body>
  <input type="checkbox" id="toggle">
  <label for="toggle" class="show-btn">Show form</label>
  <div class="wrapper">
    <label for="toggle">
    <i class="cancel-icon fas fa-times"></i>
    </label>
    <div class="icon"><i class="far fa-envelope"></i></div>
    <div class="content">
      <header>Become a Subscriber</header>
      <p>Subscribe to our page and get the latest updates straight to your inbox.</p>
    </div>
    <form action="index.php" method="POST">
    <?php
    $userEmail = ""; //first we leave email field blank
    if(isset($_POST['subscribe'])){ //if subscribe btn clicked
      $userEmail = $_POST['email']; //getting user entered email
      if(filter_var($userEmail, FILTER_VALIDATE_EMAIL)){ //validating user email
        $subject = "Thanks for Subscribing us";
        $message = "Hey there!! Thanks for Subscribing to our page. You will receive regular updates from us 💖 Stay safe and healthy✌🏻😇";
        $sender = "From: sheikhmdfouzan@gmail.com";
        //php function to send mail
        if(mail($userEmail, $subject, $message, $sender)){
          ?>
           <!-- show sucess message once email send successfully -->
          <div class="alert success-alert">
            <?php echo "Thanks for Subscribing us. Check your inbox for confirmation" ?>
          </div>
          <?php
          $userEmail = "";
        }else{
          ?>
          <!-- show error message if somehow mail can't be sent -->
          <div class="alert error-alert">
          <?php echo "Failed while sending your mail!" ?>
          </div>
          <?php
        }
      }else{
        ?>
        <!-- show error message if user entered email is not valid -->
        <div class="alert error-alert">
          <?php echo "$userEmail is not a valid email address!" ?>
        </div>
        <?php
      }
    }
    ?>
      <div class="field">
        <input type="text" class="email" name="email" placeholder="Email Address" required value="<?php echo $userEmail ?>">
      </div>
      <div class="field btn">
        <div class="layer"></div>
        <button type="submit" name="subscribe">Subscribe</button>
      </div>
    </form>
    <div class="text">We do not share your information.</div>
  </div>

</body>
</html>
