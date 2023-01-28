export const filter = () => {
  const categoryBtns = document.querySelectorAll('.service__button');
  const cards = document.querySelectorAll('.service__card');
  let cardsArr = [];
  let inactive = [];
  cards.forEach((card) => cardsArr.push(card));

  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      btn.classList.toggle('service__button-active');
      if (btn.classList.contains('service__button-active')) {
        addActive(e);
      }
      if (!btn.classList.contains('service__button-active')) {
        removeActive(e);
        isActive();
      } else {
        isActive();
      }
    });
  });

  const isActive = () => {
    const activeBtnArr = [];
    categoryBtns.forEach((btn) => {
      if (btn.classList.contains('service__button-active')) {
        activeBtnArr.push(btn);
      }

      if (activeBtnArr.length === 2) {
        categoryBtns.forEach((btn) => {
          if (!btn.classList.contains('service__button-active')) {
            btn.classList.add('disabled');
          }
        });
      }
      if (activeBtnArr.length < 2) {
        btn.classList.remove('disabled');
      }
    });
  };

  const addActive = (e) => {
    cards.forEach((card) => {
      card.classList.add('blur');
    });
    let targetId = e.target.dataset.id;
    inactive.push(
      ...cardsArr.filter((item) => item.classList.contains(targetId))
    );
    inactive.forEach((item) => item.classList.remove('blur'));
  };
  const removeActive = (e) => {
    cards.forEach((card) => {
      card.classList.add('blur');
    });
    let targetId = e.target.dataset.id;
    inactive = inactive.filter((item) => !item.classList.contains(targetId));
    inactive.forEach((item) => item.classList.remove('blur'));
    removeAllBlur();
  };

  const removeAllBlur = () => {
    const btnArr = [];
    categoryBtns.forEach((btn) => {
      btnArr.push(btn);
    });
    if (
      btnArr.every((item) => !item.classList.contains('service__button-active'))
    ) {
      cards.forEach((card) => {
        card.classList.remove('blur');
      });
    }
  };
};
