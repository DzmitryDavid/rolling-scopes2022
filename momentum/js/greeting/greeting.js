export const greeting = () => {
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

  const setGreetingTime = () => {
    let today = new Date();
    let hour = today.getHours();

    if (hour > 6 && hour < 12) {
      greetingEl.textContent = 'Good morning,';
    } else if (hour >= 12 && hour < 18) {
      greetingEl.textContent = 'Good afternoon,';
    } else if (hour >= 18 && hour < 24) {
      greetingEl.textContent = 'Good evening,';
    } else {
      greetingEl.textContent = 'Good night,';
    }
  };
  setGreetingTime();

  const clearInput = (e) => {
    if (localStorage.getItem('name') === null) {
      e.target.value = '';
    }
  };
  nameInput.addEventListener('change', setInput);
  nameInput.addEventListener('click', clearInput);
  window.addEventListener('load', checkStorage);
};
