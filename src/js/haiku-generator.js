let fiveSyllables = ['Roses are so red', 'Delightful display', 'To the suns glory', 'The west wind whispered', 'Her eyes, Primroses', 'When you die you die', 'David has children', 'Water once again', 'Snow of yesterday', 'Was it but a dream?', 'Elliot also', 'And Olivia'];
let sevenSyllables = ['If you read a lot you learn', 'I like to code every day', 'In the morning I get up', 'Snowdrops bow their pure white heads', 'And touched the eyelids of spring', 'That fell like cherry blossoms', 'Swaying in the evening sun', 'Named Mina and Aurora', 'by Asia Molly David'];


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function haikuGenerator() {
  let randomHaiku = [];
  randomHaiku.push(fiveSyllables[getRandomInt(0, fiveSyllables.length - 1)]);
  randomHaiku.push(sevenSyllables[getRandomInt(0, sevenSyllables.length - 1)]);
  randomHaiku.push(fiveSyllables[getRandomInt(0, fiveSyllables.length - 1)]);
  randomHaiku = Array.from(randomHaiku);
  return randomHaiku;
}

