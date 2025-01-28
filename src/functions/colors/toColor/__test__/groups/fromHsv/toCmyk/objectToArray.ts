import { DEFAULT } from '../../../../../utility/cmykObjToArray/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-array';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const hsvObjectToCmykArrayCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: { h: 0, s: 0, v: 0 }, to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 2,
      input: { color: { h: 360, s: 100, v: 100 }, to: EXPECTED_TYPE },
      expected: [0, 100, 100, 0],
    },
    {
      id: 3,
      input: { color: { h: 220, s: 50, v: 80 }, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: [50, 33, 0, 20],
    },
    {
      id: 4,
      input: { color: { h: '80', s: -4, v: '+25' }, to: EXPECTED_TYPE },
      expected: [0, 0, 0, 75],
    },
    {
      id: 5,
      input: { color: { h: '-100', s: true, v: false }, to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 6,
      input: {
        color: { h: () => 300, s: () => 72, v: () => 33 },
        to: EXPECTED_TYPE,
      },
      expected: [0, 71, 0, 67],
    },
    {
      id: 7,
      input: { color: { h: 1000, s: 1000, v: 500 }, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: [0, 100, 100, 0],
    },
    {
      id: 8,
      input: { color: { h: -100, s: -0.0, v: -10 }, to: EXPECTED_TYPE },
      expected: [0, 0, 0, 100],
    },
    {
      id: 9,
      input: {
        color: { h: () => -100, s: () => 500, v: 55.6 },
        to: EXPECTED_TYPE,
      },
      expected: [0, 100, 100, 45],
    },
    {
      id: 10,
      input: { color: { h: 187.999, s: 0.01, v: 44.7 }, to: EXPECTED_TYPE },
      expected: [0, 0, 0, 56],
    },
    {
      id: 11,
      input: {
        color: { h: '262.3', s: '+99.9', v: '2.6' },
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: [60, 100, 0, 98],
    },
    {
      id: 12,
      input: {
        color: { h: '1000', s: '-1000', v: '500' },
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 0],
    },
    {
      id: 13,
      input: {
        color: { h: () => '5000000', s: () => '230', v: () => '77' },
        to: EXPECTED_TYPE,
      },
      expected: [0, 100, 100, 23],
    },
    {
      id: 14,
      input: {
        color: { h: '-100', s: true },
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 100],
    },
    {
      id: 15,
      input: {
        color: { h: '-100' },
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 100],
    },
    {
      id: 16,
      input: {
        color: { h: 120, s: 33, v: 1 },
        to: EXPECTED_TYPE,
      },
      expected: [33, 0, 33, 99],
    },
    {
      id: 17,
      input: {
        color: () => ({ h: '262.3', s: '+99.9', v: '2.6' }),
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: [60, 100, 0, 98],
    },
    {
      id: 18,
      input: {
        color: () => ({ h: '1000', s: '-1000', v: '500' }),
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 0],
    },
    {
      id: 19,
      input: {
        color: () => ({ h: () => '5000000', s: () => '230', v: () => '77' }),
        to: EXPECTED_TYPE,
      },
      expected: [0, 100, 100, 23],
    },
    {
      id: 20,
      input: {
        color: () => ({ h: '-100', s: true }),
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 100],
    },
    {
      id: 21,
      input: {
        color: () => ({ h: '-100' }),
        to: EXPECTED_TYPE,
      },
      expected: [0, 0, 0, 100],
    },
    {
      id: 22,
      input: {
        color: () => ({ h: 120, s: 33, v: 1 }),
        to: EXPECTED_TYPE,
      },
      expected: [33, 0, 33, 99],
    },
  ],

  invalid: [
    {
      id: 1,
      input: { color: 0, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 2,
      input: { color: 44, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 3,
      input: { color: 6.4, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 4,
      input: { color: 500, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 5,
      input: { color: -1000, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 6,
      input: { color: '-34', to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 7,
      input: { color: false, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 8,
      input: { color: true, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 9,
      input: { color: { name: 'John' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 10,
      input: { color: 'John', to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 11,
      input: { color: 3.3333, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 12,
      input: { color: () => {}, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 13,
      input: { color: new Set(), to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 14,
      input: { color: new Map(), to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 15,
      input: { color: Symbol(4), to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 16,
      input: { color: new Error(), to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 17,
      input: { color: { r: 'John', g: '++5', b: '--10' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 18,
      input: {
        color: { r: () => 'John', g: () => ({}), b: () => {} },
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 19,
      input: {
        color: { r: { name: 'John' }, g: {}, b: [] },
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 20,
      input: {
        color: { r: [34, 24, 'Aug', () => {}], g: [[], [2]], b: [[]] },
        to: EXPECTED_TYPE,
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 21,
      input: { color: { r: undefined, g: null, b: NaN }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 22,
      input: {
        color: { r: () => undefined, g: () => null, b: () => NaN },
        to: EXPECTED_TYPE,
        fromColorType: 'hsv',
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 23,
      input: {
        color: { r: new Map(), g: new Set(), b: new Error() },
        to: EXPECTED_TYPE,
      },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 24,
      input: { color: { r: 'one', g: 'два', b: 'tri' }, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 25,
      input: { color: () => 0, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 26,
      input: { color: () => 44, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 27,
      input: { color: () => -20, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 28,
      input: { color: () => 500, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 29,
      input: { color: () => -1000, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 30,
      input: { color: () => '-34', to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 31,
      input: { color: () => false, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 32,
      input: { color: () => true, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 33,
      input: { color: () => ({ name: 'John' }), to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 34,
      input: { color: () => 'John', to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 35,
      input: { color: () => null, to: EXPECTED_TYPE },
      expected: DEFAULT_EXPECTED_VALUE,
    },
    {
      id: 36,
      input: { color: null, to: EXPECTED_TYPE, fromColorType: 'hsv' },
      expected: DEFAULT_EXPECTED_VALUE,
    },
  ],
};
