import { getQuote } from './quoteModule.js';
import { getGIF } from './gifModule.js';
import { getChallenge } from './challengeModule.js';
import { toggleTheme, loadTheme } from './themeModule.js';
import { storageModule } from './storageModule.js';

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const gifEl = document.getElementById('gif');
const challengeEl = document.getElementById('challenge');
const newBtn = document.getElementById('newBtn');
const darkToggle = document.getElementById('darkToggle');
const historySection = document.getElementById('history-section');


document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      const darkToggle = document.getElementById("darkToggle");
      if (darkToggle) {
        darkToggle.addEventListener("click", toggleTheme);
      }

      loadTheme();
    });

  fetch("partials/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

  loadInspiration();
});


async function loadInspiration() {
  const quoteData = await getQuote();
  quoteEl.textContent = `"${quoteData.content}"`;
  authorEl.textContent = `- ${quoteData.author}`;
  
  const challenge = getChallenge();
  challengeEl.textContent = challenge;

  const gifUrl = await getGIF(quoteData.content);
  gifEl.src = gifUrl;

  // Save to history
  const entry = {
    quote: quoteData.content,
    author: quoteData.author,
    challenge: challenge,
    date: new Date().toLocaleString()
  };
  storageModule.saveToHistory(entry);

  // Display history
  displayHistory();
}

function displayHistory() {
  const history = storageModule.getHistory();
  historySection.innerHTML = '<h2>Recent Entries</h2>';

  history.forEach(entry => {
    const item = document.createElement('div');
    item.classList.add('history-item');

    item.innerHTML = `
      <p><strong>Quote:</strong> "${entry.quote}" - ${entry.author}</p>
      <p><strong>Challenge:</strong> ${entry.challenge}</p>
      <p><em>${entry.date}</em></p>
      <hr>
    `;

    historySection.appendChild(item);
  });
}

newBtn.addEventListener('click', loadInspiration);
// darkToggle.addEventListener('click', toggleTheme);

// // Initial Load
// loadTheme();
// loadInspiration();
