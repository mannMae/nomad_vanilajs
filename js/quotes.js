const quotes = [
  {
    quote: '살고자 하면 죽고, 죽고자 하면 산다',
    author: '이순신',
  },
  {
    quote: '생생하게 꿈꾸면, 이루어진다',
    author: '이지성',
  },
  {
    quote: '배우고 때때로 익히면, 즐겁지 아니한가',
    author: '공자',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const random = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[random];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
