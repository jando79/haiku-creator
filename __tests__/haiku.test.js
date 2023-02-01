import { Lines } from './../src/haiku.js';
import { Vowel } from './../src/haiku.js';

describe('Lines', () => {

  test('it should identify that the poem has three lines', () => {
    expect(Lines('A\nB\nC')).toBe(3);
  });
  
});

describe('Vowel', () => {

  test('it should identify a vowel in a word', () => {
    expect(Vowel('cat')).toBe(true);
    expect(Vowel('rtp')).toBe(false);
  });
  
});