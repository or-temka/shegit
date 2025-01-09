import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';
import { DEFAULT } from '../../../../../utility/rgbObjToArray/constants';

const EXPECTED_TYPE: To = 'rgb-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const hexStringToRgbArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: '#010203', to: EXPECTED_TYPE },
      expected: [1, 2, 3],
    },
    {
      id: 2,
      input: { color: '#000000', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 3,
      input: { color: '#ffffff', to: EXPECTED_TYPE },
      expected: [255, 255, 255],
    },
    {
      id: 4,
      input: { color: '#355402', to: EXPECTED_TYPE },
      expected: [53, 84, 2],
    },
    {
      id: 5,
      input: { color: '#ea0c00', to: EXPECTED_TYPE },
      expected: [234, 12, 0],
    },
    {
      id: 6,
      input: { color: '#550000', to: EXPECTED_TYPE },
      expected: [85, 0, 0],
    },
    {
      id: 7,
      input: { color: '#7C3E37', to: EXPECTED_TYPE },
      expected: [124, 62, 55],
    },
    {
      id: 8,
      input: { color: '052a00', to: EXPECTED_TYPE },
      expected: [5, 42, 0],
    },
    {
      id: 9,
      input: { color: '3F3700', to: EXPECTED_TYPE },
      expected: [63, 55, 0],
    },
    {
      id: 10,
      input: { color: '00FF00', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 11,
      input: { color: ' #00ff00', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 12,
      input: { color: '   #0f0040   ', to: EXPECTED_TYPE },
      expected: [15, 0, 64],
    },
    {
      id: 13,
      input: { color: '#0000fF', to: EXPECTED_TYPE },
      expected: [0, 0, 255],
    },
    {
      id: 14,
      input: { color: '   000000 ', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 15,
      input: { color: '#420000', to: EXPECTED_TYPE },
      expected: [66, 0, 0],
    },
    {
      id: 16,
      input: { color: '#2d0000', to: EXPECTED_TYPE },
      expected: [45, 0, 0],
    },
    {
      id: 17,
      input: { color: '#000', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 18,
      input: { color: '#FF0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 19,
      input: { color: '#ff0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 20,
      input: { color: 'ff0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 21,
      input: { color: '  ff0  ', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 22,
      input: { color: '  fF0  ', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 23,
      input: { color: '#d40502', to: EXPECTED_TYPE },
      expected: [212, 5, 2],
    },
    {
      id: 24,
      input: { color: '#420000', to: EXPECTED_TYPE },
      expected: [66, 0, 0],
    },
    {
      id: 25,
      input: { color: () => '#010203', to: EXPECTED_TYPE },
      expected: [1, 2, 3],
    },
    {
      id: 26,
      input: { color: () => '#000000', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 27,
      input: { color: () => '#ffffff', to: EXPECTED_TYPE },
      expected: [255, 255, 255],
    },
    {
      id: 28,
      input: { color: () => '#355402', to: EXPECTED_TYPE },
      expected: [53, 84, 2],
    },
    {
      id: 29,
      input: { color: () => '#ea0c00', to: EXPECTED_TYPE },
      expected: [234, 12, 0],
    },
    {
      id: 30,
      input: { color: () => '#550000', to: EXPECTED_TYPE },
      expected: [85, 0, 0],
    },
    {
      id: 31,
      input: { color: () => '#7C3E37', to: EXPECTED_TYPE },
      expected: [124, 62, 55],
    },
    {
      id: 32,
      input: { color: () => '052a00', to: EXPECTED_TYPE },
      expected: [5, 42, 0],
    },
    {
      id: 33,
      input: { color: () => '3F3700', to: EXPECTED_TYPE },
      expected: [63, 55, 0],
    },
    {
      id: 34,
      input: { color: () => '00FF00', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 35,
      input: { color: () => ' #00ff00', to: EXPECTED_TYPE },
      expected: [0, 255, 0],
    },
    {
      id: 36,
      input: { color: () => '   #0f0040   ', to: EXPECTED_TYPE },
      expected: [15, 0, 64],
    },
    {
      id: 37,
      input: { color: () => '#0000fF', to: EXPECTED_TYPE },
      expected: [0, 0, 255],
    },
    {
      id: 38,
      input: { color: () => '   000000 ', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 39,
      input: { color: () => '#420000', to: EXPECTED_TYPE },
      expected: [66, 0, 0],
    },
    {
      id: 40,
      input: { color: () => '#2d0000', to: EXPECTED_TYPE },
      expected: [45, 0, 0],
    },
    {
      id: 41,
      input: { color: () => '#000', to: EXPECTED_TYPE },
      expected: [0, 0, 0],
    },
    {
      id: 42,
      input: { color: () => '#FF0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 43,
      input: { color: () => '#ff0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 44,
      input: { color: () => 'ff0', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 45,
      input: { color: () => '  ff0  ', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 46,
      input: { color: () => '  fF0  ', to: EXPECTED_TYPE },
      expected: [255, 255, 0],
    },
    {
      id: 47,
      input: { color: () => '#d40502', to: EXPECTED_TYPE },
      expected: [212, 5, 2],
    },
    {
      id: 48,
      input: { color: () => '#420000', to: EXPECTED_TYPE },
      expected: [66, 0, 0],
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
