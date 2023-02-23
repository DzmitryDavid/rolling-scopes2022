import { menu } from './menu/menu.js';

let state;
const checkStorage = () => {
  if (localStorage.getItem('state') === null) {
      state = {
        lang: 'en',
        photoSource: 'github',
        features: [],
      };
    } else {
      const storageState = localStorage.getItem('state');
      const parsingState = JSON.parse(storageState);
      state = parsingState;
    }
    return state
}
const storageState = localStorage.getItem('state');
  const parsingState = JSON.parse(storageState);
  state = parsingState;

console.log(state)
const getTimeOfDay = () => {
  let today = new Date();
  let hour = today.getHours();
  let timeOfDay = '';
  if (hour > 6 && hour < 12) {
    timeOfDay = 'morning';
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = 'afternoon';
  } else if (hour >= 18 && hour < 24) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }
  return timeOfDay;
};

const time = getTimeOfDay();

menu(time, state);
window.addEventListener('DOMContentLoaded', checkStorage)
