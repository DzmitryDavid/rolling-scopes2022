export const burger = () => {
  const burgerEl = document.querySelector('.hamburger');
  const menuEl = document.querySelector('.menu');
  const menuCloseEl = document.querySelector('.menu__close');
  const openMenu = () => {
    menuEl.classList.add('active');
  };
  const hideMenu = () => {
    menuEl.classList.remove('active');
  };
  burgerEl.addEventListener('click', openMenu);
  menuCloseEl.addEventListener('click', hideMenu);
};
