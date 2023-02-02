export class Haiku {

  constructor(input) {
    this.input = input;
  }

  countInstances(string, word){
    return (string).split(word).length - 1;
  }

  Lines(input){
    if (this.countInstances(input, "\n") === 2) {
      return 3;
    }
  }

  Vowel(input) {
    if (this.countInstances(input, 'a') === 0 && this.countInstances(input, 'e') === 0 && this.countInstances(input, 'i') === 0 && this.countInstances(input, 'o') === 0 && this.countInstances(input, 'u') === 0 && this.countInstances(input, 'u') === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  Rule1(input) {
    let array = input.split("");
    let vowelCount = 0;
    const allVowels = ["a", "o", "e", "i", "u", "y", "A", "O", "E", "I", "U", "Y"]
    allVowels.forEach((element) => {
      if (this.countInstances(input, element) > 0) {
        vowelCount = vowelCount + this.countInstances(input, element);
      }
    });

    let diphCount = 0;
    const diphVowels = ["oo", "ui", "ea", "ay", "ae", "oi", "ou", "oa", "ee", "ai", "eau", "oy", "ey", "ye"];
    diphVowels.forEach((element) => {
      if (this.countInstances(input, element) > 0) {
        diphCount = diphCount + this.countInstances(input, element);
      }
    })

    if (array[array.length - 1] === 'e' && vowelCount > 1 && array[array.length - 2] !== 'l' && array[array.length - 2] !== 'e' && array[array.length - 2] !== 'a') {
      return vowelCount - diphCount - 1;
    }
    else {
      return vowelCount - diphCount;
    }
  }

  BreakIntoLines(input) {
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

  CountSyllables(input) {
    let words = input.split(" ");
    let totalCount = 0;
    words.forEach((element) => {
      totalCount = totalCount + this.Rule1(element);
    })
    return totalCount;
  }

  ifHaiku(input) {
    if (this.Lines(input) === 3) {
      let finalArray = [];
      let newArray = this.BreakIntoLines(input);
      newArray.forEach((element) => {
        finalArray.push(this.CountSyllables(element));
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

}