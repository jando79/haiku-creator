
const countInstances = (string, word) => {
    return string.split(word).length - 1;
  }

export const Lines = (input) => {
  if (countInstances(input, "\n") === 2) {
    return 3;
  }
}

export function Vowel(input) {
    if (countInstances(input, 'a') === 0 && countInstances(input, 'e') === 0 && countInstances(input, 'i') === 0 && countInstances(input, 'o') === 0 && countInstances(input, 'u') === 0 && countInstances(input, 'u') === 0) {
      return false;
    }
    else {
      return true;
    }
}

export function Rule1(input) {
  let array = input.split("");

  let vowelCount = 0;
  const allVowels = ["a", "o", "e", "i", "u", "y", "A", "O", "E", "I", "U", "Y"]
  allVowels.forEach(function(element) {
    if (countInstances(input, element) > 0) {
      vowelCount = vowelCount + countInstances(input, element);
    }
    });

  let diphCount = 0;
  const diphVowels = ["oo", "ui", "ea", "ay", "ae", "oi", "ou", "oa", "ee", "ai", "eau", "oy", "ey", "ye"];
  diphVowels.forEach(function(element) {
    if (countInstances(input, element) > 0) {
      diphCount = diphCount + countInstances(input, element);
    }
  }) 

  if (array[array.length - 1] === 'e' && vowelCount > 1 && array[array.length - 2] !== 'l' && array[array.length - 2] !== 'e' && array[array.length - 2] !== 'a') {
    return vowelCount - diphCount - 1;
  }
  else {
    return vowelCount - diphCount;
  }
} 

export function BreakIntoLines(input) {
  let outputArray = [];
  let indexOf = input.indexOf("\n");
  outputArray.push(input.slice(0, indexOf));
  input = input.slice(indexOf + 1, input.length);
  indexOf = input.indexOf("\n");
  outputArray.push(input.slice(0, indexOf));
  input = input.slice(indexOf + 1, input.length);
  outputArray.push(input);
  return outputArray;
}

export function CountSyllables(input) {
  let words = input.split(" ");
  let totalCount = 0;
  words.forEach(function(element) {
    totalCount = totalCount + Rule1(element);
  })
  return totalCount;
}

export function ifHaiku(input) {
  if (Lines(input) === 3) {
    let finalArray = [];
    let newArray = BreakIntoLines(input);
    newArray.forEach(function(element) {
      finalArray.push(CountSyllables(element));
    })
    if (finalArray.toString() === '5,7,5') {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}