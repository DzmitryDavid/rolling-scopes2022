export const greeting = (lang) => {
  const greetingEl = document.querySelector('.greeting');
  const nameInputEl = document.querySelector('.name');
  nameInputEl.placeholder = '[Enter your name]'
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
      e.target.value = ' ';
      console.log(e.target.value)
      
    }
  };

  nameInputEl.addEventListener('change', setInput);
  nameInputEl.addEventListener('click', clearInput);
  window.addEventListener('load', checkStorage);

  setGreetingTime(); 
  return getTimeOfDay
};
// export default greeting;
