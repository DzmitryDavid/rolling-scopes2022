import { playlist } from './playlist.js';

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
// const pauseBtn = document.querySelector('.play-pause');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const songTitle = document.querySelector('.player__title');
const songAuthor = document.querySelector('.player__author');
const progressContainer = document.querySelector('progress__container');
const progressBar = document.querySelector('.progress');
const currentTimeElement = document.querySelector('#current-time');
const durationElement = document.querySelector('#duration');

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
  console.log(song.title);
};

const nextSong = () => {
  songIndex++;
  if (songIndex > playlist.length - 1) {
    songIndex = 0;
  }
  loadSong(playlist[songIndex]);
  playSong();
};

const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }
  loadSong(playlist[songIndex]);
  playSong();
};

const getTime = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }

  const currentMinutes = Math.floor(currentTime / 60);
  let currentSecond = Math.floor(currentTime % 60);
  if (currentSecond < 10) {
    currentSecond = `0${currentSecond}`;
  }
  return {
    durationSeconds,
    durationMinutes,
    currentMinutes,
    currentSecond,
  };
};

const updateProgressBar = (e) => {
  if (isPlaying) {
    const time = getTime(e);
    if (time.durationSeconds || time.durationMinutes) {
      durationElement.textContent = `${time.durationMinutes}:${time.durationSeconds}`;
    }
    if (time.currentMinutes || time.currentSecond) {
      currentTimeElement.textContent = `${time.currentMinutes}:${time.currentSecond}`;
    }
  }
};

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgressBar);
loadSong(playlist[songIndex]);
