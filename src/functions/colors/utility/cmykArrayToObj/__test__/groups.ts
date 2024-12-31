import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: [1, 2, 3, 4], expected: { c: 1, m: 2, y: 3, k: 4 } },
  { id: 2, input: [0, 0, 0, 0], expected: { c: 0, m: 0, y: 0, k: 0 } },
  {
    id: 3,
    input: [255, 255, 255, 255],
    expected: { c: 100, m: 100, y: 100, k: 100 },
  },
  {
    id: 4,
    input: [53, 84, 2, 63],
    expected: { c: 53, m: 84, y: 2, k: 63 },
  },
  {
    id: 5,
    input: [234, 12],
    expected: { c: 100, m: 12, y: 0, k: 100 },
  },
  { id: 6, input: [85], expected: { c: 85, m: 0, y: 0, k: 100 } },
  {
    id: 7,
    input: [124, 62, 55, 4.5],
    expected: { c: 100, m: 62, y: 55, k: 4 },
  },
  {
    id: 8,
    input: [5, 42, 0, 342, 23, 53, 234],
    expected: { c: 5, m: 42, y: 0, k: 100 },
  },
  {
    id: 9,
    input: [63.3, 55.8, 0],
    expected: { c: 63, m: 55, y: 0, k: 100 },
  },
  {
    id: 10,
    input: ['0', '255', -5],
    expected: { c: 0, m: 100, y: 0, k: 100 },
  },
  {
    id: 11,
    input: ['-86', 266, '.0'],
    expected: { c: 0, m: 100, y: 0, k: 100 },
  },
  {
    id: 12,
    input: () => [15, -26, '+64'],
    expected: { c: 15, m: 0, y: 64, k: 100 },
  },
  {
    id: 13,
    input: ['--126', false, '+267', true],
    expected: { c: 0, m: 0, y: 100, k: 1 },
  },
  {
    id: 14,
    input: [0],
    expected: { c: 0, m: 0, y: 0, k: 100 },
  },
  {
    id: 15,
    input: [66],
    expected: { c: 66, m: 0, y: 0, k: 100 },
  },
  {
    id: 16,
    input: ['+45'],
    expected: { c: 45, m: 0, y: 0, k: 100 },
  },
  {
    id: 17,
    input: ['-200'],
    expected: { c: 0, m: 0, y: 0, k: 100 },
  },
  {
    id: 18,
    input: ['+500'],
    expected: { c: 100, m: 0, y: 0, k: 100 },
  },
  {
    id: 19,
    input: ['+212.56', '+5.9', '+2.1', '+4.9'],
    expected: { c: 100, m: 5, y: 2, k: 4 },
  },
  {
    id: 20,
    input: () => [6],
    expected: { c: 6, m: 0, y: 0, k: 100 },
  },
  {
    id: 21,
    input: [() => 55, () => '+45', () => '++74', () => 96],
    expected: { c: 55, m: 45, y: 0, k: 96 },
  },
  {
    id: 22,
    input: [() => 0, () => 23.3, () => -200, () => 99.9],
    expected: { c: 0, m: 23, y: 0, k: 99 },
  },
  {
    id: 23,
    input: [() => 500, () => false, () => true, () => true],
    expected: { c: 100, m: 0, y: 1, k: 1 },
  },
  {
    id: 24,
    input: () => [() => 55, () => '+45', () => '++74', 521],
    expected: { c: 55, m: 45, y: 0, k: 100 },
  },
  {
    id: 25,
    input: () => [() => 0, () => 23.3, () => -200, () => -3],
    expected: { c: 0, m: 23, y: 0, k: 0 },
  },
  {
    id: 26,
    input: () => [() => 500, () => false, () => true, () => false],
    expected: { c: 100, m: 0, y: 1, k: 0 },
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: 5345, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: '5876', expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 11, input: '+89', expected: DEFAULT_EXPECTED_VALUE },
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
    input: ['John', '++5', '--10', '-4-'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: [() => 'John', () => ({}), () => {}, {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: [{ name: 'John' }, {}, [], {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 25,
    input: [[34, 24, 'Aug', () => {}], [[], [2]], [[]], { f: {} }],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 26,
    input: [undefined, null, NaN, {}],
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
    input: [() => undefined, () => null, () => NaN, NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 31,
    input: [new Map(), new Set(), new Error(), new Map()],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 32,
    input: ['one', 'два', 'tri', 'four'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 33,
    input: () => ['John', '++5', '--10', 'chetiri'],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 34,
    input: () => [() => 'John', () => ({}), () => {}, undefined],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 35,
    input: () => [{ name: 'John' }, {}, [], () => {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 36,
    input: () => [[34, 24, 'Aug', () => {}], [[], [2]], [[]], () => {}],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 37,
    input: () => [undefined, null, NaN, () => undefined],
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
    input: () => [() => undefined, () => null, () => NaN, () => NaN],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 42,
    input: () => [new Map(), new Set(), new Error(), new Set()],
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 43,
    input: () => ['one', 'два', 'tri', 'che'],
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
