const toggle = document.getElementById('toggleDark');

//const body = document.querySelector('body');

const arrow = document.getElementById('arrow');

const body = document.getElementById('body');

const navigation = document.getElementById('navigation');

const txt = document.querySelector(".about1 h3");

const txt1 = document.querySelector(".about1");

const playlistName = document.querySelector(".brand");

const selectsongstxt = document.querySelector(".selectsongs");

const element = document.querySelector('.teams');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

toggle.addEventListener('click', function(){
  //alert("you are about to change the theme");
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){

        //background
        body.style.background = "url('back-01.svg')";
        body.style.transition = '1s';


        //arrow color
        arrow.style.color = 'black';
        arrow.style.transition = '0.8s';


        //navigation bar background
        

        navigation.style.background = "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)";
        navigation.style.transition = '1s';


        //sun
        toggleDark.style.color = 'yellow';
        toggleDark.style.transition = '1s';


        //spotify text
        playlistName.style.color = '#FF004D';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = '#111D5E';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = '#111D5E';
        txt1.style.transition = '1s';

        //selectsongstext
        selectsongstxt.style.color = "#FF2E63";
        selectsongstxt.style.transition = '1s';
    }

    else{
        //background
        body.style.background = "url('back-02.svg')";
        body.style.transition = '1s';



        //arrow color
        arrow.style.color = 'white';
        arrow.style.transition = '0.5s';


        //moon
        toggleDark.style.color = 'white';
        toggleDark.style.transition = '1s';



        //navigation bar background

        navigation.style.background = "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)";
        navigation.style.transition = '1s';


        //spotify text
        playlistName.style.color = 'antiquewhite';
        playlistName.style.transition = '1s';


        //change theme text
        txt.style.color = '#111D5E';
        txt.style.transition = '1s';


        //about text
        txt1.style.color = 'antiquewhite';
        txt1.style.transition = '1s';

        //selectsongstext
        selectsongstxt.style.color = "#3E00FF";
        selectsongstxt.style.transition = '1s';
    }
});
