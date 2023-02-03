import greeting from '../greeting/greeting.js';

export const setPicture = () => {
  const slideBtnPrev = document.querySelector('.slide-prev');
  const slideBtnNext = document.querySelector('.slide-next');
  const bodyEl = document.querySelector('body');

  let slideIndex = 1;
  let randomNum = Math.floor(Math.random() * 20 + 1)
    .toString()
    .padStart(2, 0);
  let currentDayTime = greeting()();

  const setBg = () => {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${currentDayTime}/${randomNum}.webp`;

    img.onload = () => {
      bodyEl.style.background = `url('https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${currentDayTime}/${randomNum}.webp')`;
    };
  };
  setBg();

  const nextPicture = () => {
    ++slideIndex;
    const img = new Image();
    if (slideIndex > 20) {
      slideIndex = 1;
    }
    slideIndex = slideIndex.toString().padStart(2, 0);
    img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${currentDayTime}/${slideIndex}.webp`;

    img.onload = () => {
      bodyEl.style.background = `url('${img.src}')`;
    };
  };

  const prevPicture = () => {
    --slideIndex;
    const img = new Image();
    if (slideIndex < 1) {
      slideIndex = 20;
    }
    slideIndex = slideIndex.toString().padStart(2, 0);
    img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${currentDayTime}/${slideIndex}.webp`;
    img.onload = () => {
      bodyEl.style.background = `url('${img.src}')`;
    };
  };

  slideBtnNext.addEventListener('click', nextPicture);
  slideBtnPrev.addEventListener('click', prevPicture);
};
