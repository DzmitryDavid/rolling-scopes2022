
import {accordion} from  './accordion.js';
import {select} from  './select.js';
import {filter} from  './filter.js';
accordion();
select();
filter();
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
console.log('1.При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3.В разделе contacts реализован select с выбором городов +25');
