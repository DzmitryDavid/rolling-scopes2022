export const filter = () => {
  const categoryBtns = document.querySelectorAll('.service__button');
  const cards = document.querySelectorAll('.service__card');
  const arr = [];

  categoryBtns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
      btn.classList.toggle('service__button-active');
      if (btn.classList.contains('service__button-active')) {
        addActive(e);
        isActive();
      } else {
        removeActive(e);
        isActive();
      }
    });
  });

  const isActive = () => {
    const activeBtn = [];
    categoryBtns.forEach((btn) => {
      if (btn.classList.contains('service__button-active')) {
        activeBtn.push(btn);
      }

      if (activeBtn.length === 2) {
        categoryBtns.forEach((btn) => {
          if (!btn.classList.contains('service__button-active')) {
            btn.classList.add('disabled');
          }
        });
      }
      if (activeBtn.length < 2) {
        btn.classList.remove('disabled');
      }
    });
  };

  const addActive = (e) => {
    let targetId = e.target.dataset.id;
    cards.forEach((card, index) => {
      if (!card.classList.contains(targetId)) {
        card.classList.add('blur');
        arr.push(index);
      }
    });
  };
  const removeActive = (e) => {
    arr.forEach((ind) => {
      cards[ind].classList.remove('blur');
    });
    for (let i = 0; arr.length > i; arr.length - 1) {
      arr.pop();
    }
  };
};
