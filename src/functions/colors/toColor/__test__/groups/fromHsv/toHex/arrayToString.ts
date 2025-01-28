import { DEFAULT } from '../../../../../utility/rgbObjToHexString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hex-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const hsvArrayToHexStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: [0, 0, 0], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 2,
      input: { color: [360, 100, 100], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#FF0000',
    },
    {
      id: 3,
      input: { color: [50, 50, 50], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#807540',
    },
    {
      id: 4,
      input: { color: [-100, 100, 1000], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#FF0000',
    },
    {
      id: 5,
      input: { color: [99.9, '+45.5', '-214.32'], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 6,
      input: { color: [211, '+23.2', () => 45], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#586573',
    },
    {
      id: 7,
      input: {
        color: [() => 42, () => 444, () => '93.6'],
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: '#EDA600',
    },
    {
      id: 8,
      input: { color: [233.0001, 99.9999, true], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000003',
    },
    {
      id: 9,
      input: { color: [true, false, false], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 10,
      input: {
        color: [() => false, () => true, '-10000'],
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: '#000000',
    },
    {
      id: 11,
      input: { color: () => [361, 0.0, '+0.0'], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 12,
      input: {
        color: () => [() => 310, '+27.2', () => 42],
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: '#6B4E66',
    },
    {
      id: 13,
      input: {
        color: () => [() => 27, () => 78, () => '65.6'],
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: '#A65F24',
    },
    {
      id: 14,
      input: { color: () => [233.0001, 99.9999, 4], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#00010A',
    },
    {
      id: 15,
      input: { color: () => [true, false, true], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#030303',
    },
    {
      id: 16,
      input: {
        color: () => [() => false, () => true, '-10000'],
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: '#000000',
    },
    {
      id: 17,
      input: { color: [55, 55], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 18,
      input: { color: [44], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
    },
    {
      id: 19,
      input: { color: [0, 33, 33], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#543838',
    },
    {
      id: 20,
      input: { color: [0, 0, 22], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#383838',
    },
    {
      id: 21,
      input: { color: [77, 0, 77], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#C4C4C4',
    },
    {
      id: 22,
      input: { color: [], to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: '#000000',
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
