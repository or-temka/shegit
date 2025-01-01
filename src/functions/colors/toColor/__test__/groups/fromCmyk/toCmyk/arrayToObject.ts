import { DEFAULT } from '../../../../../utility/rgbObjToCmykObj/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-object';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const cmykArrayToCmykObjectCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: [0, 0, 0, 0], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 0, m: 0, y: 0, k: 0 },
    },
    {
      id: 2,
      input: { color: [1, 2, 3, 4], to: EXPECTED_TYPE },
      expected: { c: 1, m: 2, y: 3, k: 4 },
    },
    {
      id: 3,
      input: { color: [100, 100, 100, 100], to: EXPECTED_TYPE },
      expected: { c: 100, m: 100, y: 100, k: 100 },
    },
    {
      id: 4,
      input: { color: [64, 21, 99, 2], to: EXPECTED_TYPE },
      expected: { c: 64, m: 21, y: 99, k: 2 },
    },
    {
      id: 5,
      input: { color: [87, 56, 22], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 87, m: 56, y: 22, k: 100 },
    },
    {
      id: 6,
      input: { color: [20, 81], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 20, m: 81, y: 0, k: 100 },
    },
    {
      id: 7,
      input: { color: [5], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 5, m: 0, y: 0, k: 100 },
    },
    {
      id: 8,
      input: { color: [0, 63, 0, 99], to: EXPECTED_TYPE },
      expected: { c: 0, m: 63, y: 0, k: 99 },
    },
    {
      id: 9,
      input: { color: [0, 0, 0, 34], to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 0, k: 34 },
    },
    {
      id: 10,
      input: { color: [0, 0, 66], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 0, m: 0, y: 66, k: 100 },
    },
    {
      id: 11,
      input: { color: [11, 30, 89, 91], to: EXPECTED_TYPE },
      expected: { c: 11, m: 30, y: 89, k: 91 },
    },
    {
      id: 12,
      input: { color: ['+506', 11.5, 34, -50], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 100, m: 11, y: 34, k: 0 },
    },
    {
      id: 13,
      input: { color: ['-40', '-1', '+67', '69.3'], to: EXPECTED_TYPE },
      expected: { c: 0, m: 0, y: 67, k: 69 },
    },
    {
      id: 14,
      input: { color: ['+45.5', '21.9', '-59.5', 55.9], to: EXPECTED_TYPE },
      expected: { c: 45, m: 21, y: 0, k: 55 },
    },
    {
      id: 15,
      input: { color: [228, 0, 0, 86], to: EXPECTED_TYPE },
      expected: { c: 100, m: 0, y: 0, k: 86 },
    },
    {
      id: 16,
      input: { color: [95, 0, 100.4, 99.9], to: EXPECTED_TYPE },
      expected: { c: 95, m: 0, y: 100, k: 99 },
    },
    {
      id: 17,
      input: { color: [76, 75, 0, 52], to: EXPECTED_TYPE },
      expected: { c: 76, m: 75, y: 0, k: 52 },
    },
    {
      id: 18,
      input: { color: [75, '0', -5, 22], to: EXPECTED_TYPE },
      expected: { c: 75, m: 0, y: 0, k: 22 },
    },
    {
      id: 19,
      input: { color: [805.305, 33.0000001, 99.9999, 4], to: EXPECTED_TYPE },
      expected: { c: 100, m: 33, y: 99, k: 4 },
    },
    {
      id: 20,
      input: { color: [false, false, false, false], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 0, m: 0, y: 0, k: 0 },
    },
    {
      id: 21,
      input: { color: [true, true, true, true], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 1, m: 1, y: 1, k: 1 },
    },
    {
      id: 22,
      input: { color: [false, true, '+5', 5], to: EXPECTED_TYPE },
      expected: { c: 0, m: 1, y: 5, k: 5 },
    },
    {
      id: 23,
      input: {
        color: ['-100000', '+100000', true, false],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 0, m: 100, y: 1, k: 0 },
    },
    {
      id: 24,
      input: {
        color: [845.64564, 53.534907, '56.60485', 0],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 100, m: 53, y: 56, k: 0 },
    },
    {
      id: 25,
      input: { color: ['14'], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 14, m: 0, y: 0, k: 100 },
    },
    {
      id: 26,
      input: { color: () => [100, 543, -10, 54], to: EXPECTED_TYPE },
      expected: { c: 100, m: 100, y: 0, k: 54 },
    },
    {
      id: 27,
      input: { color: () => [86, '69.9', '-5', false], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 86, m: 69, y: 0, k: 0 },
    },
    {
      id: 28,
      input: {
        color: () => [() => 54, '+54.7', '+600', -34.3],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 54, m: 54, y: 100, k: 0 },
    },
    {
      id: 29,
      input: {
        color: () => [false, true, () => -5, true],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 0, m: 1, y: 0, k: 1 },
    },
    {
      id: 30,
      input: {
        color: () => [() => '+24.8', () => '96', () => 5000, () => 'gdfgh'],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 24, m: 96, y: 100, k: 100 },
    },
    {
      id: 31,
      input: { color: () => [0, 0, 0, () => 4], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 0, m: 0, y: 0, k: 4 },
    },
    {
      id: 32,
      input: { color: () => [0, 0, () => '+6'], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: { c: 0, m: 0, y: 6, k: 100 },
    },
    {
      id: 33,
      input: {
        color: () => [() => '+52', () => '-5', 64, () => '33'],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: { c: 52, m: 0, y: 64, k: 33 },
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
