export const accordion = () => {
  const accordionPanel = document.querySelectorAll('.accordion__panel');

  accordionPanel.forEach((panel, index) => {
    panel.addEventListener('click', (e) => {
      if (!e.target.classList.contains('accordion__panel-button')) {
        addActive(panel);
        removeActive(index);
      }
    });
  });

  const addActive = (panel) => {
    panel.classList.toggle('accordion-active');
    panel.classList.toggle('back');
    panel.firstElementChild.lastElementChild.classList.toggle('round--opened');
    panel.firstElementChild.lastElementChild.lastElementChild.classList.toggle(
      'round__arrow--up'
    );
  };

  function removeActive(index1) {
    accordionPanel.forEach((item, index2) => {
      if (accordionPanel[index1] !== accordionPanel[index2]) {
        item.classList.remove('accordion-active');
        item.classList.remove('back');
        item.firstElementChild.lastElementChild.classList.remove(
          'round--opened'
        );
        item.firstElementChild.lastElementChild.lastElementChild.classList.remove(
          'round__arrow--up'
        );
      }
    });
  }
};

