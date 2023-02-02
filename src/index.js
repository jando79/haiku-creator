import { Haiku } from './js/haiku.js';
import { haikuGenerator } from './js/haiku-generator.js';


function handleFormSubmission() {
  const haiku = new Haiku();
  event.preventDefault();
  let input = document.getElementById("input").value;
  let linesNumber = haiku.Lines(input);
  if (linesNumber !== 3) {
    document.getElementById("result").innerText = "Please add 3 lines";
  }
  else if (haiku.ifHaiku(input) === true) {
    document.getElementById("result").innerText = "Congratulations! Your haiku is beautiful!";
  }
  else {
    document.getElementById("result").innerText = "It's not a haiku, please try again!";
  }
}

function createHaiku() {
  event.preventDefault();
  let randomHaiku = haikuGenerator();
  document.getElementById("line1").innerText = randomHaiku[0];
  document.getElementById("line2").innerText = randomHaiku[1];
  document.getElementById("line3").innerText = randomHaiku[2];
}

window.addEventListener("load", function () {
  document.querySelector("form#new-form").addEventListener("submit", handleFormSubmission);
  document.getElementById("generate").addEventListener("click", createHaiku);
});

