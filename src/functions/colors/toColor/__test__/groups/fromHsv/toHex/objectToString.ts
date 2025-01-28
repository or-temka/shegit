import { DEFAULT } from '../../../../../utility/rgbObjToHexString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hex-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const hsvObjectToHexStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: { h: 0, s: 0, v: 0 }, to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 2,
      input: { color: { h: 360, s: 100, v: 100 }, to: EXPECTED_TYPE },
      expected: '#FF0000',
    },
    {
      id: 3,
      input: { color: { h: 50, s: 50, v: 50 }, to: EXPECTED_TYPE },
      expected: '#807540',
    },
    {
      id: 4,
      input: { color: { h: -100, s: 100, v: 1000 }, to: EXPECTED_TYPE },
      expected: '#FF0000',
    },
    {
      id: 5,
      input: { color: { h: 99.9, s: '+45.5', v: '-214.32' }, to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 6,
      input: { color: { h: 211, s: '+23.2', v: () => 45 }, to: EXPECTED_TYPE },
      expected: '#586573',
    },
    {
      id: 7,
      input: { color: { h: () => 42, s: () => 444, v: () => '93.6' }, to: EXPECTED_TYPE },
      expected: '#EDA600',
    },
    {
      id: 8,
      input: { color: { h: 233.0001, s: 99.9999, v: true }, to: EXPECTED_TYPE },
      expected: '#000003',
    },
    {
      id: 9,
      input: { color: { h: true, s: false, v: false }, to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 10,
      input: { color: { h: () => false, s: () => true, v: '-10000' }, to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 11,
      input: { color: () => ({ h: 361, s: 0.0, v: '+0.0' }), to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 12,
      input: { color: () => ({ h: () => 310, s: '+27.2', v: () => 42 }), to: EXPECTED_TYPE },
      expected: '#6B4E66',
    },
    {
      id: 13,
      input: { color: () => ({ h: () => 27, s: () => 78, v: () => '65.6' }), to: EXPECTED_TYPE },
      expected: '#A65F24',
    },
    {
      id: 14,
      input: { color: () => ({ h: 233.0001, s: 99.9999, v: 4 }), to: EXPECTED_TYPE },
      expected: '#00010A',
    },
    {
      id: 15,
      input: { color: () => ({ h: true, s: false, v: true }), to: EXPECTED_TYPE },
      expected: '#030303',
    },
    {
      id: 16,
      input: { color: () => ({ h: () => false, s: () => true, v: '-10000' }), to: EXPECTED_TYPE },
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
