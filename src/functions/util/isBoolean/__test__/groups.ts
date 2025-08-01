import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: 0, expected: false },
  { id: 2, input: 5, expected: false },
  { id: 3, input: -3, expected: false },
  { id: 4, input: 85.4, expected: false },
  { id: 5, input: -63.3, expected: false },
  { id: 6, input: 0.3, expected: false },
  { id: 7, input: 0.0, expected: false },
  { id: 8, input: -0, expected: false },
  { id: 9, input: -0.0, expected: false },
  { id: 10, input: -0.9, expected: false },
  { id: 11, input: '2', expected: false },
  { id: 12, input: '+5', expected: false },
  { id: 13, input: '-8', expected: false },
  { id: 14, input: '0', expected: false },
  { id: 15, input: 'false', expected: false },
  { id: 16, input: false, expected: true },
  { id: 17, input: true, expected: true },
  { id: 18, input: 'true', expected: false },
  { id: 19, input: () => {}, expected: false },
  { id: 20, input: () => true, expected: false },
  { id: 21, input: 1, expected: false },
  { id: 22, input: 'name', expected: false },
  { id: 23, input: 'some value', expected: false },
  { id: 24, input: { value: true }, expected: false },
  { id: 25, input: { key: 1, name: 'Alina' }, expected: false },
  { id: 26, input: [1, true], expected: false },
  { id: 27, input: [true], expected: false },
  { id: 28, input: [false], expected: false },
  { id: 29, input: { value: false }, expected: false },
  { id: 30, input: new Map(), expected: false },
  { id: 31, input: new Set(), expected: false },
  // eslint-disable-next-line no-new-wrappers
  { id: 32, input: new String('ffsd'), expected: false },
  // eslint-disable-next-line no-new-object
  { id: 33, input: new Object(), expected: false },
  { id: 34, input: Symbol(4), expected: false },
  { id: 35, input: Symbol('text'), expected: false },
  { id: 36, input: null, expected: false },
  { id: 37, input: undefined, expected: false },
  { id: 38, input: NaN, expected: false },
  { id: 39, input: new (class Main {})(), expected: false },
  { id: 39, input: class Main {}, expected: false },
  { id: 40, input: () => () => {}, expected: false },
  { id: 41, input: () => () => () => false, expected: false },
  // eslint-disable-next-line no-new-wrappers
  { id: 42, input: new Boolean(true), expected: false },
  // eslint-disable-next-line no-new-wrappers
  { id: 43, input: new Boolean(false), expected: false },
  { id: 44, input: Boolean(0), expected: true },
  { id: 45, input: Boolean(1), expected: true },
  { id: 46, input: 1 === 1, expected: true },
  // @ts-ignore
  { id: 47, input: 2 !== 5, expected: true },
];
