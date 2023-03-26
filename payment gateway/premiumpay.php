<?php require_once "controllerUserData.php";?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link rel="shortcut icon" href="images/visa.png" type="image/x-icon">
    <link rel="stylesheet" href="premiumpay.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

</head>
<body>

<div class="container">
    <form action="http://localhost/Capstone/D&F%20FitnessWebsite/success2.html">
        <div class="row">
            <div class="col">
                <h3 class="title">Your Details</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="Your name" name="username" required pattern="[a-zA-Z]+" title="Username must contain only letters" minlength="4" maxlength="10">
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@gmail.com" required value="<?php echo $email ?>">
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality">
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="City">
                </div>







<div class="flex">
                        <div class="wrapper">
                        <div class="select-btn">
                          <div class="inputBox">
                          <span>Select Country</span>
                          <i class="uil uil-angle-down"></i>
                        </div>
                        <div class="content">
                          <div class="search">
                            <i class="uil uil-search"></i>
                            <input spellcheck="false" type="text" placeholder="Search">
                          </div>
                          <ul class="options"></ul>
                        </div>
                      </div>


      </div>
                      <script src="script.js"></script>











                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" id="zip" placeholder="123-456" required pattern= "[0-9]+" title="contain only numbers" minlength="6" maxlength="6">

                    </div>
                </div>

            </div>

            <div class="col">
                <h3 class="title">Payment</h3>
                  <h4 style="color: red">(For PREMIUM membership)</h4>
                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src="images/card_img.png" alt="">
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="Your name"  required pattern="[a-zA-Z]+" title="must contain only letters" minlength="4" maxlength="10">
                </div>
                <div class="inputBox">
                    <span>credit/debit card number :</span>
                    <input type="text" placeholder="1111-22XX-XXXX-XXXX" required pattern= "[0-9]+" title="must contain only numbers" minlength="16" maxlength="16">
                </div>
                <div class="inputBox">
                    <span>expiry month :</span>
                    <input type="month" placeholder="Jan-Dec">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>expiry year :</span>
                        <input type="text" placeholder="20XX" required pattern= "[0-9]+" title="must contain only numbers" minlength="4" maxlength="4">
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="XXX" required pattern= "[0-9]+" title="must contain only numbers" minlength="3" maxlength="3">
                    </div>
                </div>
            </div>
        </div>

        <button type="submit" value="proceed to checkout" class="submit-btn" onclick="validateForm()">Proceed to checkout</button>
        <script type="text/javascript">
        function validateForm(){
          var name = document.getElementById("inputbox").value;
          if (name == "") {
            alert("Please fill in all the fields.");
            return false;
          } else {
            return true;
            alert("You are about to make the payment");
              window.location.href = "http://localhost/Capstone/D&F%20FitnessWebsite/success2.html";
          }
        }
        </script>

    </form>

</div>

</body>
</html>
