import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { c: 0, m: 0, y: 0, k: 0 }, expected: 'cmyk(0%, 0%, 0%, 0%)' },
  { id: 2, input: { c: 1, m: 2, y: 3, k: 4 }, expected: 'cmyk(1%, 2%, 3%, 4%)' },
  {
    id: 3,
    input: { c: 255, m: 255, y: 255, k: 255 },
    expected: 'cmyk(100%, 100%, 100%, 100%)',
  },
  { id: 4, input: { c: 64, m: 21, y: 99, k: 42 }, expected: 'cmyk(64%, 21%, 99%, 42%)' },
  { id: 5, input: { c: 234, m: 12, y: 5 }, expected: 'cmyk(100%, 12%, 5%, 0%)' },
  { id: 6, input: { c: 18, m: 227 }, expected: 'cmyk(18%, 100%, 0%, 0%)' },
  { id: 7, input: { c: 230 }, expected: 'cmyk(100%, 0%, 0%, 0%)' },
  { id: 8, input: { m: 55 }, expected: 'cmyk(0%, 55%, 0%, 0%)' },
  { id: 9, input: { y: 75 }, expected: 'cmyk(0%, 0%, 75%, 0%)' },
  { id: 10, input: { k: 12 }, expected: 'cmyk(0%, 0%, 0%, 12%)' },
  {
    id: 11,
    input: { k: 33, m: 12, c: 87, y: 64 },
    expected: 'cmyk(87%, 12%, 64%, 33%)',
  },
  { id: 12, input: { k: 75, c: 53, m: 91 }, expected: 'cmyk(53%, 91%, 0%, 75%)' },
  { id: 13, input: { y: 71, k: 87, c: 38 }, expected: 'cmyk(38%, 0%, 71%, 87%)' },
  {
    id: 14,
    input: { c: 18, m: 63, y: 22, k: 43.5 },
    expected: 'cmyk(18%, 63%, 22%, 43%)',
  },
  {
    id: 15,
    input: { c: 244, m: 99.9, y: 0.9, k: 53.00001 },
    expected: 'cmyk(100%, 99%, 0%, 53%)',
  },
  {
    id: 16,
    input: { c: 1, k: 23, m: 22, y: 21 },
    expected: 'cmyk(1%, 22%, 21%, 23%)',
  },
  {
    id: 17,
    input: { c: 0, m: 100, y: 0, k: 100 },
    expected: 'cmyk(0%, 100%, 0%, 100%)',
  },
  {
    id: 18,
    input: { c: 134, m: 546, y: 12, k: -450 },
    expected: 'cmyk(100%, 100%, 12%, 0%)',
  },
  {
    id: 19,
    input: { c: 63.3, m: 14.9, y: -345.3, k: -0.001 },
    expected: 'cmyk(63%, 14%, 0%, 0%)',
  },
  {
    id: 20,
    input: { c: 636.32, m: '+654', y: '-543', k: '-4' },
    expected: 'cmyk(100%, 100%, 0%, 0%)',
  },
  {
    id: 21,
    input: { c: '53', m: '5346', y: '+100', k: '0' },
    expected: 'cmyk(53%, 100%, 100%, 0%)',
  },
  {
    id: 22,
    input: { c: -100, m: true, y: false, k: '56.8' },
    expected: 'cmyk(0%, 1%, 0%, 56%)',
  },
  {
    id: 23,
    input: { c: '+33.3', m: '-53.6', y: '94.9', k: '55.1' },
    expected: 'cmyk(33%, 0%, 94%, 55%)',
  },
  {
    id: 24,
    input: { c: '-2', m: '99.99', y: '99', k: false },
    expected: 'cmyk(0%, 99%, 99%, 0%)',
  },
  { id: 25, input: { c: '53' }, expected: 'cmyk(53%, 0%, 0%, 0%)' },
  {
    id: 26,
    input: () => ({ c: 12, m: 46, y: 22, k: 95 }),
    expected: 'cmyk(12%, 46%, 22%, 95%)',
  },
  {
    id: 27,
    input: () => ({ c: -500, m: 456, y: 9, k: '+5' }),
    expected: 'cmyk(0%, 100%, 9%, 5%)',
  },
  {
    id: 29,
    input: () => ({ c: () => 12, m: 66, y: -43, k: '3' }),
    expected: 'cmyk(12%, 66%, 0%, 3%)',
  },
  {
    id: 28,
    input: () => ({ c: '--24', m: () => '+86', y: -5, k: () => true }),
    expected: 'cmyk(0%, 86%, 0%, 1%)',
  },
  {
    id: 30,
    input: () => ({ c: () => '-5', m: () => '+99', y: () => 0, k: () => 100 }),
    expected: 'cmyk(0%, 99%, 0%, 100%)',
  },
  {
    id: 31,
    input: () => ({ c: () => -1, m: () => 0, y: () => 0.5, k: () => 35.9 }),
    expected: 'cmyk(0%, 0%, 0%, 35%)',
  },
  {
    id: 32,
    input: () => ({ c: () => false, m: () => true, y: () => 255, k: false }),
    expected: 'cmyk(0%, 1%, 100%, 0%)',
  },
  {
    id: 33,
    input: () => ({ c: () => '45.7', m: () => '+291.5', y: () => 0, k: () => 0 }),
    expected: 'cmyk(45%, 100%, 0%, 0%)',
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
    input: { c: 'John', m: '++5', y: '--10', k: '--88' },
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
    input: { c: [34, 24, 'Aug', () => {}], m: [[], [2]], y: [[]], k: [[]] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 21,
    input: { c: undefined, m: null, y: NaN, k: NaN },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 22,
    input: { c: () => undefined, m: () => null, y: () => NaN, k: () => null },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: { c: new Map(), m: new Set(), y: new Error(), k: new Map() },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: { c: 'one', m: 'два', y: 'tri', k: 'four' },
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
