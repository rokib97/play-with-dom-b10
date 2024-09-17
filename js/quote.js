const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  { quote: "What we think, we become.", author: "Buddha" },
  {
    quote: "In the end, we only regret the chances we didn’t take.",
    author: "Lewis Carroll",
  },
];

document.getElementById("quote").addEventListener("click", function () {
  const p = document.getElementById("quote-p");
  const h1 = document.getElementById("name");

  const randomIndex = Math.floor(Math.random() * quotes.length); //0-1 => 0.9999 // 10 //
  console.log(quotes[randomIndex]);

  p.innerText = quotes[randomIndex].quote;
  h1.innerText = quotes[randomIndex].author;
});
