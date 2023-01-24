export const select = () => {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__item');
  const addressCards = document.querySelectorAll('.adress__card');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      const targetId = e.target.dataset.id;
      displayCard(targetId);
      selectChoose(e);
    });
  });

  function selectToggle() {
    this.parentElement.classList.toggle('select-active');
  }
  function selectChoose(e) {
    let text = e.target.textContent;
    let select = e.target.closest('.select');
    let currentText = select.querySelector('.select__current');
    currentText.textContent = text;
    select.classList.remove('select-active');
  }

  const displayCard = (targetId) => {
    console.log(targetId);
    addressCards.forEach((item) => {
      if (item.classList.contains(targetId)) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  };
};
