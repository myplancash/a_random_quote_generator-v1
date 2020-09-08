/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 *
***/
// creates an array of objects to store the info
const quotes = [
  {
    quote: "The only courage that matters is the kind that gets you from one moment to the next.",
    source: "Mignon McLaughlin.",
    citation: "The Second Neurotic's Notebook"
  },
  {
    quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
    source: "Eleanor Roosevelt",
    citation: "Unwritten"
  },
  {
    quote: "Advice is very easy to give, and even easier not to follow, so I don't fool with it.",
    source: "Randy Pausch",
    citation: "Carnegie Mellon Commencement Speech"
  },
  {
    quote: "The lessons this life has planted in my heart pertain more to caring than crops, more to Golden Rule than gold, more to the proper choice than to the popular choice.",
    source: "Kirby Larson",
    citation: "Hattie Big Sky",
    date: "1841"
  },
  {
    quote: "Don't let yourself forget what it's like to be sixteen.",
    source: "Anonymous",
    date: "1812"
  },
  {
    quote: "The more you know, the less you need.",
    source: "Aboriginal Saying",
    date: "1941"
  },
  {
    quote: "Trust men and they will be true to you; treat them greatly, and they will show themselves great.",
    source: "Ralph Waldo Emerson",
    citation: "Essays, First Series: Prudence",
  },
  {
    quote: "Where we have strong emotions, we're liable to fool ourselves.",
    source: "Carl Sagan",
    citation: "Cosmos (Blues for a Red Planet)"
  }
];


const colors = [
  {
    background: "#0c0db2",
  },
  {
    background: "#f6ad5e",
  },
  {
    background: "#cf8370",
  },
  {
    background: "#562622",
  },
  {
    background: "#e4134c",
  },
  {
    background: "#8d377b",
  },
  {
    background: "#a3de83",
  },
  {
    background: "#d53cbc",
  },
  {
    background: "##b2da1c",
  }
];

let timer;

/***
 * `getRandomQuote` function
***/


const getRandomQuote = () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

const getRandomColor = () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

const startTimer = () => {
  timer = setInterval(printQuote, 3000);
}


const stopTimer = () => {
  clearInterval(timer);
}

// creates an array of colors to randomly choose from


/***
 * `printQuote` function
***/

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let randomColor = getRandomColor();
  let html = `<p class='quote'> ${randomQuote.quote} </p>`;
  html += `<span class='source'> ${randomQuote.source}</span>`;

  if ("citation" in randomQuote) {
    html += `<span class='citation'> ${randomQuote.citation}</span >`;
  }

  if ("date" in randomQuote) {
    html += `<span class='year'> ${randomQuote.date}</span>`;
  }

  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = randomColor.background;

  stopTimer();
  startTimer();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);