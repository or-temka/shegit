import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { r: 0, g: 0, b: 0 }, expected: { c: 0, m: 0, y: 0, k: 100 } },
  { id: 2, input: { r: 1, g: 2, b: 3 }, expected: { c: 67, m: 33, y: 0, k: 99 } },
  {
    id: 3,
    input: { r: 255, g: 255, b: 255 },
    expected: { c: 0, m: 0, y: 0, k: 0 },
  },
  { id: 4, input: { r: 64, g: 21, b: 99 }, expected: { c: 35, m: 79, y: 0, k: 61 } },
  { id: 5, input: { r: 234, g: 12 }, expected: { c: 0, m: 95, y: 100, k: 8 } },
  { id: 6, input: { r: 18, b: 227 }, expected: { c: 92, m: 100, y: 0, k: 11 } },
  { id: 7, input: { g: 230, b: 11 }, expected: { c: 100, m: 0, y: 95, k: 10 } },
  { id: 8, input: { r: 67 }, expected: { c: 0, m: 100, y: 100, k: 74 } },
  { id: 9, input: { g: 245 }, expected: { c: 100, m: 0, y: 100, k: 4 } },
  { id: 10, input: { b: 199 }, expected: { c: 100, m: 100, y: 0, k: 22 } },
  {
    id: 11,
    input: { b: 17, g: 88, r: 190 },
    expected: { c: 0, m: 54, y: 91, k: 25 },
  },
  { id: 12, input: { r: 0, g: 0, b: 0, a: 0 }, expected: { c: 0, m: 0, y: 0, k: 100 } },
  { id: 13, input: { r: 0, g: 0, b: 0, a: 1 }, expected: { c: 0, m: 0, y: 0, k: 100 } },
  {
    id: 14,
    input: { r: 18, g: 63, b: 22, a: 0 },
    expected: { c: 71, m: 0, y: 65, k: 75 },
  },
  {
    id: 15,
    input: { r: 244, g: 233, b: 221, a: 1 },
    expected: { c: 0, m: 5, y: 9, k: 4 },
  },
  {
    id: 16,
    input: { a: 1, r: 22, g: 22, b: 22 },
    expected: { c: 0, m: 0, y: 0, k: 91 },
  },
  {
    id: 17,
    input: { r: 76, g: 33, b: 88, a: 0.5 },
    expected: { c: 14, m: 63, y: 0, k: 65 },
  },
  {
    id: 18,
    input: { r: 12, g: 99, b: 44, a: 12 },
    expected: { c: 88, m: 0, y: 56, k: 61 },
  },
  {
    id: 19,
    input: { r: 12.5, g: 55.2, b: 249.9 },
    expected: { c: 95, m: 78, y: 0, k: 2 },
  },
  {
    id: 20,
    input: { r: 251.9, g: 158, b: 44.1 },
    expected: { c: 0, m: 37, y: 82, k: 2 },
  },
  {
    id: 21,
    input: { r: '0', g: '+20', b: '95' },
    expected: { c: 100, m: 79, y: 0, k: 63 },
  },
  {
    id: 22,
    input: { r: -100, g: 290, b: 24 },
    expected: { c: 100, m: 0, y: 91, k: 0 },
  },
  {
    id: 23,
    input: { r: '500', g: -699, b: '-700' },
    expected: { c: 0, m: 100, y: 100, k: 0 },
  },
  {
    id: 24,
    input: { r: '34.3', g: '+59.8', b: '-96.5' },
    expected: { c: 42, m: 0, y: 100, k: 77 },
  },
  { id: 25, input: { r: '254' }, expected: { c: 0, m: 100, y: 100, k: 0 } },
  {
    id: 26,
    input: () => ({ r: 12, g: 88, b: -100 }),
    expected: { c: 86, m: 0, y: 100, k: 65 },
  },
  {
    id: 27,
    input: () => ({ r: -500, g: 500, b: '58.8' }),
    expected: { c: 100, m: 0, y: 77, k: 0 },
  },
  {
    id: 29,
    input: () => ({ r: () => 12, g: 67, b: -0 }),
    expected: { c: 82, m: 0, y: 100, k: 74 },
  },
  {
    id: 28,
    input: () => ({ r: '--24', g: () => '+86', b: 0 }),
    expected: { c: 100, m: 0, y: 100, k: 66 },
  },
  {
    id: 30,
    input: () => ({ r: '+++2', g: '++3', b: () => '-200' }),
    expected: { c: 0, m: 0, y: 0, k: 100 },
  },
  {
    id: 31,
    input: () => ({ r: () => -1, g: () => +'5', b: () => 3 }),
    expected: { c: 100, m: 0, y: 40, k: 98 },
  },
  {
    id: 32,
    input: () => ({ r: () => false, g: () => true, b: () => 255 }),
    expected: { c: 100, m: 100, y: 0, k: 0 },
  },
  {
    id: 33,
    input: () => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }),
    expected: { c: 82, m: 0, y: 100, k: 0 },
  },
  {
    id: 34,
    input: () => ({ r: true, g: false, b: false }),
    expected: { c: 0, m: 100, y: 100, k: 100 },
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: 0, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: 44, expected: DEFAULT_EXPECTED_VALUE },
  { id: 3, input: '+89', expected: DEFAULT_EXPECTED_VALUE },
  { id: 4, input: 500, expected: DEFAULT_EXPECTED_VALUE },
  { id: 5, input: -1000, expected: DEFAULT_EXPECTED_VALUE },
  { id: 6, input: '-34', expected: DEFAULT_EXPECTED_VALUE },
  { id: 7, input: false, expected: DEFAULT_EXPECTED_VALUE },
  { id: 8, input: true, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 9,
    input: { name: 'John' },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 10, input: 'John', expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 11,
    input: 3.3333,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 12, input: () => 3, expected: DEFAULT_EXPECTED_VALUE },
  { id: 13, input: new Set(), expected: DEFAULT_EXPECTED_VALUE },
  { id: 14, input: new Map(), expected: DEFAULT_EXPECTED_VALUE },
  { id: 15, input: Symbol(4), expected: DEFAULT_EXPECTED_VALUE },
  { id: 16, input: new Error(), expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 17,
    input: { r: 'John', g: '++5', b: '--10' },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 18,
    input: { r: () => 'John', g: () => ({}), b: () => {} },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 19,
    input: { r: { name: 'John' }, g: {}, b: [] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 20,
    input: { r: [34, 24, 'Aug', () => {}], g: [[], [2]], b: [[]] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 21,
    input: { r: undefined, g: null, b: NaN },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 22,
    input: { r: () => undefined, g: () => null, b: () => NaN },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: { r: new Map(), g: new Set(), b: new Error() },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: { r: 'one', g: 'два', b: 'tri' },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 25, input: () => 0, expected: DEFAULT_EXPECTED_VALUE },
  { id: 26, input: () => 44, expected: DEFAULT_EXPECTED_VALUE },
  { id: 27, input: () => '+89', expected: DEFAULT_EXPECTED_VALUE },
  { id: 28, input: () => 500, expected: DEFAULT_EXPECTED_VALUE },
  { id: 29, input: () => -1000, expected: DEFAULT_EXPECTED_VALUE },
  { id: 30, input: () => '-34', expected: DEFAULT_EXPECTED_VALUE },
  { id: 31, input: () => false, expected: DEFAULT_EXPECTED_VALUE },
  { id: 32, input: () => true, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 33,
    input: () => ({ name: 'John' }),
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 34, input: () => 'John', expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 35,
    input: null,
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 36,
    input: () => null,
    expected: DEFAULT_EXPECTED_VALUE,
  },
];
