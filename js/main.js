import { getQuote } from './quoteModule.js';
import { getGIF } from './gifModule.js';
import { getChallenge } from './challengeModule.js';
import { toggleTheme, loadTheme } from './themeModule.js';

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const gifEl = document.getElementById('gif');
const challengeEl = document.getElementById('challenge');
const newBtn = document.getElementById('newBtn');
const darkToggle = document.getElementById('darkToggle');

async function loadInspiration() {
  const quoteData = await getQuote();
  quoteEl.textContent = `"${quoteData.content}"`;
  authorEl.textContent = `- ${quoteData.author}`;
  
  const challenge = getChallenge();
  challengeEl.textContent = challenge;

  const gifUrl = await getGIF(quoteData.content);
  gifEl.src = gifUrl;
}

newBtn.addEventListener('click', loadInspiration);
darkToggle.addEventListener('click', toggleTheme);

// Initial Load
loadTheme();
loadInspiration();
