import { Lines } from './../src/haiku.js';
import { Vowel } from './../src/haiku.js';
import { Rule1 } from './../src/haiku.js';

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

describe('Rule1', () => {

  test('it should divide a word into syllables following rule1', () => {
    expect(Rule1('banana')).toBe(3);
    expect(Rule1('children')).toBe(2);
    expect(Rule1('the')).toBe(1);
    expect(Rule1('tape')).toBe(1); //silent e is not counted as a vowel
    expect(Rule1('loud')).toBe(1); //When two vowels carry one sound (diphthong), they cannot be divided
    expect(Rule1('many')).toBe(2); //The letter “y” is not strictly a vowel but behaves like one.
  });
  
});