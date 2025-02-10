import { DEFAULT } from '../../../../../utility/rgbObjToCmykObj/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-object';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const cmykStringToCmykObjectCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: `cmyk(1%, 2%, 3%, 4%)`, to: EXPECTED_TYPE },
      expected: { c: 1, m: 2, y: 3, k: 4 },
    },
    {
      id: 2,
      input: { color: `cmyk(0%, 0%, 0%, 0%)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 0, k: 0 },
    },
    {
      id: 3,
      input: { color: `cmyk(255%, 255%, 255%, 255%)`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 100, y: 100, k: 100 },
    },
    {
      id: 4,
      input: { color: `cmyk(53%, 84%, 2%, 64%)`, to: EXPECTED_TYPE },
      expected: { c: 53, m: 84, y: 2, k: 64 },
    },
    {
      id: 5,
      input: { color: `cmyk(234%, 12%, 64%)`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 12, y: 64, k: 100 },
    },
    {
      id: 6,
      input: { color: `cmyk(85%, 8%)`, to: EXPECTED_TYPE },
      expected: { c: 85, m: 8, y: 0, k: 100 },
    },
    {
      id: 7,
      input: { color: `cmyk(124%)`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 0, y: 0, k: 100 },
    },
    {
      id: 8,
      input: { color: `cmyk(5, 42.8, 0, 324, 23, 75)`, to: EXPECTED_TYPE },
      expected: { c: 5, m: 42, y: 0, k: 100 },
    },
    {
      id: 9,
      input: { color: `cmyk(63.3, 55.8, 0, 35.9%)`, to: EXPECTED_TYPE },
      expected: { c: 63, m: 55, y: 0, k: 35 },
    },
    {
      id: 10,
      input: { color: `cmyka(0%, 255%, -5%, -200%)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 100, y: 0, k: 0 },
    },
    {
      id: 11,
      input: { color: `cmyk(-86, 266, .0, 1000)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 100, y: 0, k: 100 },
    },
    {
      id: 12,
      input: { color: () => `cmyk(15%, -26%, +64%, +689%)`, to: EXPECTED_TYPE },
      expected: { c: 15, m: 0, y: 64, k: 100 },
    },
    {
      id: 13,
      input: { color: `cmyk(--126%, 0%, +267%, --659%)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 100, k: 0 },
    },
    {
      id: 14,
      input: { color: `cmyka(0%)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 0, k: 100 },
    },
    {
      id: 15,
      input: { color: `cmyk(66%)`, to: EXPECTED_TYPE },
      expected: { c: 66, m: 0, y: 0, k: 100 },
    },
    {
      id: 16,
      input: { color: `cmyk(+45%)`, to: EXPECTED_TYPE },
      expected: { c: 45, m: 0, y: 0, k: 100 },
    },
    {
      id: 17,
      input: { color: `cmyka(-200)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 0, k: 100 },
    },
    {
      id: 18,
      input: { color: `cmyka(+500)`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 0, y: 0, k: 100 },
    },
    {
      id: 19,
      input: { color: `cmyk(+212.56%, +5.9, +2.1%, +67.99)`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 5, y: 2, k: 67 },
    },
    {
      id: 20,
      input: { color: () => `cmyk(6, 6, 6%, 6%)`, to: EXPECTED_TYPE },
      expected: { c: 6, m: 6, y: 6, k: 6 },
    },
    {
      id: 21,
      input: { color: `(55%, 45, ++74, ++2%)`, to: EXPECTED_TYPE },
      expected: { c: 55, m: 45, y: 74, k: 2 },
    },
    {
      id: 22,
      input: { color: `cmyk(0, 23.3%, -200, -1000%)`, to: EXPECTED_TYPE },
      expected: { c: 0, m: 23, y: 0, k: 0 },
    },
    {
      id: 23,
      input: { color: `500%, 0%, 1%, 1000%, 1%`, to: EXPECTED_TYPE },
      expected: { c: 100, m: 0, y: 1, k: 100 },
    },
    {
      id: 24,
      input: {
        color: () => `55%, +45%, ++74%, -20%, ++56.5%`,
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 55, m: 45, y: 74, k: 0 },
    },
    {
      id: 25,
      input: { color: () => `(500%, 0%, 1%, 0%)`, to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 100, m: 0, y: 1, k: 0 },
    },
    {
      id: 26,
      input: { color: () => `cmyk(1, 1%, 1, 1%)`, to: EXPECTED_TYPE },
      expected: { c: 1, m: 1, y: 1, k: 1 },
    },
    {
      id: 27,
      input: { color: () => `cmyk(2%, 2, 2%, 2%)`, to: EXPECTED_TYPE },
      expected: { c: 2, m: 2, y: 2, k: 2 },
    },
    {
      id: 28,
      input: { color: () => `cmyk(3, 3%, 3%, 3)`, to: EXPECTED_TYPE },
      expected: { c: 3, m: 3, y: 3, k: 3 },
    },
    {
      id: 29,
      input: { color: () => `cmyk(4, 4%, 4%, 4%)`, to: EXPECTED_TYPE },
      expected: { c: 4, m: 4, y: 4, k: 4 },
    },
    {
      id: 30,
      input: { color: () => `cmyk(5%, 5, 5%, 5%)`, to: EXPECTED_TYPE },
      expected: { c: 5, m: 5, y: 5, k: 5 },
    },
    {
      id: 31,
      input: { color: () => `cmyk(6%, 6, 6%, 6)`, to: EXPECTED_TYPE },
      expected: { c: 6, m: 6, y: 6, k: 6 },
    },
    {
      id: 32,
      input: { color: () => `cmyk(7%, 7%, 7%, 7)`, to: EXPECTED_TYPE },
      expected: { c: 7, m: 7, y: 7, k: 7 },
    },
  ],

  invalid: [
    { id: 1, input: { color: 0, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 2, input: { color: 44, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 3, input: { color: 6.4, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 4, input: { color: 500, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 5, input: { color: -1000, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 6, input: { color: '-34', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 7, input: { color: false, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 8, input: { color: true, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 9,
      input: { color: { name: 'John' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 10, input: { color: 'John', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 11,
      input: { color: 3.3333, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 12, input: { color: () => {}, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 13, input: { color: new Set(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 14, input: { color: new Map(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 15, input: { color: Symbol(4), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 16, input: { color: new Error(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 17,
      input: { color: { r: 'John', g: '++5', b: '--10' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 18,
      input: { color: { r: () => 'John', g: () => ({}), b: () => {} }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 19,
      input: { color: { r: { name: 'John' }, g: {}, b: [] }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 20,
      input: { color: { r: [34, 24, 'Aug', () => {}], g: [[], [2]], b: [[]] }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 21,
      input: { color: { r: undefined, g: null, b: NaN }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 22,
      input: { color: { r: () => undefined, g: () => null, b: () => NaN }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 23,
      input: { color: { r: new Map(), g: new Set(), b: new Error() }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 24,
      input: { color: { r: 'one', g: 'два', b: 'tri' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 25, input: { color: () => 0, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 26, input: { color: () => 44, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 27, input: { color: () => -20, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 28, input: { color: () => 500, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 29, input: { color: () => -1000, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 30, input: { color: () => '-34', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 31, input: { color: () => false, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 32, input: { color: () => true, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 33,
      input: { color: () => ({ name: 'John' }), to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 34, input: { color: () => 'John', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 35, input: { color: () => null, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 36, input: { color: null, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
  ],
};
