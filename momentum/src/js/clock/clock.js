export const clock = (lang) => {
  const dateEl = document.querySelector('.date');
  const timeEl = document.querySelector('.time');
  
  setInterval(() => {
    const date = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    let currentTime = date.toLocaleTimeString('ru-Ru',options)
    timeEl.textContent = currentTime;
  },1000),
  
  (function () {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    let day = date.toLocaleDateString(`${lang}`, options);
    dateEl.textContent = `${day}`;
  })();
};
