
function countInstances(string, word) {
    return string.split(word).length - 1;
  }

export function Lines(input) {
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
  let vowelCount = 0;
  let array = input.split("");
  vowelCount = countInstances(input, 'a') + countInstances(input, 'o') + countInstances(input, 'e') + countInstances(input, 'i') + countInstances(input, 'u') + countInstances(input, 'y');
  if (array[array.length - 1] === 'e' && vowelCount > 1) {
    return vowelCount - 1;
  }
  else {
    return vowelCount;
  }
}

