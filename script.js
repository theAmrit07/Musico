console.log("Welcome to Musico");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songIten'))
let songs = [
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/2.mp3",
    coverPath: "./assets/covers/2.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/3.mp3",
    coverPath: "./assets/covers/3.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/4.mp3",
    coverPath: "./assets/covers/4.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/5.mp3",
    coverPath: "./assets/covers/5.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/6.mp3",
    coverPath: "./assets/covers/6.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/7.mp3",
    coverPath: "./assets/covers/7.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/8.mp3",
    coverPath: "./assets/covers/8.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/9.mp3",
    coverPath: "./assets/covers/9.jpg",
  },
  {
    songName: "Salam-e-ishq",
    filePath: "./assets/songs/9.mp3",
    coverPath: "./assets/covers/10.jpg",
  },
];
songItems.forEach((element, i)=>{
    console.log(element, i)
element.getElementsByTagName("img")[0].src = songs[i].coverPath
element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})
// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
