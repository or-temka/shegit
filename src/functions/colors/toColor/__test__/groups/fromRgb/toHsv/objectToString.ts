import { DEFAULT } from '../../../../../utility/hsvObjToString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hsv-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbObjectToHsvStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: { r: 0, g: 0, b: 0 }, to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 2,
      input: { color: { r: 255, g: 255, b: 255 }, to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 100%)',
    },
    {
      id: 3,
      input: { color: { r: 50, g: 50, b: 50 }, to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 20%)',
    },
    {
      id: 4,
      input: { color: { r: 32, g: 63, b: 222 }, to: EXPECTED_TYPE },
      expected: 'hsv(230, 86%, 87%)',
    },
    {
      id: 5,
      input: { color: { r: 231, g: 95, b: 162 }, to: EXPECTED_TYPE },
      expected: 'hsv(330, 59%, 91%)',
    },
    {
      id: 6,
      input: { color: { r: 33.3, g: 57.999, b: 111.0001 }, to: EXPECTED_TYPE },
      expected: 'hsv(222, 70%, 44%)',
    },
    {
      id: 7,
      input: { color: { r: '7', g: '+99', b: '-4' }, to: EXPECTED_TYPE },
      expected: 'hsv(116, 100%, 39%)',
    },
    {
      id: 8,
      input: { color: { r: -100, g: 10000, b: 100 }, to: EXPECTED_TYPE },
      expected: 'hsv(144, 100%, 100%)',
    },
    {
      id: 9,
      input: { color: { r: 255.5, g: 0.0, b: '0.0' }, to: EXPECTED_TYPE },
      expected: 'hsv(0, 100%, 100%)',
    },
    {
      id: 10,
      input: { color: { r: false, g: true, b: '+55.642' }, to: EXPECTED_TYPE },
      expected: 'hsv(239, 100%, 22%)',
    },
    {
      id: 11,
      input: { color: { r: true, g: () => 44, b: false }, to: EXPECTED_TYPE },
      expected: 'hsv(119, 100%, 17%)',
    },
    {
      id: 12,
      input: { color: { r: () => 63, g: () => true, b: () => false }, to: EXPECTED_TYPE },
      expected: 'hsv(1, 100%, 25%)',
    },
    {
      id: 13,
      input: { color: { r: 12, g: 239.01111, b: () => '+50' }, to: EXPECTED_TYPE },
      expected: 'hsv(130, 95%, 94%)',
    },
    {
      id: 14,
      input: { color: () => ({ r: 22, g: 938, b: 100000 }), to: EXPECTED_TYPE },
      expected: 'hsv(180, 91%, 100%)',
    },
    {
      id: 15,
      input: { color: () => ({ r: 95, g: 211, b: 104 }), to: EXPECTED_TYPE },
      expected: 'hsv(125, 55%, 83%)',
    },
    {
      id: 16,
      input: { color: () => ({ r: '53', g: false, b: () => 9 }), to: EXPECTED_TYPE },
      expected: 'hsv(350, 100%, 21%)',
    },
    {
      id: 17,
      input: {
        color: () => ({ r: () => true, g: () => '-4', b: () => '+40.5' }),
        to: EXPECTED_TYPE,
      },
      expected: 'hsv(242, 100%, 16%)',
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
