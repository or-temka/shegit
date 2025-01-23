import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: `hsv(1, 2, 3)`, expected: { h: 1, s: 2, v: 3 } },
  { id: 2, input: `hsv(0, 0, 0)`, expected: { h: 0, s: 0, v: 0 } },
  {
    id: 3,
    input: `hsv(255, 255%, 255)`,
    expected: { h: 255, s: 100, v: 100 },
  },
  {
    id: 4,
    input: `hsv(53, 84%, 2%)`,
    expected: { h: 53, s: 84, v: 2 },
  },
  {
    id: 5,
    input: `hsv(234, 12)`,
    expected: { h: 234, s: 12, v: 0 },
  },
  { id: 6, input: `hsv(85)`, expected: { h: 85, s: 0, v: 0 } },
  {
    id: 7,
    input: `hsv(360, 100, 100)`,
    expected: { h: 360, s: 100, v: 100 },
  },
  {
    id: 8,
    input: `5 42 0 324 32`,
    expected: { h: 5, s: 42, v: 0 },
  },
  {
    id: 9,
    input: `63.3, 55.8, 0`,
    expected: { h: 63, s: 55, v: 0 },
  },
  {
    id: 10,
    input: `0, 255, -5`,
    expected: { h: 0, s: 100, v: 0 },
  },
  {
    id: 11,
    input: `(-86, 266, .0)`,
    expected: { h: 0, s: 100, v: 0 },
  },
  {
    id: 12,
    input: () => `(15, -26%, +64%)`,
    expected: { h: 15, s: 0, v: 64 },
  },
  {
    id: 13,
    input: `(--126, 0, +267)`,
    expected: { h: 0, s: 0, v: 100 },
  },
  {
    id: 14,
    input: `hsv(1000%, 1000%, 1000%)`,
    expected: { h: 360, s: 100, v: 100 },
  },
  {
    id: 15,
    input: `hsv(66)`,
    expected: { h: 66, s: 0, v: 0 },
  },
  {
    id: 16,
    input: `(+45)`,
    expected: { h: 45, s: 0, v: 0 },
  },
  {
    id: 17,
    input: `hsv(-200)`,
    expected: { h: 0, s: 0, v: 0 },
  },
  {
    id: 18,
    input: `HSV(+500)`,
    expected: { h: 360, s: 0, v: 0 },
  },
  {
    id: 19,
    input: `hsv(+212.56%, +5.9%, +2.1%)`,
    expected: { h: 212, s: 5, v: 2 },
  },
  {
    id: 20,
    input: () => `HSV(6)`,
    expected: { h: 6, s: 0, v: 0 },
  },
  {
    id: 21,
    input: `HSV(55, 45, ++74)`,
    expected: { h: 55, s: 45, v: 74 },
  },
  {
    id: 22,
    input: `hsv(0, 23.3, -200)`,
    expected: { h: 0, s: 23, v: 0 },
  },
  {
    id: 23,
    input: `HSV(500%, 0%, 1%, 1000%)`,
    expected: { h: 360, s: 0, v: 1 },
  },
  {
    id: 24,
    input: () => `(55, +45, ++74, -20)`,
    expected: { h: 55, s: 45, v: 74 },
  },
  {
    id: 25,
    input: () => `HSV(500%, 0, 1%, 0)`,
    expected: { h: 360, s: 0, v: 1 },
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
