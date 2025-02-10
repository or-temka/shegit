import { DEFAULT } from '../../../../../utility/hsvArrayToObj/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hsv-object';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbStringToHsvObjectCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: 'rgb(0, 0, 0)', to: EXPECTED_TYPE },
      expected: { h: 0, s: 0, v: 0 },
    },
    {
      id: 2,
      input: { color: 'rgb(255, 255, 255)', to: EXPECTED_TYPE },
      expected: { h: 0, s: 0, v: 100 },
    },
    {
      id: 3,
      input: { color: 'rgb(50, 50, 50)', to: EXPECTED_TYPE },
      expected: { h: 0, s: 0, v: 20 },
    },
    {
      id: 4,
      input: { color: 'RGB(32, 63, 222)', to: EXPECTED_TYPE },
      expected: { h: 230, s: 86, v: 87 },
    },
    {
      id: 5,
      input: { color: 'rgb(231 95 162)', to: EXPECTED_TYPE },
      expected: { h: 330, s: 59, v: 91 },
    },
    {
      id: 6,
      input: { color: 'RGB 33.3, 57.999, 111.0001', to: EXPECTED_TYPE },
      expected: { h: 222, s: 70, v: 44 },
    },
    {
      id: 7,
      input: { color: 'rgba(7, +99, -4)', to: EXPECTED_TYPE },
      expected: { h: 116, s: 100, v: 39 },
    },
    {
      id: 8,
      input: { color: 'RGBA(-100, 10000, 100)', to: EXPECTED_TYPE },
      expected: { h: 144, s: 100, v: 100 },
    },
    {
      id: 9,
      input: { color: 'rgb(255.5, 0.0, 0)', to: EXPECTED_TYPE },
      expected: { h: 0, s: 100, v: 100 },
    },
    {
      id: 10,
      input: { color: 'RGBA(0, 1, +55.642, 1)', to: EXPECTED_TYPE },
      expected: { h: 239, s: 100, v: 22 },
    },
    {
      id: 11,
      input: { color: 'rgb(1, 44, 0, 0)', to: EXPECTED_TYPE },
      expected: { h: 119, s: 100, v: 17 },
    },
    {
      id: 12,
      input: { color: '(63, 1, 0)', to: EXPECTED_TYPE, fromColorType: 'rgb' },
      expected: { h: 1, s: 100, v: 25 },
    },
    {
      id: 13,
      input: { color: '12 239.01111 +50', to: EXPECTED_TYPE, fromColorType: 'rgb' },
      expected: { h: 130, s: 95, v: 94 },
    },
    {
      id: 14,
      input: { color: () => 'rgb(22, 938, 100000, 2)', to: EXPECTED_TYPE },
      expected: { h: 180, s: 91, v: 100 },
    },
    {
      id: 15,
      input: { color: () => 'rgba(95, 211, 104, 0.5, 444)', to: EXPECTED_TYPE },
      expected: { h: 125, s: 55, v: 83 },
    },
    {
      id: 16,
      input: { color: () => 'RGBA(53, 0, 9, 1)', to: EXPECTED_TYPE },
      expected: { h: 350, s: 100, v: 21 },
    },
    {
      id: 17,
      input: {
        color: () => 'rgb(1, -4, +40.5)',
        to: EXPECTED_TYPE,
      },
      expected: { h: 242, s: 100, v: 16 },
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
