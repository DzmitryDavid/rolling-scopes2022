
import { menu } from './menu/menu.js';


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

menu(time)
