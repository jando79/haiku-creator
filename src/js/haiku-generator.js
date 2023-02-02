let fiveSyllables = ['Roses are so red', 'Delightful display', 'To the suns glory', 'Her eyes, Primroses', 'When you die you die', 'David has children', 'Water once again', 'Snow of yesterday', 'Was it but a dream?', 'Elliot also', 'And Olivia'];
let sevenSyllables = ['In the morning I get up', 'Snowdrops bow their pure white heads', 'That fell like cherry blossoms', 'Woven in the heavy mist', 'A frog jumps into the pond', 'The white flag of surrender', 'Along a sidewalk café', 'Turning to sun and to seed', 'One blue egg all summer long', 'Fabulous floral worlds bloom', 'In the backyard swimming pool'];


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
  return randomHaiku;
}

