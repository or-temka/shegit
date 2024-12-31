import { DEFAULT } from '../../../../../utility/cmykObjToString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbArrayToCmykStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: [0, 0, 0], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 100%)',
    },
    {
      id: 2,
      input: { color: [1, 2, 3], to: EXPECTED_TYPE },
      expected: 'cmyk(67%, 33%, 0%, 99%)',
    },
    {
      id: 3,
      input: { color: [255, 255, 255], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 0%)',
    },
    {
      id: 4,
      input: { color: [64, 21, 99], to: EXPECTED_TYPE },
      expected: 'cmyk(35%, 79%, 0%, 61%)',
    },
    {
      id: 5,
      input: { color: [234, 12], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 95%, 100%, 8%)',
    },
    {
      id: 6,
      input: { color: [18, 0, 227], to: EXPECTED_TYPE },
      expected: 'cmyk(92%, 100%, 0%, 11%)',
    },
    {
      id: 7,
      input: { color: [0, 230, 11], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 95%, 10%)',
    },
    {
      id: 8,
      input: { color: [67], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 100%, 100%, 74%)',
    },
    {
      id: 9,
      input: { color: [0, 245], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 100%, 4%)',
    },
    {
      id: 10,
      input: { color: [0, 0, 199], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 100%, 0%, 22%)',
    },
    {
      id: 11,
      input: { color: [190, 88, 17], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 54%, 91%, 25%)',
    },
    {
      id: 12,
      input: { color: [0, 0, 0, 0], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 100%)',
    },
    {
      id: 13,
      input: { color: [0, 0, 0, 1], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 100%)',
    },
    {
      id: 14,
      input: { color: [18, 63, 22, 0], to: EXPECTED_TYPE },
      expected: 'cmyk(71%, 0%, 65%, 75%)',
    },
    {
      id: 15,
      input: { color: [244, 233, 221, 1], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 5%, 9%, 4%)',
    },
    {
      id: 16,
      input: { color: [22, 22, 22, 1], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 91%)',
    },
    {
      id: 17,
      input: { color: [76, 33, 88, 0.5], to: EXPECTED_TYPE },
      expected: 'cmyk(14%, 63%, 0%, 65%)',
    },
    {
      id: 18,
      input: { color: [12, 99, 44, 12], to: EXPECTED_TYPE },
      expected: 'cmyk(88%, 0%, 56%, 61%)',
    },
    {
      id: 19,
      input: { color: [12.5, 55.2, 249.9], to: EXPECTED_TYPE },
      expected: 'cmyk(95%, 78%, 0%, 2%)',
    },
    {
      id: 20,
      input: { color: [251.9, 158, 44.1], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 37%, 82%, 2%)',
    },
    {
      id: 21,
      input: { color: ['0', '+20', '95'], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 79%, 0%, 63%)',
    },
    {
      id: 22,
      input: { color: [-100, 290, 24], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 91%, 0%)',
    },
    {
      id: 23,
      input: { color: ['500', -699, '-700'], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 100%, 100%, 0%)',
    },
    {
      id: 24,
      input: { color: ['34.3', '+59.8', '-96.5'], to: EXPECTED_TYPE },
      expected: 'cmyk(42%, 0%, 100%, 77%)',
    },
    {
      id: 25,
      input: { color: ['254'], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 100%, 100%, 0%)',
    },
    {
      id: 26,
      input: { color: () => [12, 88, -100], to: EXPECTED_TYPE },
      expected: 'cmyk(86%, 0%, 100%, 65%)',
    },
    {
      id: 27,
      input: { color: () => [-500, 500, '58.8'], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 77%, 0%)',
    },
    {
      id: 28,
      input: { color: () => [() => 12, 67, -0], to: EXPECTED_TYPE },
      expected: 'cmyk(82%, 0%, 100%, 74%)',
    },
    {
      id: 29,
      input: { color: () => ['--24', () => '+86', 0], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 100%, 66%)',
    },
    {
      id: 30,
      input: { color: () => ['+++2', '++3', () => '-200'], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 100%)',
    },
    {
      id: 31,
      input: { color: () => [() => -1, () => +'5', () => 3], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 40%, 98%)',
    },
    {
      id: 32,
      input: { color: () => [() => false, () => true, () => 255], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 100%, 0%, 0%)',
    },
    {
      id: 33,
      input: {
        color: () => [() => '45.7', () => '+291.5', () => 0],
        to: EXPECTED_TYPE,
      },
      expected: 'cmyk(82%, 0%, 100%, 0%)',
    },
    {
      id: 34,
      input: { color: () => [true, false, false], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 100%, 100%, 100%)',
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
