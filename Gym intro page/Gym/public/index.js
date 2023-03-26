// holding ready function for 2.2 seconds
$.holdReady(true);
setTimeout(function () {
    $.holdReady(false);
}, 2200);

$(document).ready(function(){
    // loading animation
    $("#loading_start").css("display", "none");

    // typing animation 
    var typed = new Typed(".typing",{
      strings: ["The only bad workout is no workout.", "Sweat is just fat crying.", "The pain you feel today will be the strength you feel tomorrow.", "Success is not final, failure is not fatal, it is the courage to continue that counts.", "Fitness is not about being better than someone else. It's about being better than you used to be"],
      typeSpeed: 30,
      backSpeed: 18,
      loop:true
    });

    // carousel animation
    $('.carousel').owlCarousel({
      margin :20, 
      loop:true,
      autoplayTime:2000,
      autoplayHoverPause:true,
      responsive: {
          0:{
              items :1,
              nav:false
          },
          600:{
              items :2,
              nav:false
          },
          1000:{
              items :3,
              nav:false
          }
      }
  });
});