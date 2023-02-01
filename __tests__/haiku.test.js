import { Lines } from './../src/haiku.js';
import { Vowel } from './../src/haiku.js';
import { Rule1 } from './../src/haiku.js';
import { BreakIntoLines } from './../src/haiku.js';
import { CountSyllables } from './../src/haiku.js';
import { ifHaiku } from './../src/haiku.js';


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
    expect(Rule1('rabbit')).toBe(2);
    expect(Rule1('diaeresis')).toBe(4);
    expect(Rule1('diet')).toBe(2);
    expect(Rule1('able')).toBe(2);
    expect(Rule1('plae')).toBe(1);
    expect(Rule1('bee')).toBe(1);
    expect(Rule1('yellow')).toBe(2);
    expect(Rule1('I')).toBe(1);
    expect(Rule1('tape')).toBe(1); //silent e is not counted as a vowel
    expect(Rule1('loud')).toBe(1); //When two vowels carry one sound (diphthong), they cannot be divided
    expect(Rule1('many')).toBe(2); //The letter “y” is not strictly a vowel but behaves like one.
  });

});

describe('BreakIntoLines', () => {

  test('it should return three separate lines', () => {
    expect(BreakIntoLines('A\nB\nC')).toEqual(['A', 'B', 'C']);
});

});

describe('CountSyllables', () => {
  test('it should count how many syllables are in one line', () => {
    expect(CountSyllables('My name is Molly')).toEqual(5);
    expect(CountSyllables('I like to eat spaghetti')).toEqual(7);
});

});

describe('ifHaiku', () => {
  test('it should return if the entry is a Haiku', () => {

    expect(ifHaiku('My name is Molly\nI like to eat spaghetti\nPlease feed me some now')).toBe(true);
    expect(ifHaiku('My name is Molly\nI love to eat\nThank you')).toBe(false);
    
});

});