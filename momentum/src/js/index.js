import { getQuotes } from './quotes/quotes.js';
import { player } from './player/player.js';
import { clock } from './clock/clock.js';
import greeting  from './greeting/greeting.js';
import { setPicture } from './imagesApi/githubApi.js';
import { unsplashPicture } from './imagesApi/unsplashApi.js';
import { weather } from './weather/weather.js';
import { todo } from './todo/todo.js';


const state = {
  rusLang: 'ru',
  engLang: 'en',
  photoSource: 'github'
}
setPicture();
player();
getQuotes();
clock();
greeting();
weather();
todo()
// unsplashPicture()

console.log()
