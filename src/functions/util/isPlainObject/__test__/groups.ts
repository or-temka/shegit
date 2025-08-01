import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: 0, expected: false },
  { id: 2, input: 5, expected: false },
  { id: 3, input: -6, expected: false },
  { id: 4, input: 32.4, expected: false },
  { id: 5, input: -5.3, expected: false },
  { id: 6, input: -0, expected: false },
  { id: 7, input: 'some', expected: false },
  { id: 8, input: 'some text', expected: false },
  { id: 9, input: 'text', expected: false },
  { id: 10, input: '0', expected: false },
  { id: 11, input: '', expected: false },
  { id: 12, input: '-0', expected: false },
  { id: 13, input: '-24', expected: false },
  { id: 14, input: '63', expected: false },
  { id: 15, input: false, expected: false },
  { id: 16, input: 'false', expected: false },
  { id: 17, input: true, expected: false },
  { id: 18, input: 'true', expected: false },
  { id: 19, input: new Array(3), expected: false },
  { id: 20, input: [4.3, 5], expected: false },
  { id: 21, input: 'new Array(4)', expected: false },
  { id: 22, input: '[4.3, 5]', expected: false },
  { id: 23, input: {}, expected: true },
  { id: 24, input: '{}', expected: false },
  { id: 25, input: { name: 'Alina' }, expected: true },
  { id: 26, input: 'string', expected: false },
  { id: 27, input: { value: 'string' }, expected: true },
  { id: 28, input: { type: 'string' }, expected: true },
  { id: 29, input: new Set(), expected: false },
  { id: 30, input: new Map(), expected: false },
  { id: 31, input: null, expected: false },
  { id: 32, input: undefined, expected: false },
  { id: 33, input: Infinity, expected: false },
  { id: 34, input: -Infinity, expected: false },
  { id: 35, input: NaN, expected: false },
  { id: 36, input: Symbol(4), expected: false },
  { id: 37, input: Symbol('text'), expected: false },
  // eslint-disable-next-line no-new-wrappers
  { id: 38, input: new String('text'), expected: false },
  // eslint-disable-next-line no-new-object
  { id: 39, input: new Object(3), expected: false },
  { id: 40, input: Object.create(null), expected: true },
  { id: 41, input: Object.create({ name: 'Alina' }), expected: false },
  // eslint-disable-next-line no-new-object
  { id: 42, input: new Object(null), expected: true },
];
