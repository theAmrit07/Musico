console.log("Welcome to Musico");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.m4a');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Upahar- The Elements", filePath: "./assets/songs/1.m4a", coverPath: "./assets/covers/1.png"},
    {songName: "Sapana Ko Mayalu", filePath: "./assets/songs/2.m4a", coverPath: "./assets/covers/2.png"},
    {songName: "URJA", filePath: "./assets/songs/3.m4a", coverPath: "./assets/covers/3.png"},
    {songName: "Manaka Kura", filePath: "./assets/songs/4.m4a", coverPath: "./assets/covers/4.png"},
    {songName: "Gauthali", filePath: "./assets/songs/5.m4a", coverPath: "./assets/covers/5.png"},
    {songName: "Iraaday- Abdul Hannan", filePath: "./assets/songs/2.m4a", coverPath: "./assets/covers/6.png"},
    {songName: "Blank Space- Taylor Swift", filePath: "./assets/songs/2.m4a", coverPath: "./assets/covers/7.png"},
    {songName: "Heat Waves", filePath: "./assets/songs/2.m4a", coverPath: "./assets/covers/8.png"},
    {songName: "Timi Nacha Na", filePath: "./assets/songs/2.m4a", coverPath: "./assets/covers/9.png"},
    {songName: "Timi Bhaney", filePath: "./assets/songs/4.m4a", coverPath: "./assets/covers/10.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
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
        audioElement.src = `./assets/songs/${songIndex+1}.m4a`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./assets/songs/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
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
    audioElement.src = `./assets/songs/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})