import { greeting } from './greeting/greeting.js';
import { getQuotes } from './quotes/quotes.js';
import { player } from './player/player.js';
import { clock } from './clock/clock.js';
import { unsplashPicture } from './imagesApi/unsplashApi.js';
import { githubPicture } from './imagesApi/githubApi.js';
import { flickPicture } from './imagesApi/flickApi.js';
import { weather } from './weather/weather.js';
import { todo } from './todo/todo.js';

const form = document.querySelector('#settings__form');
const featureInputs = document.querySelectorAll('.feature__input');
const featureLabels = document.querySelectorAll('.feature__label');

let defaultState = {
  lang: 'en-En',
  photoSource: 'github',
  features: [],
};

function getData(form) {
  const featuresArr = [];
  const formData = new FormData(form);

  featureInputs.forEach((inp) => {
    if (inp.checked) {
      featuresArr.push(inp.value);
    }
  });
  defaultState = {
    ...defaultState,
    ...Object.fromEntries(formData),
    features: [...featuresArr],
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(form);
  displayFeatureElements();

  console.log(defaultState);
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
  imageSourceInputs.forEach((inp) => {
    inp.addEventListener('change', (e) => {
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
  clock();
  todo();
  player();
  weather();
  greeting();
  // githubPicture();
  getQuotes();
};

// // flickPicture()
// unsplashPicture()
featureLabels.forEach((label) => {
  label.addEventListener('click', featureSettingsStyle);
});
document.addEventListener('DOMContentLoaded', settings);
