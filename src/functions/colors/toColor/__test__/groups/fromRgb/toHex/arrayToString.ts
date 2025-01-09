import { DEFAULT } from '../../../../../utility/rgbObjToHexString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hex-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbArrayToHexStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    { id: 1, input: { color: [1, 2, 3], to: EXPECTED_TYPE }, expected: '#010203' },
    { id: 2, input: { color: [0, 0, 0], to: EXPECTED_TYPE }, expected: '#000000' },
    {
      id: 3,
      input: { color: [255, 255, 255], to: EXPECTED_TYPE },
      expected: '#FFFFFF',
    },
    {
      id: 4,
      input: { color: [53, 84, 2], to: EXPECTED_TYPE },
      expected: '#355402',
    },
    {
      id: 5,
      input: { color: [234, 12], to: EXPECTED_TYPE },
      expected: '#EA0C00',
    },
    { id: 6, input: { color: [85], to: EXPECTED_TYPE }, expected: '#550000' },
    {
      id: 7,
      input: { color: [124, 62, 55, 0.5], to: EXPECTED_TYPE },
      expected: '#7C3E37',
    },
    {
      id: 8,
      input: { color: [5, 42, 0, 342, 23], to: EXPECTED_TYPE },
      expected: '#052A00',
    },
    {
      id: 9,
      input: { color: [63.3, 55.8, 0], to: EXPECTED_TYPE },
      expected: '#3F3700',
    },
    {
      id: 10,
      input: { color: ['0', '255', -5], to: EXPECTED_TYPE },
      expected: '#00FF00',
    },
    {
      id: 11,
      input: { color: ['-86', 266, '.0'], to: EXPECTED_TYPE },
      expected: '#00FF00',
    },
    {
      id: 12,
      input: { color: () => [15, -26, '+64'], to: EXPECTED_TYPE },
      expected: '#0F0040',
    },
    {
      id: 13,
      input: { color: ['--126', false, '+267'], to: EXPECTED_TYPE },
      expected: '#0000FF',
    },
    {
      id: 14,
      input: { color: [0], to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 15,
      input: { color: [66], to: EXPECTED_TYPE },
      expected: '#420000',
    },
    {
      id: 16,
      input: { color: ['+45'], to: EXPECTED_TYPE },
      expected: '#2D0000',
    },
    {
      id: 17,
      input: { color: ['-200'], to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 18,
      input: { color: ['+500'], to: EXPECTED_TYPE },
      expected: '#FF0000',
    },
    {
      id: 19,
      input: { color: ['+212.56', '+5.9', '+2.1'], to: EXPECTED_TYPE },
      expected: '#D40502',
    },
    {
      id: 20,
      input: { color: () => [6], to: EXPECTED_TYPE },
      expected: '#060000',
    },
    {
      id: 21,
      input: { color: [() => 55, () => '+45', () => '++74'], to: EXPECTED_TYPE },
      expected: '#372D00',
    },
    {
      id: 22,
      input: { color: [() => 0, () => 23.3, () => -200], to: EXPECTED_TYPE },
      expected: '#001700',
    },
    {
      id: 23,
      input: { color: [() => 500, () => false, () => true], to: EXPECTED_TYPE },
      expected: '#FF0001',
    },
    {
      id: 24,
      input: { color: () => [() => 55, () => '+45', () => '++74'], to: EXPECTED_TYPE },
      expected: '#372D00',
    },
    {
      id: 25,
      input: { color: () => [() => 0, () => 23.3, () => -200], to: EXPECTED_TYPE },
      expected: '#001700',
    },
    {
      id: 26,
      input: { color: () => [() => 500, () => false, () => true], to: EXPECTED_TYPE },
      expected: '#FF0001',
    },
  ],

  invalid: [
    { id: 1, input: { color: 5345, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 2, input: { color: 3, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 3,
      input: { color: { name: 'John' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 4, input: { color: [], to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 5, input: { color: () => 4, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 6,
      input: {
        color: () => ({
          name: 'John',
        }),
        to: EXPECTED_TYPE,
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 7, input: { color: true, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 8, input: { color: 35.345, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 9, input: { color: 0, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 10, input: { color: false, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 11, input: { color: 5, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 12, input: { color: 14, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 13, input: { color: -1000, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 14, input: { color: '-34', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 15, input: { color: 'John', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 16, input: { color: 3.3333, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 17, input: { color: () => {}, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 18, input: { color: new Set(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 19, input: { color: new Map(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 20, input: { color: Symbol(4), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 21, input: { color: new Error(), to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 22,
      input: { color: ['John', '++5', '--10'], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 23,
      input: { color: [() => 'John', () => ({}), () => {}], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 24,
      input: { color: [{ name: 'John' }, {}, []], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 25,
      input: { color: [[34, 24, 'Aug', () => {}], [[], [2]], [[]]], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 26,
      input: { color: [undefined, null, NaN], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 27, input: { color: undefined, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 28,
      input: { color: () => () => () => {}, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 29, input: { color: NaN, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 30,
      input: { color: [() => undefined, () => null, () => NaN], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 31,
      input: { color: [new Map(), new Set(), new Error()], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 32,
      input: { color: ['one', 'два', 'tri'], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 33,
      input: { color: () => ['John', '++5', '--10'], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 34,
      input: { color: () => [() => 'John', () => ({}), () => {}], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 35,
      input: { color: () => [{ name: 'John' }, {}, []], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 36,
      input: { color: () => [[34, 24, 'Aug', () => {}], [[], [2]], [[]]], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 37,
      input: { color: () => [undefined, null, NaN], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 38,
      input: { color: () => undefined, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 39,
      input: { color: () => () => {}, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    { id: 40, input: { color: () => NaN, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    {
      id: 41,
      input: { color: () => [() => undefined, () => null, () => NaN], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 42,
      input: { color: () => [new Map(), new Set(), new Error()], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 43,
      input: { color: () => ['one', 'два', 'tri'], to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 44,
      input: { color: () => 0, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 45,
      input: { color: () => 44, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 46,
      input: { color: () => 0.4, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 47,
      input: { color: () => 500, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 48,
      input: { color: () => -1000, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 49,
      input: { color: () => '-34', to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 50,
      input: { color: () => false, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 51,
      input: { color: () => true, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 52,
      input: { color: () => ({ name: 'John' }), to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 53,
      input: { color: () => 'John', to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 54,
      input: { color: () => null, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 55,
      input: { color: null, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
  ],
};
