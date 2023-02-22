'';
import { greeting } from '../greeting/greeting.js';
import { quotes } from '../quotes/quotes.js';
import { player } from '../player/player.js';
import { clock } from '../clock/clock.js';
import { weather } from '../weather/weather.js';
import { todo } from '../todo/todo.js';

// import { unsplashPicture } from '../imagesApi/unsplashApi.js';
import { imageApi } from '../imagesApi/imageApi.js';
import { flickPicture } from '../imagesApi/flickApi.js';

export const menu = (time) => {
  const menuEl = document.querySelector('.settings');
  const menuIcon = document.querySelector('.settings__icon');
  const form = document.querySelector('#settings__form');
  const featureInputs = document.querySelectorAll('.feature__input');
  const featureLabels = document.querySelectorAll('.feature__label');
  const playerLabel = document.querySelector('[for=player]');
  const tagInputEl = document.querySelector('.tag-input');

  let state = {
    lang: 'en',
    photoSource: 'github',
    features: [],
    tag: 'nature',
  };

  const translatingMenu = () => {
    document.querySelector('.settings__heading').textContent =
      state.lang === 'ru' ? 'Выберите настройки' : 'Please choose settings';
    document.querySelector('.image__heading').textContent =
      state.lang === 'ru' ? 'Источник изображений' : 'Choose image source';
    document.querySelector('.lang__heading').textContent =
      state.lang === 'ru' ? 'Выберите язык' : 'Choose language';
    console.log(document.querySelector('#en').parentElement);

    document.querySelector('.feature__heading').textContent =
      state.lang === 'ru' ? 'Виджеты' : 'Add widget';
    // playerLabel.textContent = (state.lang === 'ru') ? 'Аудио плеер' : 'Player';
    // document.querySelector('[for=quote]').textContent = (state.lang === 'ru') ? 'Цитата' : 'quote';
    // document.querySelector('[for=clock]').textContent = (state.lang === 'ru') ? 'Часы' : 'clock';
    // document.querySelector('[for=weather]').textContent = (state.lang === 'ru') ? 'Погода' : 'weather';
    // document.querySelector('[for=todo]').textContent = (state.lang === 'ru') ? 'Todo-лист' : 'todo';
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
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(form);
    displayFeatureElements();
    changeableSettings();
    translatingMenu();
  });

  const displayFeatureElements = () => {
    featureInputs.forEach((input) => {
      if (input.checked) {
        document.querySelector(`.${input.value}`).classList.add('visible');
      } else {
        document.querySelector(`.${input.value}`).classList.remove('visible');
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
    languageInput.forEach((inp) => {
      inp.addEventListener('change', (e) => {
        console.log(e);
        langLabelEl.forEach((label) => {
          console.log(label);
          label.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
      });
    });
  };

  const imageSourceSettingStyle = () => {
    const imageSourceInputs = document.querySelectorAll('.image-source__input');
    const imageSourceLabel = document.querySelectorAll('.image-source__label');
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
    languageSettingStyle();
    imageSourceSettingStyle();
    featureSettingsStyle();
    todo();
    player();
    greeting(time);
    clock(state.lang);
    imageApi(time, state.photoSource);
    quotes();
    translatingMenu();
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
  document.addEventListener('DOMContentLoaded', settings);
};
