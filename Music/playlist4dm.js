const toggle = document.getElementById('toggleDark');
//const container = document.querySelector('container');

const bodybg = document.getElementById('body');

const arrow = document.getElementById('arrow');

const container = document.querySelector('.container');

const navigation = document.getElementById('navigation');

const txt = document.querySelector(".about1 h3");

const txt1 = document.querySelector(".about1");

const playlistName = document.querySelector(".brand");

//const songItem = document.querySelector(".songItem");

const songItem = document.getElementById("songItem");
const songItem2 = document.getElementById("songItem2");
const songItem3 = document.getElementById("songItem3");
const songItem4 = document.getElementById("songItem4");
const songItem5 = document.getElementById("songItem5");
const songItem6 = document.getElementById("songItem6");
const songItem7 = document.getElementById("songItem7");

const songList = document.querySelector(".songList h1");





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

toggle.addEventListener('click', function(){
  //alert("you are about to change the theme");
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){

        //background
        container.style.background =  "url('images/gym.jpg')";
        container.style.transition = '1.2s';

        bodybg.style.background = 'antiquewhite';
        bodybg.style.transition = '1.2s';


        //arrow color
        arrow.style.color = 'black';
        arrow.style.transition = '0.8s';


        //navigation bar background
        navigation.style.background = '#FA8BFF';

        navigation.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        navigation.style.transition = '1s';


        //sun
        toggleDark.style.color = 'yellow';
        toggleDark.style.transition = '1s';


        //spotify text
        playlistName.style.color = 'antiquewhite';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = '#111D5E';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = 'white';
        txt1.style.transition = '1s';


        songItem.style.color ='black';
        songItem.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem.style.transition = '1s';

        songItem2.style.color ='black';
        songItem2.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem2.style.transition = '1s';

        songItem3.style.color ='black';
        songItem3.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem3.style.transition = '1s';

        songItem4.style.color ='black';
        songItem4.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem4.style.transition = '1s';

        songItem5.style.color ='black';
        songItem5.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem5.style.transition = '1s';

        songItem6.style.color ='black';
        songItem6.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem6.style.transition = '1s';

        songItem7.style.color ='black';
        songItem7.style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        songItem7.style.transition = '1s';

        songList.style.color = 'black';
        songList.style.transition = '1s';
    }




    else{
        //background
        container.style.background = "url('images/gym1.jpg')";
        container.style.transition = '1.2s';

         bodybg.style.background = '#192841';
        //bodybg.style.background = '#f70776';
        bodybg.style.transition = '1.2s';




        //arrow color
        arrow.style.color = 'white';
        arrow.style.transition = '0.5s';


        //moon
        toggleDark.style.color = 'white';
        toggleDark.style.transition = '1s';



        //navigation bar background
        navigation.style.background = '	#191970';
        navigation.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        navigation.style.transition = '1s';


        //spotify text
        playlistName.style.color = 'antiquewhite';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = 'white';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = 'white';
        txt1.style.transition = '1s';



        songItem.style.color ='white';
        songItem.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem.style.transition = '1s';

        songItem2.style.color ='white';
        songItem2.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem2.style.transition = '1s';

        songItem3.style.color ='white';
        songItem3.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem3.style.transition = '1s';

        songItem4.style.color ='white';
        songItem4.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem4.style.transition = '1s';

        songItem5.style.color ='white';
        songItem5.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem5.style.transition = '1s';

        songItem6.style.color ='white';
        songItem6.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem6.style.transition = '1s';

        songItem7.style.color ='white';
        songItem7.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
        songItem7.style.transition = '1s';

        songList.style.color = 'white';
        songList.style.transition = '1s';
    }
});
