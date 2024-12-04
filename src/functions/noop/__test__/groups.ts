import { CaseElements } from './types';

export const cases: CaseElements = [
  { id: 1, input: 123, expected: undefined },
  { id: 2, input: 'some', expected: undefined },
  { id: 3, input: () => {}, expected: undefined },
  { id: 4, input: { r: 53, g: 24, b: 2 }, expected: undefined },
  { id: 5, input: new Date(), expected: undefined },
  { id: 6, input: [1, () => {}, '24', false, true, { name: 'John' }], expected: undefined },
  { id: 7, input: () => 24, expected: undefined },
  { id: 8, input: new Set(), expected: undefined },
  { id: 9, input: new Map(), expected: undefined },
  { id: 10, input: null, expected: undefined },
  { id: 11, input: undefined, expected: undefined },
  { id: 12, input: NaN, expected: undefined },
  { id: 13, input: -100, expected: undefined },
  { id: 14, input: 0, expected: undefined },
  { id: 15, input: false, expected: undefined },
  { id: 16, input: true, expected: undefined },
  { id: 17, input: Symbol(4), expected: undefined },
];
