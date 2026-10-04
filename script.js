const quotes = [
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vincent Peale" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");
let lastIndex = -1;

function showRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && index === lastIndex);

  lastIndex = index;
  quoteElement.textContent = quotes[index].text;
  authorElement.textContent = "— " + quotes[index].author;
}

button.addEventListener("click", showRandomQuote);
