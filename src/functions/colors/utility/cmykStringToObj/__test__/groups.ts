import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: `cmyk(1%, 2%, 3%, 4%)`, expected: { c: 1, m: 2, y: 3, k: 4 } },
  { id: 2, input: `cmyk(0%, 0%, 0%, 0%)`, expected: { c: 0, m: 0, y: 0, k: 0 } },
  {
    id: 3,
    input: `cmyk(255%, 255%, 255%, 255%)`,
    expected: { c: 100, m: 100, y: 100, k: 100 },
  },
  {
    id: 4,
    input: `cmyk(53%, 84%, 2%, 64%)`,
    expected: { c: 53, m: 84, y: 2, k: 64 },
  },
  {
    id: 5,
    input: `cmyk(234%, 12%, 64%)`,
    expected: { c: 100, m: 12, y: 64, k: 0 },
  },
  { id: 6, input: `cmyk(85%, 8%)`, expected: { c: 85, m: 8, y: 0, k: 0 } },
  {
    id: 7,
    input: `cmyk(124%)`,
    expected: { c: 100, m: 0, y: 0, k: 0 },
  },
  {
    id: 8,
    input: `cmyk(5, 42.8, 0, 324, 23, 75)`,
    expected: { c: 5, m: 42, y: 0, k: 100 },
  },
  {
    id: 9,
    input: `cmyk(63.3, 55.8, 0, 35.9%)`,
    expected: { c: 63, m: 55, y: 0, k: 35 },
  },
  {
    id: 10,
    input: `cmyka(0%, 255%, -5%, -200%)`,
    expected: { c: 0, m: 100, y: 0, k: 0 },
  },
  {
    id: 11,
    input: `cmyk(-86, 266, .0, 1000)`,
    expected: { c: 0, m: 100, y: 0, k: 100 },
  },
  {
    id: 12,
    input: () => `cmyk(15%, -26%, +64%, +689%)`,
    expected: { c: 15, m: 0, y: 64, k: 100 },
  },
  {
    id: 13,
    input: `cmyk(--126%, 0%, +267%, --659%)`,
    expected: { c: 0, m: 0, y: 100, k: 0 },
  },
  {
    id: 14,
    input: `cmyka(0%)`,
    expected: { c: 0, m: 0, y: 0, k: 0 },
  },
  {
    id: 15,
    input: `cmyk(66%)`,
    expected: { c: 66, m: 0, y: 0, k: 0 },
  },
  {
    id: 16,
    input: `cmyk(+45%)`,
    expected: { c: 45, m: 0, y: 0, k: 0 },
  },
  {
    id: 17,
    input: `cmyka(-200)`,
    expected: { c: 0, m: 0, y: 0, k: 0 },
  },
  {
    id: 18,
    input: `cmyka(+500)`,
    expected: { c: 100, m: 0, y: 0, k: 0 },
  },
  {
    id: 19,
    input: `cmyk(+212.56%, +5.9, +2.1%, +67.99)`,
    expected: { c: 100, m: 5, y: 2, k: 67 },
  },
  {
    id: 20,
    input: () => `cmyk(6, 6, 6%, 6%)`,
    expected: { c: 6, m: 6, y: 6, k: 6 },
  },
  {
    id: 21,
    input: `(55%, 45, ++74, ++2%)`,
    expected: { c: 55, m: 45, y: 74, k: 2 },
  },
  {
    id: 22,
    input: `cmyk(0, 23.3%, -200, -1000%)`,
    expected: { c: 0, m: 23, y: 0, k: 0 },
  },
  {
    id: 23,
    input: `500%, 0%, 1%, 1000%, 1%`,
    expected: { c: 100, m: 0, y: 1, k: 100 },
  },
  {
    id: 24,
    input: () => `55%, +45%, ++74%, -20%, ++56.5%`,
    expected: { c: 55, m: 45, y: 74, k: 0 },
  },
  {
    id: 25,
    input: () => `(500%, 0%, 1%, 0%)`,
    expected: { c: 100, m: 0, y: 1, k: 0 },
  },
  {
    id: 26,
    input: () => `cmyk(1, 1%, 1, 1%)`,
    expected: { c: 1, m: 1, y: 1, k: 1 },
  },
  {
    id: 27,
    input: () => `cmyk(2%, 2, 2%, 2%)`,
    expected: { c: 2, m: 2, y: 2, k: 2 },
  },
  {
    id: 28,
    input: () => `cmyk(3, 3%, 3%, 3)`,
    expected: { c: 3, m: 3, y: 3, k: 3 },
  },
  {
    id: 29,
    input: () => `cmyk(4, 4%, 4%, 4%)`,
    expected: { c: 4, m: 4, y: 4, k: 4 },
  },
  {
    id: 30,
    input: () => `cmyk(5%, 5, 5%, 5%)`,
    expected: { c: 5, m: 5, y: 5, k: 5 },
  },
  {
    id: 31,
    input: () => `cmyk(6%, 6, 6%, 6)`,
    expected: { c: 6, m: 6, y: 6, k: 6 },
  },
  {
    id: 32,
    input: () => `cmyk(7%, 7%, 7%, 7)`,
    expected: { c: 7, m: 7, y: 7, k: 7 },
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: 5345, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: 22, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 3,
    input: { name: 'John' },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 4, input: [], expected: DEFAULT_EXPECTED_VALUE },
  { id: 5, input: () => 4, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 6,
    input: () => ({
      name: 'John',
    }),
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 7, input: true, expected: DEFAULT_EXPECTED_VALUE },
  { id: 8, input: 35.345, expected: DEFAULT_EXPECTED_VALUE },
  { id: 9, input: 0, expected: DEFAULT_EXPECTED_VALUE },
  { id: 10, input: false, expected: DEFAULT_EXPECTED_VALUE },
  { id: 11, input: 5, expected: DEFAULT_EXPECTED_VALUE },
  { id: 12, input: 14, expected: DEFAULT_EXPECTED_VALUE },
  { id: 13, input: -1000, expected: DEFAULT_EXPECTED_VALUE },
  { id: 14, input: '-34', expected: DEFAULT_EXPECTED_VALUE },
  { id: 15, input: 'John', expected: DEFAULT_EXPECTED_VALUE },
  { id: 16, input: 3.3333, expected: DEFAULT_EXPECTED_VALUE },
  { id: 17, input: () => 4, expected: DEFAULT_EXPECTED_VALUE },
  { id: 18, input: new Set(), expected: DEFAULT_EXPECTED_VALUE },
  { id: 19, input: new Map(), expected: DEFAULT_EXPECTED_VALUE },
  { id: 20, input: Symbol(4), expected: DEFAULT_EXPECTED_VALUE },
  { id: 21, input: new Error(), expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 22,
    input: ['John', '++5', '--10'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: [() => 'John', () => ({}), () => {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: [{ name: 'John' }, {}, []],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 25,
    input: [[34, 24, 'Aug', () => {}], [[], [2]], [[]]],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 26,
    input: [undefined, null, NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 27, input: undefined, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 28,
    input: () => () => () => {},
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 29, input: NaN, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 30,
    input: [() => undefined, () => null, () => NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 31,
    input: [new Map(), new Set(), new Error()],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 32,
    input: ['one', 'два', 'tri'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 33,
    input: () => ['John', '++5', '--10'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 34,
    input: () => [() => 'John', () => ({}), () => {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 35,
    input: () => [{ name: 'John' }, {}, []],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 36,
    input: () => [[34, 24, 'Aug', () => {}], [[], [2]], [[]]],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 37,
    input: () => [undefined, null, NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 38,
    input: () => 88.2,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 39,
    input: () => () => {},
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 40, input: () => NaN, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 41,
    input: () => [() => undefined, () => null, () => NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 42,
    input: () => [new Map(), new Set(), new Error()],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 43,
    input: () => ['one', 'два', 'tri'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 44,
    input: () => 0,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 45,
    input: () => 44,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 46,
    input: () => 192.2,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 47,
    input: () => 500,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 48,
    input: () => -1000,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 49,
    input: () => 404,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 50,
    input: () => false,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 51,
    input: () => true,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 52,
    input: () => ({ name: 'John' }),
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 53,
    input: () => 'John',
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 54,
    input: null,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 55,
    input: () => null,
    expected: DEFAULT_EXPECTED_VALUE,
  },
];
