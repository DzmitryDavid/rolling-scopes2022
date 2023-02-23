import { menu } from './menu/menu.js';

let state = {
  lang: 'en',
  photoSource: 'github',
  features: [],
};

if(localStorage.getItem('state') === null) {
  localStorage.setItem('state', JSON.stringify(state))
  
} else {
  const storageState = localStorage.getItem('state');
  const parsingState = JSON.parse(storageState);
  state = parsingState;

}

console.log(state);
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

console.log(
  '1.Часы и календарь +15 - выполнено в полном объёме\n2.Приветствие +10 - выполнено в полном объёме\n3.Смена фонового изображения +20 -  выполнено в полном объёме\n4.Виджет погоды +15 - выполнено в полном объёме\n5.Виджет цитата дня +10 - выполнено в полном объёме\n6.Аудиоплеер +15 - выполнено в полном объёме\n7.Продвинутый аудиоплеер (реализуется без использования библиотек) +20 - выполнено в полном объёме(кнопка выключения звука = уменьшения громкости)\n8.Перевод приложения на два языка (en/ru или en/be) +15\n9.Получение фонового изображения от API +10\n10.Настройки приложения +20 - выполнено в полном объёме\n11.Дополнительный функционал на выбор +10 - (todo list)'
);
