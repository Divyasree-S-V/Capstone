const toggle = document.getElementById('toggleDark');
//const container = document.querySelector('container');

const bodybg = document.getElementById('body');

const arrow = document.getElementById('arrow');

const container = document.querySelector('.container');

const navigation = document.getElementById('navigation');

const txt = document.querySelector(".about1 h3");

const txt1 = document.querySelector(".about1");
const txt2 = document.querySelector(".home");

const playlistName = document.querySelector(".brand");

//const songItem = document.querySelector(".songItem");

const songItem = document.getElementById("songItem");
const songItem2 = document.getElementById("songItem2");
const songItem3 = document.getElementById("songItem3");
const songItem4 = document.getElementById("songItem4");
const songItem5 = document.getElementById("songItem5");
const songItem6 = document.getElementById("songItem6");
const songItem7 = document.getElementById("songItem7");
const songItem8 = document.getElementById("songItem8");
const songItem9 = document.getElementById("songItem9");

const songList = document.querySelector(".songList h1");





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

toggle.addEventListener('click', function(){
  //alert("you are about to change the theme");
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){

        //background
        container.style.background =  "url('images/city.jpg')";
        container.style.transition = '1.2s';

        bodybg.style.background = 'antiquewhite';
        bodybg.style.transition = '1.2s';


        //arrow color
        arrow.style.color = 'black';
        arrow.style.transition = '0.8s';


        //navigation bar background

        navigation.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        navigation.style.transition = '1s';


        //sun
        toggleDark.style.color = 'yellow';
        toggleDark.style.transition = '1s';


        //spotify text
        playlistName.style.color = 'white';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = '#111D5E';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = 'white';
        txt1.style.transition = '1s';


        //home text
        txt2.style.color = 'white';
        txt2.style.transition = '1s';


        songItem.style.color ='black';
        songItem.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem.style.transition = '1s';

        songItem2.style.color ='black';
        songItem2.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem2.style.transition = '1s';

        songItem3.style.color ='black';
        songItem3.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem3.style.transition = '1s';

        songItem4.style.color ='black';
        songItem4.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem4.style.transition = '1s';

        songItem5.style.color ='black';
        songItem5.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem5.style.transition = '1s';

        songItem6.style.color ='black';
        songItem6.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem6.style.transition = '1s';

        songItem7.style.color ='black';
        songItem7.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem7.style.transition = '1s';

        songItem8.style.color ='black';
        songItem8.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem8.style.transition = '1s';

        songItem9.style.color ='black';
        songItem9.style.background = "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)";
        songItem9.style.transition = '1s';


        songList.style.color = 'White';
        songList.style.transition = '1s';
    }




    else{
        //background
        container.style.background = "url('images/band.jpg')";
        container.style.transition = '1.2s';

         bodybg.style.background = '#00563B';
        //bodybg.style.background = '#f70776';
        bodybg.style.transition = '1.2s';




        //arrow color
        arrow.style.color = 'white';
        arrow.style.transition = '0.5s';


        //moon
        toggleDark.style.color = 'white';
        toggleDark.style.transition = '1s';



        //navigation bar background

        navigation.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        navigation.style.transition = '1s';


        //spotify text
        playlistName.style.color = 'black';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = 'red';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = 'black';
        txt1.style.transition = '1s';

        //home text
        txt2.style.color = 'black';
        txt2.style.transition = '1s';



        songItem.style.color ='white';
        songItem.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem.style.transition = '1s';

        songItem2.style.color ='white';
        songItem2.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem2.style.transition = '1s';

        songItem3.style.color ='white';
        songItem3.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem3.style.transition = '1s';

        songItem4.style.color ='white';
        songItem4.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem4.style.transition = '1s';

        songItem5.style.color ='white';
        songItem5.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem5.style.transition = '1s';

        songItem6.style.color ='white';
        songItem6.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem6.style.transition = '1s';

        songItem7.style.color ='white';
        songItem7.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem7.style.transition = '1s';

        songItem8.style.color ='white';
        songItem8.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem8.style.transition = '1s';

        songItem9.style.color ='white';
        songItem9.style.background = "radial-gradient(circle at -3.1% -4.3%, rgb(57, 255, 186) 0%, rgb(21, 38, 82) 90%)";
        songItem9.style.transition = '1s';


        songList.style.color = 'white';
        songList.style.transition = '1s';
    }
});
