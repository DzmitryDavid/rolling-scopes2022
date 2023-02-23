export const greeting = (time, lang='en') => {
  const greetingEl = document.querySelector('.greeting');
  const nameInputEl = document.querySelector('.name');

  let greetingPhrase = '';
  switch(time){
    case 'morning':
      greetingPhrase = (lang === 'ru') ? 'Доброе утро' : `Good ${time}`;
      break;
    case 'afternoon': 
    greetingPhrase = (lang === 'ru') ? 'Добрый день' : `Good ${time}`;
      break;
    case 'evening':
      greetingPhrase = (lang === 'ru') ? 'Добрый вечер' : `Good ${time}`;
      break;
      case 'night':
        greetingPhrase = (lang === 'ru') ? 'Доброй ночи' : `Good ${time}`;
        break;
  }
  greetingEl.textContent = greetingPhrase;

  nameInputEl.placeholder =
    lang === 'ru' ? '[Введите ваше имя]' : '[Enter your name]';
  const setInput = (e) => {
    let value = e.target.value;
    if (e.type === 'change') {
      localStorage.setItem('name', value);
      nameInputEl.value = value;
      nameInputEl.blur();
    }
  };

  const checkStorage = () => {
    if (localStorage.getItem('name') === null) {
      nameInputEl.value = nameInputEl.placeholder;
    } else {
      nameInputEl.value = localStorage.getItem('name');
    }
  };
  const clearInput = (e) => {
    if (localStorage.getItem('name') === null) {
      e.target.value = ' ';
    }
  };

  nameInputEl.addEventListener('change', setInput);
  nameInputEl.addEventListener('click', clearInput);
  window.addEventListener('load', checkStorage);

};
