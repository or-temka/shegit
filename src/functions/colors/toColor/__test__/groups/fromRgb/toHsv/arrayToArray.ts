import { DEFAULT } from '../../../../../utility/hsvObjToArray/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hsv-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbArrayToHsvArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: [0, 0, 0], to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 2,
      input: { color: [255, 255, 255], to: EXPECTED_TYPE },
      expected: [0, 0, 100],
    },
    {
      id: 3,
      input: { color: [50, 50, 50], to: EXPECTED_TYPE },
      expected: [0, 0, 20],
    },
    {
      id: 4,
      input: { color: [32, 63, 222], to: EXPECTED_TYPE },
      expected: [230, 86, 87],
    },
    {
      id: 5,
      input: { color: [231, 95, 162], to: EXPECTED_TYPE },
      expected: [330, 59, 91],
    },
    {
      id: 6,
      input: { color: [33.3, 57.999, 111.0001], to: EXPECTED_TYPE },
      expected: [222, 70, 44],
    },
    {
      id: 7,
      input: { color: ['7', '+99', '-4'], to: EXPECTED_TYPE },
      expected: [116, 100, 39],
    },
    {
      id: 8,
      input: { color: [-100, 10000, 100], to: EXPECTED_TYPE },
      expected: [144, 100, 100],
    },
    {
      id: 9,
      input: { color: [255.5, 0.0, '0.0'], to: EXPECTED_TYPE },
      expected: [0, 100, 100],
    },
    {
      id: 10,
      input: { color: [false, true, '+55.642'], to: EXPECTED_TYPE },
      expected: [239, 100, 22],
    },
    {
      id: 11,
      input: { color: [true, () => 44, false], to: EXPECTED_TYPE },
      expected: [119, 100, 17],
    },
    {
      id: 12,
      input: { color: [() => 63, () => true, () => false], to: EXPECTED_TYPE },
      expected: [1, 100, 25],
    },
    {
      id: 13,
      input: { color: [12, 239.01111, () => '+50'], to: EXPECTED_TYPE },
      expected: [130, 95, 94],
    },
    {
      id: 14,
      input: { color: () => [22, 938, 100000], to: EXPECTED_TYPE },
      expected: [180, 91, 100],
    },
    {
      id: 15,
      input: { color: () => [95, 211, 104], to: EXPECTED_TYPE },
      expected: [125, 55, 83],
    },
    {
      id: 16,
      input: { color: () => ['53', false, () => 9], to: EXPECTED_TYPE },
      expected: [350, 100, 21],
    },
    {
      id: 17,
      input: {
        color: () => [() => true, () => '-4', () => '+40.5'],
        to: EXPECTED_TYPE,
      },
      expected: [242, 100, 16],
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
