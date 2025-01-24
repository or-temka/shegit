import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { r: 0, g: 0, b: 0 }, expected: { h: 0, s: 0, v: 0 } },
  { id: 2, input: { r: 1, g: 2, b: 3 }, expected: { h: 210, s: 67, v: 1 } },
  {
    id: 3,
    input: { r: 255, g: 255, b: 255 },
    expected: { h: 0, s: 0, v: 100 },
  },
  { id: 4, input: { r: 64, g: 21, b: 99 }, expected: { h: 273, s: 79, v: 39 } },
  { id: 5, input: { r: 234, g: 12 }, expected: { h: 3, s: 100, v: 92 } },
  { id: 6, input: { r: 18, b: 227 }, expected: { h: 245, s: 100, v: 89 } },
  { id: 7, input: { g: 230, b: 11 }, expected: { h: 123, s: 100, v: 90 } },
  { id: 8, input: { r: 67 }, expected: { h: 0, s: 100, v: 26 } },
  { id: 9, input: { g: 245 }, expected: { h: 120, s: 100, v: 96 } },
  { id: 10, input: { b: 199 }, expected: { h: 240, s: 100, v: 78 } },
  {
    id: 11,
    input: { b: 17, g: 88, r: 190 },
    expected: { h: 25, s: 91, v: 75 },
  },
  { id: 12, input: { r: 0, g: 0, b: 0, a: 0 }, expected: { h: 0, s: 0, v: 0 } },
  { id: 13, input: { r: 0, g: 0, b: 0, a: 1 }, expected: { h: 0, s: 0, v: 0 } },
  {
    id: 14,
    input: { r: 18, g: 63, b: 22, a: 0 },
    expected: { h: 125, s: 71, v: 25 },
  },
  {
    id: 15,
    input: { r: 244, g: 233, b: 221, a: 1 },
    expected: { h: 31, s: 9, v: 96 },
  },
  {
    id: 16,
    input: { a: 1, r: 22, g: 22, b: 22 },
    expected: { h: 0, s: 0, v: 9 },
  },
  {
    id: 17,
    input: { r: 76, g: 33, b: 88, a: 0.5 },
    expected: { h: 287, s: 63, v: 35 },
  },
  {
    id: 18,
    input: { r: 12, g: 99, b: 44, a: 12 },
    expected: { h: 142, s: 88, v: 39 },
  },
  {
    id: 19,
    input: { r: 12.5, g: 55.2, b: 249.9 },
    expected: { h: 229, s: 95, v: 98 },
  },
  {
    id: 20,
    input: { r: 251.9, g: 158, b: 44.1 },
    expected: { h: 33, s: 82, v: 98 },
  },
  {
    id: 21,
    input: { r: '0', g: '+20', b: '95' },
    expected: { h: 227, s: 100, v: 37 },
  },
  {
    id: 22,
    input: { r: -100, g: 290, b: 24 },
    expected: { h: 126, s: 100, v: 100 },
  },
  {
    id: 23,
    input: { r: '500', g: -699, b: '-700' },
    expected: { h: 0, s: 100, v: 100 },
  },
  {
    id: 24,
    input: { r: '34.3', g: '+59.8', b: '-96.5' },
    expected: { h: 85, s: 100, v: 23 },
  },
  { id: 25, input: { r: '254' }, expected: { h: 0, s: 100, v: 100 } },
  {
    id: 26,
    input: () => ({ r: 12, g: 88, b: -100 }),
    expected: { h: 112, s: 100, v: 35 },
  },
  {
    id: 27,
    input: () => ({ r: -500, g: 500, b: '58.8' }),
    expected: { h: 134, s: 100, v: 100 },
  },
  {
    id: 28,
    input: () => ({ r: () => 12, g: 67, b: -0 }),
    expected: { h: 109, s: 100, v: 26 },
  },
  {
    id: 29,
    input: () => ({ r: '--24', g: () => '+86', b: 0 }),
    expected: { h: 120, s: 100, v: 34 },
  },
  {
    id: 30,
    input: () => ({ r: '+++2', g: '3++', b: () => '-200' }),
    expected: { h: 0, s: 0, v: 0 },
  },
  {
    id: 31,
    input: () => ({ r: () => -1, g: () => +'5', b: () => 3 }),
    expected: { h: 156, s: 100, v: 2 },
  },
  {
    id: 32,
    input: () => ({ r: () => false, g: () => true, b: () => 255 }),
    expected: { h: 240, s: 100, v: 100 },
  },
  {
    id: 33,
    input: () => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }),
    expected: { h: 109, s: 100, v: 100 },
  },
  {
    id: 34,
    input: () => ({ r: true, g: false, b: false }),
    expected: { h: 0, s: 100, v: 0 },
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
