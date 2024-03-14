// JavaScript for interaction and functionality
const audioPlayer = document.getElementById('audioPlayer');
const albumCover = document.getElementById('albumCover');
const playButton = document.getElementById('playButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Sample music URLs
const songs = [
  'music/animal.mp3'
];
let currentSongIndex = 0;

function loadSong(songIndex) {
  console.log("loadSong");
  audioPlayer.src = songs[songIndex];
  albumCover.src = 'images/animal.jpg';
    audioPlayer.play();
    console.log("play");

  
  // Replace albumCover.src with the appropriate album cover URL

}

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    console.log("Pause");
    playButton.textContent = 'Pause';
  } else {
    console.log("Play");
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
});

prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
});

// Load initial song
loadSong(currentSongIndex);