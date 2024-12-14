import { DEFAULT } from '../../../../../utility/rgbObjToArray/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'rgb-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbObjectToRgbArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    { id: 1, input: { color: { r: 0, g: 0, b: 0 }, to: EXPECTED_TYPE }, expected: [0, 0, 0] },
    { id: 2, input: { color: { r: 1, g: 2, b: 3 }, to: EXPECTED_TYPE }, expected: [1, 2, 3] },
    {
      id: 3,
      input: { color: { r: 255, g: 255, b: 255 }, to: EXPECTED_TYPE },
      expected: [255, 255, 255],
    },
    { id: 4, input: { color: { r: 64, g: 21, b: 99 }, to: EXPECTED_TYPE }, expected: [64, 21, 99] },
    { id: 5, input: { color: { r: 234, g: 12 }, to: EXPECTED_TYPE }, expected: [234, 12, 0] },
    { id: 6, input: { color: { r: 18, b: 227 }, to: EXPECTED_TYPE }, expected: [18, 0, 227] },
    { id: 7, input: { color: { g: 230, b: 11 }, to: EXPECTED_TYPE }, expected: [0, 230, 11] },
    { id: 8, input: { color: { r: 67 }, to: EXPECTED_TYPE }, expected: [67, 0, 0] },
    { id: 9, input: { color: { g: 245 }, to: EXPECTED_TYPE }, expected: [0, 245, 0] },
    { id: 10, input: { color: { b: 199 }, to: EXPECTED_TYPE }, expected: [0, 0, 199] },
    {
      id: 11,
      input: { color: { b: 17, g: 88, r: 190 }, to: EXPECTED_TYPE },
      expected: [190, 88, 17],
    },
    {
      id: 12,
      input: { color: { r: 0, g: 0, b: 0, a: 0 }, to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 13,
      input: { color: { r: 0, g: 0, b: 0, a: 1 }, to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 14,
      input: { color: { r: 18, g: 63, b: 22, a: 0 }, to: EXPECTED_TYPE },
      expected: [18, 63, 22],
    },
    {
      id: 15,
      input: { color: { r: 244, g: 233, b: 221, a: 1 }, to: EXPECTED_TYPE },
      expected: [244, 233, 221],
    },
    {
      id: 16,
      input: { color: { a: 1, r: 22, g: 22, b: 22 }, to: EXPECTED_TYPE },
      expected: [22, 22, 22],
    },
    {
      id: 17,
      input: { color: { r: 76, g: 33, b: 88, a: 0.5 }, to: EXPECTED_TYPE },
      expected: [76, 33, 88],
    },
    {
      id: 18,
      input: { color: { r: 12, g: 99, b: 44, a: 12 }, to: EXPECTED_TYPE },
      expected: [12, 99, 44],
    },
    {
      id: 19,
      input: { color: { r: 12.5, g: 55.2, b: 249.9 }, to: EXPECTED_TYPE },
      expected: [12, 55, 249],
    },
    {
      id: 20,
      input: { color: { r: 251.9, g: 158, b: 44.1 }, to: EXPECTED_TYPE },
      expected: [251, 158, 44],
    },
    {
      id: 21,
      input: { color: { r: '0', g: '+20', b: '95' }, to: EXPECTED_TYPE },
      expected: [0, 20, 95],
    },
    {
      id: 22,
      input: { color: { r: -100, g: 290, b: 24 }, to: EXPECTED_TYPE },
      expected: [0, 255, 24],
    },
    {
      id: 23,
      input: { color: { r: '500', g: -699, b: '-700' }, to: EXPECTED_TYPE },
      expected: [255, 0, 0],
    },
    {
      id: 24,
      input: { color: { r: '34.3', g: '+59.8', b: '-96.5' }, to: EXPECTED_TYPE },
      expected: [34, 59, 0],
    },
    { id: 25, input: { color: { r: '254' }, to: EXPECTED_TYPE }, expected: [254, 0, 0] },
    {
      id: 26,
      input: { color: () => ({ r: 12, g: 88, b: -100 }), to: EXPECTED_TYPE },
      expected: [12, 88, 0],
    },
    {
      id: 27,
      input: { color: () => ({ r: -500, g: 500, b: '58.8' }), to: EXPECTED_TYPE },
      expected: [0, 255, 58],
    },
    {
      id: 29,
      input: { color: () => ({ r: () => 12, g: 67, b: -0 }), to: EXPECTED_TYPE },
      expected: [12, 67, 0],
    },
    {
      id: 28,
      input: { color: () => ({ r: '--24', g: () => '+86', b: 0 }), to: EXPECTED_TYPE },
      expected: [0, 86, 0],
    },
    {
      id: 30,
      input: { color: () => ({ r: '+++2', g: '++3', b: () => '-200' }), to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 31,
      input: { color: () => ({ r: () => -1, g: () => +'5', b: () => 3 }), to: EXPECTED_TYPE },
      expected: [0, 5, 3],
    },
    {
      id: 32,
      input: { color: () => ({ r: () => false, g: () => true, b: () => 255 }), to: EXPECTED_TYPE },
      expected: [0, 1, 255],
    },
    {
      id: 33,
      input: {
        color: () => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }),
        to: EXPECTED_TYPE,
      },
      expected: [45, 255, 0],
    },
    {
      id: 34,
      input: { color: () => ({ r: true, g: false, b: false }), to: EXPECTED_TYPE },
      expected: [1, 0, 0],
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
