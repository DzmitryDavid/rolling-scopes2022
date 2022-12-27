

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.play-pause');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');

let isPlaying = false;

export const playSong = () => {
  isPlaying = true;
  
  playBtn.classList.replace('play','play-pause')
  audio.play();
}
export const pauseSong = () => {
  isPlaying = false;
  playBtn.classList.replace('play-pause','play')
  
  audio.pause()
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() :  playSong()
})
