console.log(
  '1.Вёрстка соответствует макету. Ширина экрана 768px +24\n 2.Вёрстка соответствует макету. Ширина экрана 380px +24\n 3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.+15 \n 4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22'
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
