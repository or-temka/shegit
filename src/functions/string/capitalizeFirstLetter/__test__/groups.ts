import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: 'text', expected: 'Text' },
  { id: 2, input: 'hello world', expected: 'Hello world' },
  { id: 3, input: '', expected: '' },
  { id: 4, input: ' ', expected: ' ' },
  { id: 5, input: '  ', expected: '  ' },
  { id: 6, input: ' name', expected: ' Name' },
  { id: 7, input: '  some', expected: '  Some' },
  { id: 8, input: 'First', expected: 'First' },
  { id: 9, input: '1some', expected: '1some' },
  { id: 10, input: 's1ome', expected: 'S1ome' },
  { id: 11, input: ' what is this ', expected: ' What is this ' },
  { id: 12, input: 'русский', expected: 'Русский' },
  { id: 13, input: ' ага', expected: ' Ага' },
  { id: 14, input: '            много пробелов', expected: '            Много пробелов' },
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
