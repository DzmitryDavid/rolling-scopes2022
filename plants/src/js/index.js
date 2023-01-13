// console.log(
//   '1.Вёрстка валидная +10\n 2.Вёрстка семантическая +20\n 3.Вёрстка соответствует макету +48 \n 4.Требования к css + 12\n 5.Интерактивность, реализуемая через css +20\n Итого 110 баллов'
// );

const categories = document.querySelector('.service__buttons');
const categoryItems = document.querySelectorAll('.service__button');
const cards = document.querySelectorAll('.service__card');
// console.log(categoryItems);

const changeCategory = (targetId) => {
  cards.forEach((item) => {
    if (item.classList.contains(targetId)) {
      item.classList.add('blur');
    } else {
      item.classList.remove('blur');
    }
  });
};
const filterCategory = () => {
  categories.addEventListener('click', (e) => {
    const targetId = e.target.dataset.id;
    categoryItems.forEach((categoryItem) => {
      categoryItem.classList.remove('service__button-active');
      e.target.classList.add('service__button-active');
    });
    switch (targetId) {
      case 'garden':
        changeCategory(targetId);
        break;
      case 'planting':
        changeCategory(targetId);
        break;
      case 'lawn':
        changeCategory(targetId);
    }
  });
};
filterCategory();
