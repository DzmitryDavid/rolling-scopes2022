const quoteElement = document.querySelector('#quote');
const quoteAuthorElement = document.querySelector('#author');
const changeQuoteBtn = document.querySelector('.change-quote');

export const getQuotes = async function () {
  try {
    await fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => getQuote(data));
  } catch (error) {
    console.error(error);
  }
};

export const getQuote = (quotes) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = quote.text;
  !quote.author
    ? (quoteAuthorElement.textContent = 'Unknown')
    : (quoteAuthorElement.textContent = quote.author);
};

changeQuoteBtn.addEventListener('click', () => {
  getQuotes();
});
