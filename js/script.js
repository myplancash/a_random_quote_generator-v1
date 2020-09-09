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
    citation: "The Second Neurotic's Notebook",
    tags: ['life', 'courage']
  },
  {
    quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
    source: "Eleanor Roosevelt",
    citation: "Unwritten",
    tags: ['life', 'purpose']
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
    year: "1841"
  },
  {
    quote: "Don't let yourself forget what it's like to be sixteen.",
    source: "Anonymous",
    year: "1812"
  },
  {
    quote: "The more you know, the less you need.",
    source: "Aboriginal Saying",
    year: "1941"
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

// creates an array of objects to store background color
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

let interval;

/***
 * `getRandomQuote` function
***/

// generates a random number, then assign it to a variable, returns a random object from the quotes array
const getRandomQuote = () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

// generates a random index from colors array, assigns it to a variable, then return a random object
const getRandomColor = () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

// create an regular intervals using setInterval method so that the printQuote function will automatically run after 3 seconds
const startTimer = () => {
  interval = setInterval(printQuote, 3000);
}

// stop the setInterval method from the interval variable
const stopTimer = () => {
  clearInterval(interval);
}



/***
 * `printQuote` function
***/

// creates the printQuoute function, then sets the value to the random object to randomQuote variable that was returned when the getRandomQuote function was called
// the same with  randomColor
// creates the html variable and uses the currentQuote variable along with his key values to build a string message

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let randomColor = getRandomColor();
  let html = `<p class='quote'> ${randomQuote.quote} </p>`;
  html += `<span class='source'> ${randomQuote.source}</span>`;

  // tests to see if there is a citation property  in the currentQuote, if so, adds it to the string message
  if ("citation" in randomQuote) {
    html += `<span class='citation'> ${randomQuote.citation}</span >`;
  }
  // tests to see if there is a year property  in the currentQuote, if so, adds it to the string message
  if ("year" in randomQuote) {
    html += `<span class='year'> ${randomQuote.year}</span>`;
  }
  // tests to see if there is a tags property  in the currentQuote, if so, adds it to the string message
  if ("tags" in randomQuote) {
    for (let i = 0; i < randomQuote.tags.length; i++) {
      html += `<span class='tags'> ${randomQuote.tags[i]}</span>`;
    }
  }

  // convert the info from the html variable to the div with the quote-box id
  document.getElementById("quote-box").innerHTML = html;
  // access the currentColor background property  to change the background color
  document.body.style.background = randomColor.background;
  // clears any previous timer interval and starts a new one
  stopTimer();
  startTimer();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//when the user made an click event then starts the printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);