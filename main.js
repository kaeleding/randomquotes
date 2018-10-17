const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function getQuote() {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data.message);
    })
    .catch(function() {
      console.log("Error");
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;
}

const newQuote = document.querySelector(".new-quote");
//newQuote.addEventListener("click", getQuote()); <-- INVOKES FUNC BEFORE CLICK
newQuote.addEventListener("click", getQuote); // <-- INVOKES FUNC AFTER CLICK
