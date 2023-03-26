let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});



function calculate(){
    var bmi;
    var inputBox = document.getElementById("inputBox");
    var inputBoxx = document.getElementById("inputBoxx");
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(2);
    result.textContent = bmi;

    document.getElementById("category").textContent = category;

    if(bmi < 18.5){
        category = "Underweight 😒";
        result.style.color = "#ffc44d";
    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Ideal Weight 😍";
        result.style.color = "#0be881";
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight 😮";
        result.style.color = "#ff884d";
    }
    else{
        category = "Obese 😱";
        result.style.color = "#ff5e57";
    }
    document.getElementById("inputBoxx").textContent = bmi;
    document.getElementById("inputBox").textContent = category;
    localStorage.setItem("value1", bmi);
    localStorage.setItem("value2", category);
    	//window.location.href = "workouts.html";

    //window.location.href = "workouts.html"
}
/*
function submitValue() {
	var slider = document.getElementById("display");
	var value = slider.value;
	localStorage.setItem("sliderValue", value);
	window.location.href = "workouts.html";
}
*/
