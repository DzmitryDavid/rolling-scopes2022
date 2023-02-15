// emLiqi2hyqdsbLvCwLzdzsZq3IVd3bm_huylULtD4EQ
//e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17

//flick key 8263545a51b704ffbafdf5fce5e4cccb
//secret 5ae45e020227ebb5
import greeting from '../greeting/greeting.js';

export const unsplashPicture = () => {
  const slideBtnPrev = document.querySelector('.slide-prev');
  const slideBtnNext = document.querySelector('.slide-next');
  const bodyEl = document.querySelector('body');

  let currentDayTime = greeting()();

  const count = 1;
  const apiKey = 'emLiqi2hyqdsbLvCwLzdzsZq3IVd3bm_huylULtD4EQ';
  const unsplashApi = `https://api.unsplash.com/photos/random/?orientation=landscape&query=${currentDayTime}&client_id=${apiKey}&count=${count}`;

  async function getPhotos() {
    try {
      const response = await fetch(unsplashApi);
      const data = await response.json();
      const img = new Image();
      img.src = data[0].urls.regular;
      img.onload = () => {
        bodyEl.style.backgroundImage = `url('${data[0].urls.regular}'`;
      };
    } catch (error) {
      console.log(error);
    }
  }

  const nextPhoto = () => getPhotos();

  const prevPhoto = async () => {
    await getPhotos();
  };

  getPhotos();
  slideBtnNext.addEventListener('click', nextPhoto);
  slideBtnPrev.addEventListener('click', prevPhoto);
};
