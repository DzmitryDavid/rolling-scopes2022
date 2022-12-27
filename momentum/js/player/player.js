import { playlist } from './playlist.js';

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.play-pause');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const songTitle = document.querySelector('.player__title');
const songAuthor = document.querySelector('.player__author');

let isPlaying = false;
let songIndex = 0;

export const playSong = () => {
  isPlaying = true;
  playBtn.classList.replace('play', 'play-pause');
  audio.play();
};

export const pauseSong = () => {
  isPlaying = false;
  playBtn.classList.replace('play-pause', 'play');
  audio.pause();
};

playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

const loadSong = (song) => {
  songTitle.textContent = song.title;
  // songAuthor.textContent = song.author;
  audio.src = song.src;
  console.log(song.title) 
}

const nextSong = () => {
  songIndex++;
  if(songIndex > playlist.length - 1) {
    songIndex = 0
  }
  loadSong(playlist[songIndex]);
  playSong()
}
const prevSong = () => {
  songIndex--;
  if(songIndex < 0) {
    songIndex = playlist.length - 1;
  }
  loadSong(playlist[songIndex]);
  playSong();
}

nextBtn.addEventListener('click', nextSong )
prevBtn.addEventListener('click', prevSong )
loadSong(playlist[songIndex])

