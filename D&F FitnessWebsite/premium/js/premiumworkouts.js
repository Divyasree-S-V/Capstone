/*var value = localStorage.getItem("value1");
document.getElementById("result1").innerHTML = value;
var value2 = localStorage.getItem("value2");
document.getElementById("result2").innerHTML = value2;
*/

const myTimeout = setTimeout(myGreeting, 4000);


function myGreeting() {

  var value1 = localStorage.getItem("value3");
  document.getElementById("result3").innerHTML = value1;
  var value3 = localStorage.getItem("value4");
  document.getElementById("result4").innerHTML = value3;

  document.getElementById("demo").innerHTML = "Know your workouts"

}

function myFunction(){
  var value4= localStorage.getItem("value3");
  if(value4 < 18.5){
      alert(value4 +" | Underweight 😒");
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/underweight/index.html";

  }
  else if( value4 >= 18.5 && value4 <= 24.9 ){
      alert(value4 +" | Ideal Weight 😍");
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/idealweight/index.html";

  }
  else if(value4 >= 25 && value4 <= 29.9 ){
      window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/overweight/index.html";
      alert( value4 +" | Overweight 😮");


  }
  else{
    window.location.href = "file:///C:/xampp/htdocs/Capstone/D&F%20FitnessWebsite/Workout%20videos/obese/index.html";
      alert(value4 +" | Obese 😱");

  }
}
