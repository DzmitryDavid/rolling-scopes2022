
import { greeting } from '../greeting/greeting.js';
import { quotes } from '../quotes/quotes.js';
import { player } from '../player/player.js';
import { clock } from '../clock/clock.js';
import { weather } from '../weather/weather.js';
import { todo } from '../todo/todo.js';

import { imageApi } from '../imagesApi/imageApi.js';

export const menu = (time,state) => {
  const menuEl = document.querySelector('.settings');
  const menuIcon = document.querySelector('.settings__icon');
  const form = document.querySelector('#settings__form');
  const featureInputs = document.querySelectorAll('.feature__input');
  const featureLabels = document.querySelectorAll('.feature__label');
  const tagInputEl = document.querySelector('.tag-input');


  const translatingMenu = () => {
    document.querySelector('.settings__heading').textContent =
      state.lang === 'ru' ? 'Выберите настройки' : 'Please choose settings';
    document.querySelector('.image__heading').textContent =
      state.lang === 'ru' ? 'Источник изображений' : 'Choose image source';
    document.querySelector('.lang__heading').textContent =
      state.lang === 'ru' ? 'Выберите язык' : 'Choose language';
    document.querySelector('.feature__heading').textContent =
      state.lang === 'ru' ? 'Виджеты' : 'Add widget';
    document.querySelector('.todo__title').textContent =
      state.lang === 'ru' ? 'Добавить задание' : ' Add a todo to get started';
    document.querySelector('.todo__btn').textContent =
      state.lang === 'ru' ? 'Добавить' : 'New todo';
    
  };
  function getData(form) {
    const featuresArr = [];
    const formData = new FormData(form);

    featureInputs.forEach((inp) => {
      if (inp.checked) {
        featuresArr.push(inp.value);
      }
    });
    state = {
      ...state,
      ...Object.fromEntries(formData),
      features: [...featuresArr],
    };
    localStorage.setItem('state', JSON.stringify(state));
    
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(form);
    displayFeatureElements();
    changeableSettings();
    translatingMenu();
  });
  
  const displayFeatureElements = () => {
    let stateEl
    featureInputs.forEach((input) => {
      stateEl = state.features.filter((el) => {return el === input.value})
      if (stateEl.join('')) {
        document.querySelector(`.${stateEl.join('')}`).classList.add('visible');
        input.checked = true
        
      } else {
        document.querySelector(`.${input.value}`).classList.remove('visible');
        input.checked = false
        
      }
    });
  };
  
  const displayToggleSettings = () => {
    menuEl.classList.toggle('hidden');
  };
  menuIcon.addEventListener('click', displayToggleSettings);

  // styles
  const featureSettingsStyle = () => {
    featureInputs.forEach((input) => {
      if (input.checked) {
        input.parentElement.classList.add('active');
      }
      if (!input.checked) {
        input.parentElement.classList.remove('active');
      }
    });
  };

  const languageSettingStyle = () => {
    const languageInput = document.querySelectorAll('.lang-input');
    const langLabelEl = document.querySelectorAll('.lang-label');

      if(state.lang === 'en') {
        langLabelEl[0].classList.add('active')
      } else {
        langLabelEl[1].classList.add('active')
      }
    languageInput.forEach((inp) => {
      inp.addEventListener('change', (e) => {
        langLabelEl.forEach((label) => {
          label.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
      });
    });
  };
  
  const imageSourceSettingStyle = () => {
    const imageSourceInputs = document.querySelectorAll('.image-source__input');
    const imageSourceLabel = document.querySelectorAll('.image-source__label');
    document.querySelector(`[for=${state.photoSource}]`).classList.add('active');
    
    imageSourceInputs.forEach((inp) => {
      inp.addEventListener('change', (e) => {
        
        if (e.target.id === 'unsplash' || e.target.id === 'flickr') {
          tagInputEl.classList.add('tag-input--active');
        } else {
          tagInputEl.classList.remove('tag-input--active');
        }
        imageSourceLabel.forEach((label) => {
          
          label.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
      });
    });
  };

  const settings = () => {
    imageSourceSettingStyle();
    displayFeatureElements()
    languageSettingStyle();
    featureSettingsStyle();
    todo();
    player();
    greeting(time);
    clock(state.lang);
    imageApi(time, state.photoSource);
    quotes();
    translatingMenu();
    weather(state.lang);
  };

  const changeableSettings = () => {
    greeting(time, state.lang);
    clock(state.lang);
    weather(state.lang);
    imageApi(time, state.photoSource);
  };

  featureLabels.forEach((label) => {
    label.addEventListener('click', featureSettingsStyle);
  });

  document.addEventListener('DOMContentLoaded', settings)
};
