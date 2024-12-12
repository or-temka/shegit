import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';
import { DEFAULT } from '../../../../constants';

const EXPECTED_TYPE: To = 'object';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbStringToRgbObjectCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: 'rgb(1, 2, 3)', to: EXPECTED_TYPE },
      expected: { r: 1, g: 2, b: 3, a: 1 },
    },
    {
      id: 2,
      input: { color: 'rgb(0, 0, 0)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    {
      id: 3,
      input: { color: 'rgb(255, 255, 255)', to: EXPECTED_TYPE },
      expected: { r: 255, g: 255, b: 255, a: 1 },
    },
    {
      id: 4,
      input: { color: 'rgb(53, 84, 2)', to: EXPECTED_TYPE },
      expected: { r: 53, g: 84, b: 2, a: 1 },
    },
    {
      id: 5,
      input: { color: 'rgb(234, 12)', to: EXPECTED_TYPE },
      expected: { r: 234, g: 12, b: 0, a: 1 },
    },
    {
      id: 6,
      input: { color: 'rgb(85)', to: EXPECTED_TYPE },
      expected: { r: 85, g: 0, b: 0, a: 1 },
    },
    {
      id: 7,
      input: { color: 'rgb(124, 62, 55, 0.5)', to: EXPECTED_TYPE },
      expected: { r: 124, g: 62, b: 55, a: 0.5 },
    },
    {
      id: 8,
      input: { color: 'rgb(5, 42, 0, 342, 23)', to: EXPECTED_TYPE },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
    {
      id: 9,
      input: { color: 'rgb(63.3, 55.8, 0)', to: EXPECTED_TYPE },
      expected: { r: 63, g: 55, b: 0, a: 1 },
    },
    {
      id: 10,
      input: { color: 'rgb(0, 255, -5)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 11,
      input: { color: 'rgb(-86, 266, .0)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 12,
      input: { color: () => 'rgb(15, -26, +64)', to: EXPECTED_TYPE },
      expected: { r: 15, g: 0, b: 64, a: 1 },
    },
    {
      id: 13,
      input: { color: 'rgba(-126, 0, +267)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 0, b: 255, a: 1 },
    },
    {
      id: 14,
      input: { color: 'rgba(0)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    {
      id: 15,
      input: { color: 'rgba(66)', to: EXPECTED_TYPE },
      expected: { r: 66, g: 0, b: 0, a: 1 },
    },
    {
      id: 16,
      input: { color: 'rgba(+45)', to: EXPECTED_TYPE },
      expected: { r: 45, g: 0, b: 0, a: 1 },
    },
    {
      id: 17,
      input: { color: 'rgba(-200)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    {
      id: 18,
      input: { color: 'rgba(+500)', to: EXPECTED_TYPE },
      expected: { r: 255, g: 0, b: 0, a: 1 },
    },
    {
      id: 19,
      input: { color: 'rgba(+212.56, +5.9, +2.1)', to: EXPECTED_TYPE },
      expected: { r: 212, g: 5, b: 2, a: 1 },
    },
    {
      id: 20,
      input: { color: () => 'rgba(6,,)', to: EXPECTED_TYPE },
      expected: { r: 6, g: 0, b: 0, a: 1 },
    },
    {
      id: 21,
      input: { color: '(++20, -18, 5, 2)', to: EXPECTED_TYPE },
      expected: { r: 20, g: 0, b: 5, a: 1 },
    },
    {
      id: 22,
      input: { color: '(3, 2)', to: EXPECTED_TYPE },
      expected: { r: 3, g: 2, b: 0, a: 1 },
    },
    {
      id: 23,
      input: { color: '(-10, +5, 3.4, 0.2)', to: EXPECTED_TYPE },
      expected: { r: 0, g: 5, b: 3, a: 0.2 },
    },
    {
      id: 24,
      input: { color: () => '(+1000, 3, 254, 255)', to: EXPECTED_TYPE },
      expected: { r: 255, g: 3, b: 254, a: 1 },
    },
    {
      id: 25,
      input: { color: () => '1, 3, 5', to: EXPECTED_TYPE },
      expected: { r: 1, g: 3, b: 5, a: 1 },
    },
    {
      id: 26,
      input: { color: () => '24 12 98', to: EXPECTED_TYPE },
      expected: { r: 24, g: 12, b: 98, a: 1 },
    },
    {
      id: 27,
      input: { color: () => '5.2 +129.9 -200 0.7', to: EXPECTED_TYPE },
      expected: { r: 5, g: 129, b: 0, a: 0.7 },
    },
    {
      id: 28,
      input: { color: () => '4 7 some text 6', to: EXPECTED_TYPE },
      expected: { r: 4, g: 7, b: 6, a: 1 },
    },
    {
      id: 29,
      input: { color: () => ' some gg +24 12 -98 0.3', to: EXPECTED_TYPE },
      expected: { r: 24, g: 12, b: 0, a: 0.3 },
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
