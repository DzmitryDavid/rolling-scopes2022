import { playlist } from './playlist.js';

export const player = () => {
  const playerEl = document.querySelector('.player') 
  const audio = document.querySelector('audio');
  const playBtn = document.querySelector('.play');
  const showPlayerBtn = document.querySelector('.player__btn');

  const prevBtn = document.querySelector('.play-prev');
  const nextBtn = document.querySelector('.play-next');
  const songTitle = document.querySelector('.player__title');
  const songAuthor = document.querySelector('.player__author');
  const progressContainer = document.querySelector('.progress__container');
  const progressBar = document.querySelector('.progress');
  const currentTimeElement = document.querySelector('#current-time');
  const durationElement = document.querySelector('#duration');
  const playListElement = document.querySelector('.play-list');
  const volumeInput = document.querySelector('.progress__volume');
  const volumeDownBtn = document.querySelector('.volume-down')

  let isPlaying = false;
  let songIndex = 0;
  let isMute = false


  const setPlaylist = () => {
    playlist.forEach((song) => {
      const songEl = document.createElement('li');
      songEl.classList.add('play-item')
      songEl.textContent = song.title;
      playListElement.appendChild(songEl);
      
      songEl.addEventListener('click' , (e) => {
        document.querySelectorAll('.play-item').forEach((item) => {
          item.style.color = '#fff'
        })
        e.target.style.color =  'hsla(256, 37%, 68%, 0.95)'
        loadSong(song);
        playSong()
      })
    })
  }
  const playSong = () => {
    
    isPlaying = true;
    playBtn.classList.replace('play', 'play-pause');
    audio.play();

  };

  const pauseSong = () => {
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
  function setProgressBar(e) {
    const { duration } = audio;
    const progressSong = (e.offsetX / this.clientWidth) * duration;
    const progressBarWidth = (e.offsetX / this.clientWidth) * 100;
    audio.currentTime = progressSong;
    progressBar.style.width = `${progressBarWidth}%`;
  }

  const changeVolume = () => {
    audio.volume = volumeInput.value / 100;
  }
  const muteSound = () => {
    audio.volume = 0;
    volumeInput.value = 0;
    isMute = !isMute
  }
  const maxSound = () => {
    audio.volume = 1;
    volumeInput.value = 50;
    isMute = !isMute
  }

  const showPlayer = () => {
    playerEl.classList.toggle('show')
  }

  nextBtn.addEventListener('click', nextSong);
  prevBtn.addEventListener('click', prevSong);
  audio.addEventListener('timeupdate', updateProgressBar);
  audio.addEventListener('ended', nextSong);
  progressContainer.addEventListener('click', setProgressBar);
  volumeInput.addEventListener("input", changeVolume);
  volumeDownBtn.addEventListener('click', () => {
    isMute ? maxSound() : muteSound()
  })

  // showPlayerBtn.addEventListener('click', showPlayer )
  
  loadSong(playlist[songIndex]);
  setPlaylist()

};
