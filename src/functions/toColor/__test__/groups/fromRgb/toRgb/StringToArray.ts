import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';
import { DEFAULT } from '../../../../../rgbObjToArray/constants';

const EXPECTED_TYPE: To = 'rgb-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbStringToRgbArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: 'rgb(1, 2, 3)', to: EXPECTED_TYPE },
      expected: [1, 2, 3],
    },
    {
      id: 2,
      input: { color: 'rgb(0, 0, 0)', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 3,
      input: { color: 'rgb(255, 255, 255)', to: EXPECTED_TYPE },
      expected: [255, 255, 255],
    },
    {
      id: 4,
      input: { color: 'rgb(53, 84, 2)', to: EXPECTED_TYPE },
      expected: [53, 84, 2],
    },
    {
      id: 5,
      input: { color: 'rgb(234, 12)', to: EXPECTED_TYPE },
      expected: [234, 12, 0],
    },
    {
      id: 6,
      input: { color: 'rgb(85)', to: EXPECTED_TYPE },
      expected: [85, 0, 0],
    },
    {
      id: 7,
      input: { color: 'rgb(124, 62, 55, 0.5)', to: EXPECTED_TYPE },
      expected: [124, 62, 55],
    },
    {
      id: 8,
      input: { color: 'rgb(5, 42, 0, 342, 23)', to: EXPECTED_TYPE },
      expected: [5, 42, 0],
    },
    {
      id: 9,
      input: { color: 'rgb(63.3, 55.8, 0)', to: EXPECTED_TYPE },
      expected: [63, 55, 0],
    },
    {
      id: 10,
      input: { color: 'rgb(0, 255, -5)', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 11,
      input: { color: 'rgb(-86, 266, .0)', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 12,
      input: { color: () => 'rgb(15, -26, +64)', to: EXPECTED_TYPE },
      expected: [15, 0, 64],
    },
    {
      id: 13,
      input: { color: 'rgba(-126, 0, +267)', to: EXPECTED_TYPE },
      expected: [0, 0, 255],
    },
    {
      id: 14,
      input: { color: 'rgba(0)', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 15,
      input: { color: 'rgba(66)', to: EXPECTED_TYPE },
      expected: [66, 0, 0],
    },
    {
      id: 16,
      input: { color: 'rgba(+45)', to: EXPECTED_TYPE },
      expected: [45, 0, 0],
    },
    {
      id: 17,
      input: { color: 'rgba(-200)', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 18,
      input: { color: 'rgba(+500)', to: EXPECTED_TYPE },
      expected: [255, 0, 0],
    },
    {
      id: 19,
      input: { color: 'rgba(+212.56, +5.9, +2.1)', to: EXPECTED_TYPE },
      expected: [212, 5, 2],
    },
    {
      id: 20,
      input: { color: () => 'rgba(6,,)', to: EXPECTED_TYPE },
      expected: [6, 0, 0],
    },
    {
      id: 21,
      input: { color: '(++20, -18, 5, 2)', to: EXPECTED_TYPE },
      expected: [20, 0, 5],
    },
    {
      id: 22,
      input: { color: '(3, 2)', to: EXPECTED_TYPE },
      expected: [3, 2, 0],
    },
    {
      id: 23,
      input: { color: '(-10, +5, 3.4, 0.2)', to: EXPECTED_TYPE },
      expected: [0, 5, 3],
    },
    {
      id: 24,
      input: { color: () => '(+1000, 3, 254, 255)', to: EXPECTED_TYPE },
      expected: [255, 3, 254],
    },
    {
      id: 25,
      input: { color: () => '1, 3, 5', to: EXPECTED_TYPE },
      expected: [1, 3, 5],
    },
    {
      id: 26,
      input: { color: () => '24 12 98', to: EXPECTED_TYPE },
      expected: [24, 12, 98],
    },
    {
      id: 27,
      input: { color: () => '5.2 +129.9 -200 0.7', to: EXPECTED_TYPE },
      expected: [5, 129, 0],
    },
    {
      id: 28,
      input: { color: () => '4 7 some text 6', to: EXPECTED_TYPE },
      expected: [4, 7, 6],
    },
    {
      id: 29,
      input: { color: () => ' some gg +24 12 -98 0.3', to: EXPECTED_TYPE },
      expected: [24, 12, 0],
    },
  ],

  invalid: [
    { id: 1, input: { color: 5345, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 2, input: { color: 5876, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
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
    { id: 11, input: { color: 89, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 12, input: { color: 14, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 13, input: { color: -1000, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 14, input: { color: 34, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
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
      input: { color: () => 8, to: EXPECTED_TYPE },
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
      input: { color: () => 34, to: EXPECTED_TYPE },
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
