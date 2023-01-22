const accordion = () => {
  const accordionPanel = document.querySelectorAll('.accordion__panel');

  accordionPanel.forEach((panel) => {
    panel.addEventListener('click', (e) => {
      console.log(e.target);

      if (!e.target.classList.contains('accordion__panel-button')) {
        panel.classList.toggle('accordion-active');
        panel.classList.toggle('back');
        panel.firstElementChild.lastElementChild.classList.toggle(
          'round--opened'
        );
        panel.firstElementChild.lastElementChild.lastElementChild.classList.toggle(
          'round__arrow--up'
        );
      }
    });
  });
};

export default accordion;
