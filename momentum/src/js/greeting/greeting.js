const greeting = (lang) => {
  const greetingTranslation = {
    rusLang: `Добрый`,
    engLang: `Good`
  }
  const greetingEl = document.querySelector('.greeting');
  const nameInput = document.querySelector('.name');

  const setInput = (e) => {
    let value = e.target.value;
    if (e.type === 'change') {
      localStorage.setItem('name', value);
      nameInput.value = value;
      nameInput.blur();
    }
  };

  const checkStorage = () => {
    if (localStorage.getItem('name') === null) {
      nameInput.value = '[Enter your name]';
    } else {
      nameInput.value = localStorage.getItem('name');
    }
  };
  const getTimeOfDay = () => {
    let today = new Date();
    let hour = today.getHours();
    let currentTime = '';
    if (hour > 6 && hour < 12) {
      currentTime = 'morning';
    } else if (hour >= 12 && hour < 18) {
      currentTime = 'afternoon';
    } else if (hour >= 18 && hour < 24) {
      currentTime = 'evening';
    } else {
      currentTime = 'night';
    }

    return currentTime;
  };
  
  const setGreetingTime = () => {
    const currentTime = getTimeOfDay();
    let greetingPhrase = `Good ${currentTime}`;
    greetingEl.textContent = greetingPhrase;
  };

  const clearInput = (e) => {
    if (localStorage.getItem('name') === null) {
      e.target.value = '';
    }
  };

  setGreetingTime();
  nameInput.addEventListener('change', setInput);
  nameInput.addEventListener('click', clearInput);
  window.addEventListener('load', checkStorage);
  return getTimeOfDay
};
export default greeting;
