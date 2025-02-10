import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: `rgb(1, 2, 3)`, expected: { r: 1, g: 2, b: 3, a: 1 } },
  { id: 2, input: `rgb(0, 0, 0)`, expected: { r: 0, g: 0, b: 0, a: 1 } },
  {
    id: 3,
    input: `rgb(255, 255, 255)`,
    expected: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    id: 4,
    input: `rgb(53, 84, 2)`,
    expected: { r: 53, g: 84, b: 2, a: 1 },
  },
  {
    id: 5,
    input: `rgb(234, 12)`,
    expected: { r: 234, g: 12, b: 0, a: 1 },
  },
  { id: 6, input: `rgb(85)`, expected: { r: 85, g: 0, b: 0, a: 1 } },
  {
    id: 7,
    input: `rgb(124, 62, 55, 0.5)`,
    expected: { r: 124, g: 62, b: 55, a: 0.5 },
  },
  {
    id: 8,
    input: `rgb(5, 42, 0, 324, 23)`,
    expected: { r: 5, g: 42, b: 0, a: 1 },
  },
  {
    id: 9,
    input: `rgb(63.3, 55.8, 0)`,
    expected: { r: 63, g: 55, b: 0, a: 1 },
  },
  {
    id: 10,
    input: `rgba(0, 255, -5)`,
    expected: { r: 0, g: 255, b: 0, a: 1 },
  },
  {
    id: 11,
    input: `rgb(-86, 266, .0)`,
    expected: { r: 0, g: 255, b: 0, a: 1 },
  },
  {
    id: 12,
    input: () => `rgb(15, -26, +64)`,
    expected: { r: 15, g: 0, b: 64, a: 1 },
  },
  {
    id: 13,
    input: `rgb(--126, 0, +267)`,
    expected: { r: 0, g: 0, b: 255, a: 1 },
  },
  {
    id: 14,
    input: `rgba(0)`,
    expected: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    id: 15,
    input: `rgb(66)`,
    expected: { r: 66, g: 0, b: 0, a: 1 },
  },
  {
    id: 16,
    input: `rgb(+45)`,
    expected: { r: 45, g: 0, b: 0, a: 1 },
  },
  {
    id: 17,
    input: `rgba(-200)`,
    expected: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    id: 18,
    input: `rgba(+500)`,
    expected: { r: 255, g: 0, b: 0, a: 1 },
  },
  {
    id: 19,
    input: `rgb(+212.56, +5.9, +2.1)`,
    expected: { r: 212, g: 5, b: 2, a: 1 },
  },
  {
    id: 20,
    input: () => `rgb(6)`,
    expected: { r: 6, g: 0, b: 0, a: 1 },
  },
  {
    id: 21,
    input: `rgba(55, 45, ++74)`,
    expected: { r: 55, g: 45, b: 74, a: 1 },
  },
  {
    id: 22,
    input: `rgb(0, 23.3, -200)`,
    expected: { r: 0, g: 23, b: 0, a: 1 },
  },
  {
    id: 23,
    input: `rgba(500, 0, 1, 1000)`,
    expected: { r: 255, g: 0, b: 1, a: 1 },
  },
  {
    id: 24,
    input: () => `rgba(55, +45, ++74, -20)`,
    expected: { r: 55, g: 45, b: 74, a: 0 },
  },
  {
    id: 25,
    input: () => `RGB(500, 0, 1, 0)`,
    expected: { r: 255, g: 0, b: 1, a: 0 },
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
