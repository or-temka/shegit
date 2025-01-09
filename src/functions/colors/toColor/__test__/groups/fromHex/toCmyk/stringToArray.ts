import { DEFAULT } from '../../../../../utility/cmykObjToArray/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const hexStringToCmykArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: '#000000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 2,
      input: { color: '#010203', to: EXPECTED_TYPE },
      expected: [67, 33, 0, 99],
    },
    {
      id: 3,
      input: { color: '#ffffff', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 0],
    },
    {
      id: 4,
      input: { color: '#401563', to: EXPECTED_TYPE },
      expected: [35, 79, 0, 61],
    },
    {
      id: 5,
      input: { color: '#ea0c00', to: EXPECTED_TYPE },
      expected: [0, 95, 100, 8],
    },
    {
      id: 6,
      input: { color: '1200e3', to: EXPECTED_TYPE },
      expected: [92, 100, 0, 11],
    },
    {
      id: 7,
      input: { color: '  00e60b   ', to: EXPECTED_TYPE },
      expected: [100, 0, 95, 10],
    },
    {
      id: 8,
      input: { color: ' 430000', to: EXPECTED_TYPE },
      expected: [0, 100, 100, 74],
    },
    {
      id: 9,
      input: { color: '  #00F500   ', to: EXPECTED_TYPE },
      expected: [100, 0, 100, 4],
    },
    {
      id: 10,
      input: { color: '0000c7', to: EXPECTED_TYPE },
      expected: [100, 100, 0, 22],
    },
    {
      id: 11,
      input: { color: '#BE5811', to: EXPECTED_TYPE },
      expected: [0, 54, 91, 25],
    },
    {
      id: 12,
      input: { color: '#000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 13,
      input: { color: '000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 14,
      input: { color: '#123F16', to: EXPECTED_TYPE },
      expected: [71, 0, 65, 75],
    },
    {
      id: 15,
      input: { color: '#f4e9dd', to: EXPECTED_TYPE },
      expected: [0, 5, 9, 4],
    },
    {
      id: 16,
      input: { color: '#161616 ', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 91],
    },
    {
      id: 17,
      input: { color: ' #4c2158', to: EXPECTED_TYPE },
      expected: [14, 63, 0, 65],
    },
    {
      id: 18,
      input: { color: '#0c632C', to: EXPECTED_TYPE },
      expected: [88, 0, 56, 61],
    },
    {
      id: 19,
      input: { color: '0C37F9', to: EXPECTED_TYPE },
      expected: [95, 78, 0, 2],
    },
    {
      id: 20,
      input: { color: '#fb9e2c', to: EXPECTED_TYPE },
      expected: [0, 37, 82, 2],
    },
    {
      id: 21,
      input: { color: () => '#000000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 22,
      input: { color: () => '#010203', to: EXPECTED_TYPE },
      expected: [67, 33, 0, 99],
    },
    {
      id: 23,
      input: { color: () => '#ffffff', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 0],
    },
    {
      id: 24,
      input: { color: () => '#401563', to: EXPECTED_TYPE },
      expected: [35, 79, 0, 61],
    },
    {
      id: 25,
      input: { color: () => '#ea0c00', to: EXPECTED_TYPE },
      expected: [0, 95, 100, 8],
    },
    {
      id: 26,
      input: { color: () => '1200e3', to: EXPECTED_TYPE },
      expected: [92, 100, 0, 11],
    },
    {
      id: 27,
      input: { color: () => '  00e60b   ', to: EXPECTED_TYPE },
      expected: [100, 0, 95, 10],
    },
    {
      id: 28,
      input: { color: () => ' 430000', to: EXPECTED_TYPE },
      expected: [0, 100, 100, 74],
    },
    {
      id: 29,
      input: { color: () => '  #00F500   ', to: EXPECTED_TYPE },
      expected: [100, 0, 100, 4],
    },
    {
      id: 30,
      input: { color: () => '0000c7', to: EXPECTED_TYPE },
      expected: [100, 100, 0, 22],
    },
    {
      id: 31,
      input: { color: () => '#BE5811', to: EXPECTED_TYPE },
      expected: [0, 54, 91, 25],
    },
    {
      id: 32,
      input: { color: () => '#000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 33,
      input: { color: () => '000', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 34,
      input: { color: () => '#123F16', to: EXPECTED_TYPE },
      expected: [71, 0, 65, 75],
    },
    {
      id: 35,
      input: { color: () => '#f4e9dd', to: EXPECTED_TYPE },
      expected: [0, 5, 9, 4],
    },
    {
      id: 36,
      input: { color: () => '#161616 ', to: EXPECTED_TYPE },
      expected: [0, 0, 0, 91],
    },
    {
      id: 37,
      input: { color: () => ' #4c2158', to: EXPECTED_TYPE },
      expected: [14, 63, 0, 65],
    },
    {
      id: 38,
      input: { color: () => '#0c632C', to: EXPECTED_TYPE },
      expected: [88, 0, 56, 61],
    },
    {
      id: 39,
      input: { color: () => '0C37F9', to: EXPECTED_TYPE },
      expected: [95, 78, 0, 2],
    },
    {
      id: 40,
      input: { color: () => '#fb9e2c', to: EXPECTED_TYPE },
      expected: [0, 37, 82, 2],
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
