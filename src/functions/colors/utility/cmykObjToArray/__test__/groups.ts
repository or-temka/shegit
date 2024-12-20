import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { c: 0, m: 0, y: 0, k: 0 }, expected: [0, 0, 0, 0] },
  { id: 2, input: { c: 1, m: 2, y: 3, k: 4 }, expected: [1, 2, 3, 4] },
  {
    id: 3,
    input: { c: 100, m: 100, y: 100, k: 100 },
    expected: [100, 100, 100, 100],
  },
  { id: 4, input: { c: 64, m: 21, y: 99, k: 2 }, expected: [64, 21, 99, 2] },
  { id: 5, input: { c: 87, m: 56, y: 22 }, expected: [87, 56, 22, 0] },
  { id: 6, input: { c: 20, m: 81 }, expected: [20, 81, 0, 0] },
  { id: 7, input: { c: 5 }, expected: [5, 0, 0, 0] },
  { id: 8, input: { m: 63, k: 99 }, expected: [0, 63, 0, 99] },
  { id: 9, input: { k: 34 }, expected: [0, 0, 0, 34] },
  { id: 10, input: { y: 66 }, expected: [0, 0, 66, 0] },
  {
    id: 11,
    input: { k: 91, y: 89, c: 11, m: 30 },
    expected: [11, 30, 89, 91],
  },
  { id: 12, input: { c: '+506', m: 11.5, y: 34, k: -50 }, expected: [100, 11, 34, 0] },
  { id: 13, input: { c: '-40', m: '-1', y: '+67', k: '69.3' }, expected: [0, 0, 67, 69] },
  {
    id: 14,
    input: { c: '+45.5', m: '21.9', y: '-59.5', k: 55.9 },
    expected: [45, 21, 0, 55],
  },
  {
    id: 15,
    input: { c: 228, k: 86 },
    expected: [100, 0, 0, 86],
  },
  {
    id: 16,
    input: { c: 95, y: 100.4, k: 99.9 },
    expected: [95, 0, 100, 99],
  },
  {
    id: 17,
    input: { m: 75, k: 52, c: 76 },
    expected: [76, 75, 0, 52],
  },
  {
    id: 18,
    input: { k: 22, c: 75, m: '0', y: -5 },
    expected: [75, 0, 0, 22],
  },
  {
    id: 19,
    input: { c: 805.305, m: 33.0000001, y: 99.9999, k: 4 },
    expected: [100, 33, 99, 4],
  },
  {
    id: 20,
    input: { c: false, m: false, y: false, k: false },
    expected: [0, 0, 0, 0],
  },
  {
    id: 21,
    input: { c: true, m: true, y: true, k: true },
    expected: [1, 1, 1, 1],
  },
  {
    id: 22,
    input: { c: false, m: true, y: '+5', k: 5 },
    expected: [0, 1, 5, 5],
  },
  {
    id: 23,
    input: { c: '-100000', m: '+100000', y: true, k: false },
    expected: [0, 100, 1, 0],
  },
  {
    id: 24,
    input: { c: 845.64564, m: 53.534907, y: '56.60485', k: 0 },
    expected: [100, 53, 56, 0],
  },
  { id: 25, input: { c: '14' }, expected: [14, 0, 0, 0] },
  {
    id: 26,
    input: () => ({ c: 100, m: 543, y: -10, k: 54 }),
    expected: [100, 100, 0, 54],
  },
  {
    id: 27,
    input: () => ({ c: 86, m: '69.9', y: '-5', k: false }),
    expected: [86, 69, 0, 0],
  },
  {
    id: 29,
    input: () => ({ c: () => 54, m: '+54.7', y: '+600', k: -34.3 }),
    expected: [54, 54, 100, 0],
  },
  {
    id: 28,
    input: () => ({ c: () => false, m: () => true, y: () => -5, k: true }),
    expected: [0, 1, 0, 1],
  },
  {
    id: 30,
    input: () => ({ c: () => '+24.8', m: () => '96', y: () => 5000, k: () => 'gdfgh' }),
    expected: [24, 96, 100, 0],
  },
  {
    id: 31,
    input: () => ({ k: () => 4 }),
    expected: [0, 0, 0, 4],
  },
  {
    id: 32,
    input: () => ({ y: () => '+6' }),
    expected: [0, 0, 6, 0],
  },
  {
    id: 33,
    input: () => ({ c: () => '+52', m: () => '-5', y: 64, k: () => '33' }),
    expected: [52, 0, 64, 33],
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
