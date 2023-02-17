

export const getQuotes = async function () {
  try {
    await fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => getQuote(data));
  } catch (error) {
    console.error(error);
  }
};

const quoteAuthorElement = document.querySelector('#author');
const quoteElement = document.querySelector('.quote-text');

export const getQuote = (quotes) => {
const quote = quotes[Math.floor(Math.random() * quotes.length)];
quoteElement.textContent = quote.text;
!quote.author
? (quoteAuthorElement.textContent = 'Unknown')
: (quoteAuthorElement.textContent = quote.author);
};

const changeQuoteBtn = document.querySelector('.change-quote');
changeQuoteBtn.addEventListener('click', () => {
  getQuotes();
});
