
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
  const allVowels = ["a", "o", "e", "i", "u", "y"]
  allVowels.forEach(function(element) {
    if (countInstances(input, element) > 0) {
      vowelCount = vowelCount + countInstances(input, element);
    }
    });

  let diphCount = 0;
  const diphVowels = ["oo", "ui", "ea", "ay", "ae", "oi", "ou", "oa", "ee", "ai", "eau", "oy", "ey"];
  diphVowels.forEach(function(element) {
    if (countInstances(input, element) > 0) {
      diphCount = diphCount + countInstances(input, element);
    }
  }) 

  if (array[array.length - 1] === 'e' && vowelCount > 1) {
    return vowelCount - diphCount - 1;
  }
  else {
    return vowelCount - diphCount;
  }
} 

