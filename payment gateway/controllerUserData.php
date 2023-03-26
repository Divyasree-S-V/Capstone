<?php
session_start();
require "connection.php";

$fname = "";
$email = "";
$nameoncard = "";
$addr = "";
$ccnum = "";
$city = "";
$expmonth = "";
$state = "";
$zipcode = "";
$expyear = "";
$cvv = "";
$errors = array();

//if user signup button
if(isset($_POST['signup'])){
    $fname = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $nameoncard = mysqli_real_escape_string($con, $_POST['nameoncard']);
    $addr = mysqli_real_escape_string($con, $_POST['addr']);
    $ccnum = mysqli_real_escape_string($con, $_POST['ccnum']);
    $city = mysqli_real_escape_string($con, $_POST['city']);
    $expmonth = mysqli_real_escape_string($con, $_POST['expmonth']);
    $state = mysqli_real_escape_string($con, $_POST['state']);
    $zipcode = mysqli_real_escape_string($con, $_POST['zipcode']);
    $expyear = mysqli_real_escape_string($con, $_POST['expyear']);
    $cvv = mysqli_real_escape_string($con, $_POST['cvv']);

    if(count($errors) === 0){
        $insert_data = "INSERT INTO paymenttable (fname, email, nameoncard, ccnum, expyear, cvv)
                        values('$fname', '$email', '$nameoncard', '$ccnum', '$expyear', '$cvv')";
        $data_check = mysqli_query($con, $insert_data);
    }
}
?>
