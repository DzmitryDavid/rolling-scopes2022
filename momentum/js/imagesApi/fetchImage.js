// emLiqi2hyqdsbLvCwLzdzsZq3IVd3bm_huylULtD4EQ
//e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17
const slideBtnPrev = document.querySelector('.slide-prev');
const slideBtnNext = document.querySelector('.slide-next');
const bodyEl = document.querySelector('body');

let slideIndex = 0;
const count = 10;
const apiKey =
  'e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
const unsplashApi = `https://api.unsplash.com/photos/random/?orientation=landscape&query=nature&client_id=${apiKey}&count=${count}`;

let photoArray = [];

async function getPhotos() {
  try {
    const response = await fetch(unsplashApi);
    photoArray = await response.json();
  } catch (error) {
    console.log(error);
  }
}

getPhotos();

const nextPhoto = async () => {
  slideIndex++;
  if (slideIndex >= photoArray.length - 1) {
    slideIndex = 0;
  }
  bodyEl.style.backgroundImage = `url(${
    photoArray[slideIndex].urls.raw + '&w=1980&h=1080'
  })`;
};
const prevPhoto = async () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = photoArray.length - 1;
  }
  bodyEl.style.backgroundImage = `url(${
    photoArray[slideIndex].urls.raw + '&w=1980&h=1080'
  })`;
};

slideBtnNext.addEventListener('click', nextPhoto);
slideBtnPrev.addEventListener('click', prevPhoto);
