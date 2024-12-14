import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { r: 0, g: 0, b: 0 }, expected: [0, 0, 0] },
  { id: 2, input: { r: 1, g: 2, b: 3 }, expected: [1, 2, 3] },
  {
    id: 3,
    input: { r: 255, g: 255, b: 255 },
    expected: [255, 255, 255],
  },
  { id: 4, input: { r: 64, g: 21, b: 99 }, expected: [64, 21, 99] },
  { id: 5, input: { r: 234, g: 12 }, expected: [234, 12, 0] },
  { id: 6, input: { r: 18, b: 227 }, expected: [18, 0, 227] },
  { id: 7, input: { g: 230, b: 11 }, expected: [0, 230, 11] },
  { id: 8, input: { r: 67 }, expected: [67, 0, 0] },
  { id: 9, input: { g: 245 }, expected: [0, 245, 0] },
  { id: 10, input: { b: 199 }, expected: [0, 0, 199] },
  {
    id: 11,
    input: { b: 17, g: 88, r: 190 },
    expected: [190, 88, 17],
  },
  { id: 12, input: { r: 0, g: 0, b: 0, a: 0 }, expected: [0, 0, 0] },
  { id: 13, input: { r: 0, g: 0, b: 0, a: 1 }, expected: [0, 0, 0] },
  {
    id: 14,
    input: { r: 18, g: 63, b: 22, a: 0 },
    expected: [18, 63, 22],
  },
  {
    id: 15,
    input: { r: 244, g: 233, b: 221, a: 1 },
    expected: [244, 233, 221],
  },
  {
    id: 16,
    input: { a: 1, r: 22, g: 22, b: 22 },
    expected: [22, 22, 22],
  },
  {
    id: 17,
    input: { r: 76, g: 33, b: 88, a: 0.5 },
    expected: [76, 33, 88],
  },
  {
    id: 18,
    input: { r: 12, g: 99, b: 44, a: 12 },
    expected: [12, 99, 44],
  },
  {
    id: 19,
    input: { r: 12.5, g: 55.2, b: 249.9 },
    expected: [12, 55, 249],
  },
  {
    id: 20,
    input: { r: 251.9, g: 158, b: 44.1 },
    expected: [251, 158, 44],
  },
  {
    id: 21,
    input: { r: '0', g: '+20', b: '95' },
    expected: [0, 20, 95],
  },
  {
    id: 22,
    input: { r: -100, g: 290, b: 24 },
    expected: [0, 255, 24],
  },
  {
    id: 23,
    input: { r: '500', g: -699, b: '-700' },
    expected: [255, 0, 0],
  },
  {
    id: 24,
    input: { r: '34.3', g: '+59.8', b: '-96.5' },
    expected: [34, 59, 0],
  },
  { id: 25, input: { r: '254' }, expected: [254, 0, 0] },
  {
    id: 26,
    input: () => ({ r: 12, g: 88, b: -100 }),
    expected: [12, 88, 0],
  },
  {
    id: 27,
    input: () => ({ r: -500, g: 500, b: '58.8' }),
    expected: [0, 255, 58],
  },
  {
    id: 29,
    input: () => ({ r: () => 12, g: 67, b: -0 }),
    expected: [12, 67, 0],
  },
  {
    id: 28,
    input: () => ({ r: '--24', g: () => '+86', b: 0 }),
    expected: [0, 86, 0],
  },
  {
    id: 30,
    input: () => ({ r: '+++2', g: '++3', b: () => '-200' }),
    expected: [0, 0, 0],
  },
  {
    id: 31,
    input: () => ({ r: () => -1, g: () => +'5', b: () => 3 }),
    expected: [0, 5, 3],
  },
  {
    id: 32,
    input: () => ({ r: () => false, g: () => true, b: () => 255 }),
    expected: [0, 1, 255],
  },
  {
    id: 33,
    input: () => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }),
    expected: [45, 255, 0],
  },
  {
    id: 34,
    input: () => ({ r: true, g: false, b: false }),
    expected: [1, 0, 0],
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
