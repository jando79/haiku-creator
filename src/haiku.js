
function countInstances(string, word) {
    return string.split(word).length - 1;
  }

export function Lines(input) {

  if (countInstances(input, "\n") === 2) {
    return 3;
  }
}

export function Vowel(input)
{
    if (countInstances(input, 'a') === 0 && countInstances(input, 'e') === 0 && countInstances(input, 'i') === 0 && countInstances(input, 'o') === 0 && countInstances(input, 'u') === 0 && countInstances(input, 'u') === 0) {
      return false;
    }
    else {
      return true;
    }
}

export function Rule1(input) {
}

