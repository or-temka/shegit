import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: 'text', expected: 'text' },
  { id: 2, input: 'hello world', expected: 'helloWorld' },
  { id: 3, input: 'text text', expected: 'textText' },
  { id: 4, input: 'some-text', expected: 'someText' },
  { id: 5, input: 'some_variable', expected: 'someVariable' },
  { id: 6, input: 'Hello World', expected: 'helloWorld' },
  { id: 7, input: 'Some_Variable', expected: 'someVariable' },
  { id: 8, input: 'I_AM_CONSTANT', expected: 'iAmConstant' },
  { id: 9, input: 'CONST', expected: 'const' },
  { id: 10, input: 'someText', expected: 'someText' },
];

export const invalidCases: CaseElements = [
  { id: 1, input: 44, expected: undefined },
  { id: 2, input: -10, expected: undefined },
  { id: 3, input: { obj: true }, expected: undefined },
  { id: 4, input: [1, 2], expected: undefined },
  { id: 5, input: () => 4, expected: undefined },
  { id: 6, input: new Date(), expected: undefined },
  { id: 7, input: new Set(), expected: undefined },
  { id: 8, input: new Map(), expected: undefined },
  { id: 9, input: Symbol(100), expected: undefined },
  { id: 10, input: true, expected: undefined },
  { id: 11, input: false, expected: undefined },
  { id: 12, input: undefined, expected: undefined },
  { id: 13, input: null, expected: undefined },
  { id: 14, input: NaN, expected: undefined },
  { id: 15, input: [() => 'some', { who: 'I`m' }, 55, 'yes', true], expected: undefined },
];
