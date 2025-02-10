import { DEFAULT } from '../constants';
import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const validCases: CaseElements = [
  { id: 1, input: { h: 0, s: 0, v: 0 }, expected: { r: 0, g: 0, b: 0, a: 1 } },
  { id: 2, input: { h: 360, s: 100, v: 100 }, expected: { r: 255, g: 0, b: 0, a: 1 } },
  { id: 3, input: { h: 220, s: 50, v: 80 }, expected: { r: 102, g: 136, b: 204, a: 1 } },
  { id: 4, input: { h: '80', s: -4, v: '+25' }, expected: { r: 64, g: 64, b: 64, a: 1 } },
  { id: 5, input: { h: '-100', s: true, v: false }, expected: { r: 0, g: 0, b: 0, a: 1 } },
  {
    id: 6,
    input: { h: () => 300, s: () => 72, v: () => 33 },
    expected: { r: 84, g: 24, b: 84, a: 1 },
  },
  { id: 7, input: { h: 1000, s: 1000, v: 500 }, expected: { r: 255, g: 0, b: 0, a: 1 } },
  { id: 8, input: { h: -100, s: -0.0, v: -10 }, expected: { r: 0, g: 0, b: 0, a: 1 } },
  {
    id: 9,
    input: { h: () => -100, s: () => 500, v: 55.6 },
    expected: { r: 140, g: 0, b: 0, a: 1 },
  },
  { id: 10, input: { h: 187.999, s: 0.01, v: 44.7 }, expected: { r: 112, g: 112, b: 112, a: 1 } },
  { id: 11, input: { h: '262.3', s: '+99.9', v: '2.6' }, expected: { r: 2, g: 0, b: 5, a: 1 } },
  {
    id: 12,
    input: { h: '1000', s: '-1000', v: '500' },
    expected: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    id: 13,
    input: { h: () => '5000000', s: () => '230', v: () => '77' },
    expected: { r: 196, g: 0, b: 0, a: 1 },
  },
  { id: 14, input: () => ({ h: 0, s: 0, v: 0 }), expected: { r: 0, g: 0, b: 0, a: 1 } },
  { id: 15, input: () => ({ h: 360, s: 100, v: 100 }), expected: { r: 255, g: 0, b: 0, a: 1 } },
  { id: 16, input: () => ({ h: 220, s: 50, v: 80 }), expected: { r: 102, g: 136, b: 204, a: 1 } },
  { id: 17, input: () => ({ h: '80', s: -4, v: '+25' }), expected: { r: 64, g: 64, b: 64, a: 1 } },
  { id: 18, input: () => ({ h: '-100', s: true, v: false }), expected: { r: 0, g: 0, b: 0, a: 1 } },
  {
    id: 19,
    input: () => ({ h: () => 300, s: () => 72, v: () => 33 }),
    expected: { r: 84, g: 24, b: 84, a: 1 },
  },
  { id: 20, input: () => ({ h: 1000, s: 1000, v: 500 }), expected: { r: 255, g: 0, b: 0, a: 1 } },
  { id: 21, input: () => ({ h: -100, s: -0.0, v: -10 }), expected: { r: 0, g: 0, b: 0, a: 1 } },
  {
    id: 22,
    input: () => ({ h: () => -100, s: () => 500, v: 55.6 }),
    expected: { r: 140, g: 0, b: 0, a: 1 },
  },
  {
    id: 23,
    input: () => ({ h: 187.999, s: 0.01, v: 44.7 }),
    expected: { r: 112, g: 112, b: 112, a: 1 },
  },
  {
    id: 24,
    input: () => ({ h: '262.3', s: '+99.9', v: '2.6' }),
    expected: { r: 2, g: 0, b: 5, a: 1 },
  },
  {
    id: 25,
    input: () => ({ h: '1000', s: '-1000', v: '500' }),
    expected: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    id: 26,
    input: () => ({ h: () => '5000000', s: () => '230', v: () => '77' }),
    expected: { r: 196, g: 0, b: 0, a: 1 },
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
