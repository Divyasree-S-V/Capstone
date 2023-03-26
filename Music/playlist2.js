let songIndex = 0;
let audioElement = new Audio('songs2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs2 = [
    {songName: "Kesariya", filePath: "songs2/1.mp3", coverPath: "covers/Kesariya.png"},
    {songName: "Vikram-Title track", filePath: "songs2/2.mp3", coverPath: "covers/vikram.png"},
    {songName: "Adi penne", filePath: "songs2/3.mp3", coverPath: "covers/adipenne.png"},
    {songName: "Idhazhin oram", filePath: "songs2/4.mp3", coverPath: "covers/3 movie-modified.png"},
    {songName: "Kannazhaga", filePath: "songs2/5.mp3", coverPath: "covers/3 movie-modified.png"},
    {songName: "Beast mode", filePath: "songs2/6.mp3", coverPath: "covers/beast.png"},
    {songName: "Dippam Dappam", filePath: "songs2/7.mp3", coverPath: "covers/krk.png"},
    {songName: "Tu jaane na", filePath: "songs2/8.mp3", coverPath: "covers/tujaanena.png"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs2[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs2[i].songName;
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
        audioElement.src = `songs2/${songIndex+1}.mp3`;
        masterSongName.innerText = songs2[songIndex].songName;
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
    audioElement.src = `songs2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs2[songIndex].songName;
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
    audioElement.src = `songs2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs2[songIndex].songName;
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
