import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { c: 0, m: 0, y: 0, k: 0 }, expected: { r: 255, g: 255, b: 255, a: 1 } },
  { id: 2, input: { c: 1, m: 2, y: 3, k: 4 }, expected: { r: 242, g: 240, b: 237, a: 1 } },
  {
    id: 3,
    input: { c: 100, m: 100, y: 100, k: 100 },
    expected: { r: 0, g: 0, b: 0, a: 1 },
  },
  { id: 4, input: { c: 64, m: 21, y: 99, k: 2 }, expected: { r: 90, g: 197, b: 2, a: 1 } },
  { id: 5, input: { c: 87, m: 56, y: 22 }, expected: { r: 33, g: 112, b: 199, a: 1 } },
  { id: 6, input: { c: 20, m: 81 }, expected: { r: 204, g: 48, b: 255, a: 1 } },
  { id: 7, input: { c: 5 }, expected: { r: 242, g: 255, b: 255, a: 1 } },
  { id: 8, input: { m: 63, k: 99 }, expected: { r: 3, g: 1, b: 3, a: 1 } },
  { id: 9, input: { k: 34 }, expected: { r: 168, g: 168, b: 168, a: 1 } },
  { id: 10, input: { y: 66 }, expected: { r: 255, g: 255, b: 87, a: 1 } },
  {
    id: 11,
    input: { k: 91, y: 89, c: 11, m: 30 },
    expected: { r: 20, g: 16, b: 3, a: 1 },
  },
  {
    id: 12,
    input: { c: '+506', m: 11.5, y: 34, k: -50 },
    expected: { r: 0, g: 227, b: 168, a: 1 },
  },
  {
    id: 13,
    input: { c: '-40', m: '-1', y: '+67', k: '69.3' },
    expected: { r: 79, g: 79, b: 26, a: 1 },
  },
  {
    id: 14,
    input: { c: '+45.5', m: '21.9', y: '-59.5', k: 55.9 },
    expected: { r: 63, g: 91, b: 115, a: 1 },
  },
  {
    id: 15,
    input: { c: 228, k: 86 },
    expected: { r: 0, g: 36, b: 36, a: 1 },
  },
  {
    id: 16,
    input: { c: 95, y: 100.4, k: 99.9 },
    expected: { r: 0, g: 3, b: 0, a: 1 },
  },
  {
    id: 17,
    input: { m: 75, k: 52, c: 76 },
    expected: { r: 29, g: 31, b: 122, a: 1 },
  },
  {
    id: 18,
    input: { k: 22, c: 75, m: '0', y: -5 },
    expected: { r: 50, g: 199, b: 199, a: 1 },
  },
  {
    id: 19,
    input: { c: 805.305, m: 33.0000001, y: 99.9999, k: 4 },
    expected: { r: 0, g: 164, b: 2, a: 1 },
  },
  {
    id: 20,
    input: { c: false, m: false, y: false, k: false },
    expected: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    id: 21,
    input: { c: true, m: true, y: true, k: true },
    expected: { r: 250, g: 250, b: 250, a: 1 },
  },
  {
    id: 22,
    input: { c: false, m: true, y: '+5', k: 5 },
    expected: { r: 242, g: 240, b: 230, a: 1 },
  },
  {
    id: 23,
    input: { c: '-100000', m: '+100000', y: true, k: false },
    expected: { r: 255, g: 0, b: 252, a: 1 },
  },
  {
    id: 24,
    input: { c: 845.64564, m: 53.534907, y: '56.60485', k: 0 },
    expected: { r: 0, g: 120, b: 112, a: 1 },
  },
  { id: 25, input: { c: '14' }, expected: { r: 219, g: 255, b: 255, a: 1 } },
  {
    id: 26,
    input: () => ({ c: 100, m: 543, y: -10, k: 54 }),
    expected: { r: 0, g: 0, b: 117, a: 1 },
  },
  {
    id: 27,
    input: () => ({ c: 86, m: '69.9', y: '-5', k: false }),
    expected: { r: 36, g: 79, b: 255, a: 1 },
  },
  {
    id: 29,
    input: () => ({ c: () => 54, m: '+54.7', y: '+600', k: -34.3 }),
    expected: { r: 117, g: 117, b: 0, a: 1 },
  },
  {
    id: 28,
    input: () => ({ c: () => false, m: () => true, y: () => -5, k: true }),
    expected: { r: 252, g: 250, b: 252, a: 1 },
  },
  {
    id: 30,
    input: () => ({ c: () => '+24.8', m: () => '96', y: () => 5000, k: () => 'gdfgh' }),
    expected: { r: 194, g: 10, b: 0, a: 1 },
  },
  {
    id: 31,
    input: () => ({ k: () => 4 }),
    expected: { r: 245, g: 245, b: 245, a: 1 },
  },
  {
    id: 32,
    input: () => ({ y: () => '+6' }),
    expected: { r: 255, g: 255, b: 240, a: 1 },
  },
  {
    id: 33,
    input: () => ({ c: () => '+52', m: () => '-5', y: 64, k: () => '33' }),
    expected: { r: 82, g: 171, b: 62, a: 1 },
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
    input: { c: 'John', m: '++5', y: '--10', k: '++7' },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 18,
    input: { c: () => 'John', m: () => ({}), y: () => {}, k: () => {} },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 19,
    input: { c: { name: 'John' }, m: {}, y: [], k: [] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 20,
    input: { c: [34, 24, 'Aug', () => {}], m: [[], [2]], y: [[]], k: {} },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 21,
    input: { c: undefined, m: null, y: NaN, k: null },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 22,
    input: { c: () => undefined, m: () => null, y: () => NaN, k: () => NaN },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: { c: new Map(), m: new Set(), y: new Error(), k: new Set() },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: { c: 'one', m: 'два', y: 'tri', k: undefined },
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
