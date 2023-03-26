/*var value = localStorage.getItem("value1");
document.getElementById("result1").innerHTML = value;
var value2 = localStorage.getItem("value2");
document.getElementById("result2").innerHTML = value2;
*/

const myTimeout = setTimeout(myGreeting, 4000);


function myGreeting() {

  var value = localStorage.getItem("value1");
  document.getElementById("result1").innerHTML = value;
  var value2 = localStorage.getItem("value2");
  document.getElementById("result2").innerHTML = value2;

  document.getElementById("demo").innerHTML = "Know your workouts"

}

function myFunction(){
  var value3= localStorage.getItem("value1");
  if(value3 < 18.5){
      alert(  value3 +" | Underweight 😒");
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/underweight/index.html";

  }
  else if( value3 >= 18.5 && value3 <= 24.9 ){
      alert( value3 +" | Ideal Weight 😍");
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/idealweight/index.html";

  }
  else if( value3 >= 25 && value3 <= 29.9 ){
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/overweight/index.html";
      alert( value3 +" | Overweight 😮");


  }
  else{
    window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/obese/index.html";
      alert( value3 +" | Obese 😱");

  }
}
