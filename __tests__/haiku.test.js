import { Haiku } from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Haiku();
  });

  test('it should identify that the poem has three lines', () => {
    expect(haiku.Lines('A\nB\nC')).toBe(3);
  });


  test('it should identify a vowel in a word', () => {
    expect(haiku.Vowel('cat')).toBe(true);
    expect(haiku.Vowel('rtp')).toBe(false);
  });


  test('it should divide a word into syllables following rule1', () => {
    expect(haiku.Rule1('banana')).toBe(3);
    expect(haiku.Rule1('children')).toBe(2);
    expect(haiku.Rule1('the')).toBe(1);
    expect(haiku.Rule1('rabbit')).toBe(2);
    expect(haiku.Rule1('diaeresis')).toBe(4);
    expect(haiku.Rule1('diet')).toBe(2);
    expect(haiku.Rule1('able')).toBe(2);
    expect(haiku.Rule1('plae')).toBe(1);
    expect(haiku.Rule1('bee')).toBe(1);
    expect(haiku.Rule1('yellow')).toBe(2);
    expect(haiku.Rule1('I')).toBe(1);
    expect(haiku.Rule1('tape')).toBe(1); //silent e is not counted as a vowel
    expect(haiku.Rule1('loud')).toBe(1); //When two vowels carry one sound (diphthong), they cannot be divided
    expect(haiku.Rule1('many')).toBe(2); //The letter “y” is not strictly a vowel but behaves like one.
  });

  test('it should return three separate lines', () => {
    expect(haiku.BreakIntoLines('A\nB\nC')).toEqual(['A', 'B', 'C']);
  });

  test('it should count how many syllables are in one line', () => {
    expect(haiku.CountSyllables('My name is Molly')).toEqual(5);
    expect(haiku.CountSyllables('I like to eat spaghetti')).toEqual(7);
  });

  test('it should return if the entry is a Haiku', () => {

    expect(haiku.ifHaiku('My name is Molly\nI like to eat spaghetti\nPlease feed me some now')).toBe(true);
    expect(haiku.ifHaiku('My name is Molly\nI love to eat\nThank you')).toBe(false);
    expect(haiku.ifHaiku('My name is Molly\nI love to eat')).toBe(false);

  });

});