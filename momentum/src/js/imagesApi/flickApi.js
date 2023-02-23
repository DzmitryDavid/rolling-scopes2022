import {greeting} from '../greeting/greeting.js';

export const flickPicture = () => {
  // const apiKey = 8263545a51b704ffbafdf5fce5e4cccb
//secret 5ae45e020227ebb5

const slideBtnPrev = document.querySelector('.slide-prev');
  const slideBtnNext = document.querySelector('.slide-next');
  const bodyEl = document.querySelector('body');

  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8263545a51b704ffbafdf5fce5e4cccb&tags=nature&extras=url_l&format=json&nojsoncallback=1`
  const apiKey = '8263545a51b704ffbafdf5fce5e4cccb';
  // const flickApi = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=nature&extras=url_l&format=json&nojsoncallback=1`
const flickApi = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&format=json&nojsoncallback=1`
  async function getPhotos() {
    try {
      const response = await fetch(flickApi);
      const data = await response.json();
      const img = new Image();
      console.log(data)

      img.onload = () => {
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
}