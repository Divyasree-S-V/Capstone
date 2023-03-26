
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs4/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs4 = [
    {songName: "Rain over me", filePath: "songs4/1.mp3", coverPath: "covers/rain-modified.png"},
    {songName: "Senorita", filePath: "songs4/2.mp3", coverPath: "covers/senorita-modified.png"},
    {songName: "Chilla chilla", filePath: "songs4/3.mp3", coverPath: "covers/chill-modified.png"},
    {songName: "Maskara", filePath: "songs4/4.mp3", coverPath: "covers/salim-modified.png"},
    {songName: "Fairytale", filePath: "songs4/5.mp3", coverPath: "covers/Alexander_fairytale-modified.png"},
    {songName: "Don't let me down", filePath: "songs4/6.mp3", coverPath: "covers/dont-modified.png"},
    {songName: "Blinding lights", filePath: "songs4/7.mp3", coverPath: "covers/blinding-modified.png"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs4[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs4[i].songName;
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
        audioElement.src = `songs4/${songIndex+1}.mp3`;
        masterSongName.innerText = songs4[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs4/${songIndex+1}.mp3`;
    masterSongName.innerText = songs4[songIndex].songName;
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
    audioElement.src = `songs4/${songIndex+1}.mp3`;
    masterSongName.innerText = songs4[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
