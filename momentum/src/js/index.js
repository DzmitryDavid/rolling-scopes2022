import { getQuotes } from './quotes/quotes.js';
import { player } from './player/player.js';
import { clock } from './clock/clock.js';
import greeting  from './greeting/greeting.js';
import { setPicture } from './imagesApi/githubApi.js';

player();
getQuotes();
clock();
greeting();
setPicture();
