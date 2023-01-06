console.log(
  '1.Вёрстка валидная +10\n 2.Вёрстка семантическая +20\n 3.Вёрстка соответствует макету +48 \n 4.Требования к css + 12\n 5.Интерактивность, реализуемая через css +20\n Итого 110 баллов'
);

const burgerEl = document.querySelector('.hamburger');
const menuEl = document.querySelector('.menu');
const menuCloseEl = document.querySelector('.menu__close');
const openMenu = () => {
  menuEl.classList.add('active');
}
const hideMenu = () => {
  menuEl.classList.remove('active');
}
burgerEl.addEventListener('click', openMenu);
menuCloseEl.addEventListener('click', hideMenu);
