import {Haiku} from './js/haiku.js';

function handleFormSubmission() {
event.preventDefault();
let input = document.getElementById("input").value;
console.log(input.split());
}

window.addEventListener("load", function () {
  document.querySelector("form#new-form").addEventListener("submit", handleFormSubmission);
});

