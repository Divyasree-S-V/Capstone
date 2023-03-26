console.log("Welcome to D&F's playlist");


// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs1 = [
    {songName: "L's theme", filePath: "songs1/1.mp3", coverPath: "covers/L.png"},
    {songName: "Akuma no ko", filePath: "songs1/2.mp3", coverPath: "covers/aot2.png"},
    {songName: "Your name", filePath: "songs1/3.mp3", coverPath: "covers/yourname.png"},
    {songName: "The rumbling", filePath: "songs1/4.mp3", coverPath: "covers/aot.png"},
    {songName: "Hikaru nara", filePath: "songs1/5.mp3", coverPath: "covers/april.png"},
    {songName: "Demon slayer opening theme", filePath: "songs1/6.mp3", coverPath: "covers/demon.png"},
    {songName: "Light theme", filePath: "songs1/7.mp3", coverPath: "covers/light.png"},
    {songName: "Suzume no tojimari", filePath: "songs1/8.mp3", coverPath: "covers/suzu.png"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs1[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs1[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs1/${songIndex+1}.mp3`;
        masterSongName.innerText = songs1[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs1[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs1[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})








/*
const element = document.querySelector('.teams');

element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'red';
});

element.addEventListener('mouseout', function() {
  element.style.backgroundColor = 'initial';
});
*/
