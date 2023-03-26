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
const songItem8 = document.getElementById("songItem8");

const songList = document.querySelector(".songList h1");





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

toggle.addEventListener('click', function(){
  //alert("you are about to change the theme");
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){

        //background
        container.style.background =  "url('images/Ranbir.webp')";
        container.style.transition = '1.2s';

        bodybg.style.background = 'antiquewhite';
        bodybg.style.transition = '1.2s';


        //arrow color
        arrow.style.color = 'black';
        arrow.style.transition = '0.8s';


        //navigation bar background
        navigation.style.background = '#FA8BFF';

        navigation.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
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


        songItem.style.color ='white';
        songItem.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem.style.transition = '1s';

        songItem2.style.color ='white';
        songItem2.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem2.style.transition = '1s';

        songItem3.style.color ='white';
        songItem3.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem3.style.transition = '1s';

        songItem4.style.color ='white';
        songItem4.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem4.style.transition = '1s';

        songItem5.style.color ='white';
        songItem5.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem5.style.transition = '1s';

        songItem6.style.color ='white';
        songItem6.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem6.style.transition = '1s';

        songItem7.style.color ='white';
        songItem7.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem7.style.transition = '1s';

        songItem8.style.color ='white';
        songItem8.style.background = "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )";
        songItem8.style.transition = '1s';


        songList.style.color = 'white';
        songList.style.transition = '1s';
    }




    else{
        //background
        container.style.background = "url('images/3.webp')";
        container.style.transition = '1.2s';

         bodybg.style.background = '#1b0c82';
        //bodybg.style.background = '#f70776';
        bodybg.style.transition = '1.2s';




        //arrow color
        arrow.style.color = 'white';
        arrow.style.transition = '0.5s';


        //moon
        toggleDark.style.color = 'white';
        toggleDark.style.transition = '1s';



        //navigation bar background
        //navigation.style.background = '#FF3CAC';
        navigation.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
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
        songItem.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem.style.transition = '1s';

        songItem2.style.color ='white';
        songItem2.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem2.style.transition = '1s';

        songItem3.style.color ='white';
        songItem3.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem3.style.transition = '1s';

        songItem4.style.color ='white';
        songItem4.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem4.style.transition = '1s';

        songItem5.style.color ='white';
        songItem5.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem5.style.transition = '1s';

        songItem6.style.color ='white';
        songItem6.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem6.style.transition = '1s';

        songItem7.style.color ='white';
        songItem7.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem7.style.transition = '1s';

        songItem8.style.color ='white';
        songItem8.style.background = "radial-gradient( circle at 10% 20%,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )";
        songItem8.style.transition = '1s';


        songList.style.color = 'white';
        songList.style.transition = '1s';
    }
});
