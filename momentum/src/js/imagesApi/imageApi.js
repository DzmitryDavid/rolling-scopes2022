export const imageApi = (time, photoSource) => {
  const slideBtnPrev = document.querySelector('.slide-prev');
  const slideBtnNext = document.querySelector('.slide-next');
  const bodyEl = document.querySelector('body');
  const tagInputEl = document.querySelector('.tag-input');

  let slideIndex = 1;

  const clearListener = () => {
    slideBtnPrev.replaceWith(slideBtnPrev.cloneNode(true));
    slideBtnNext.replaceWith(slideBtnNext.cloneNode(true));
  };

  clearListener();

  function nextPicture() {
    console.log('github next');
    ++slideIndex;
    const img = new Image();
    if (slideIndex > 20) {
      slideIndex = 1;
    }
    slideIndex = slideIndex.toString().padStart(2, 0);
    img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${time}/${slideIndex}.webp`;

    img.onload = () => {
      bodyEl.style.backgroundImage = `url('${img.src}')`;
    };
  }

  function prevPicture() {
    console.log('github prev');
    --slideIndex;
    const img = new Image();
    if (slideIndex < 1) {
      slideIndex = 20;
    }
    slideIndex = slideIndex.toString().padStart(2, 0);
    img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${time}/${slideIndex}.webp`;
    img.onload = () => {
      bodyEl.style.backgroundImage = `url('${img.src}')`;
    };
  }

  if (photoSource === 'github') {
    let randomNum = Math.floor(Math.random() * 20 + 1)
      .toString()
      .padStart(2, 0);

    const setBg = () => {
      const img = new Image();
      img.src = `https://raw.githubusercontent.com/DzmitryDavid/stage1-tasks/assets/images/${time}/${randomNum}.webp`;

      img.onload = () => {
        bodyEl.style.backgroundImage = `url('${img.src}')`;
      };
    };
    setBg();
    document.querySelector('.slide-prev').addEventListener('click', prevPicture);
    document.querySelector('.slide-next').addEventListener('click', nextPicture);
  }

  if (photoSource === 'unsplash') {
    tagInputEl.classList.add('tag-input--active')
    const tag =  tagInputEl.value
    
    const count = 1;
    const apiKey = 'emLiqi2hyqdsbLvCwLzdzsZq3IVd3bm_huylULtD4EQ';
    const unsplashApi = `https://api.unsplash.com/photos/random/?orientation=landscape&query=${tag !== '' ? tag : time}&client_id=${apiKey}&count=${count}`;

    async function getPhoto() {
      try {
        const response = await fetch(unsplashApi);
        const data = await response.json();
        console.log(data)
        const img = new Image();
        img.src = data[0].urls.regular;

        img.onload = () => {
          bodyEl.style.backgroundImage = `url('${data[0].urls.regular}'`;
        };
      } catch (error) {
        console.log(error);
      }
    }
    getPhoto()
  
    document.querySelector('.slide-prev').addEventListener('click', getPhoto);
    document.querySelector('.slide-next').addEventListener('click', getPhoto);
  }
};
