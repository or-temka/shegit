import { DEFAULT } from '../../../../../utility/hsvObjToString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hsv-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const cmykStringToHsvStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: 'cmyk(0%, 0%, 0%, 0%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 100%)',
    },
    {
      id: 2,
      input: { color: 'cmyk(1%, 2%, 3%, 4%)', to: EXPECTED_TYPE },
      expected: 'hsv(36, 2%, 95%)',
    },
    {
      id: 3,
      input: { color: 'CMYK(100%, 100%, 100%, 100%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 4,
      input: { color: 'rgb(64%, 21%, 99%, 2%)', to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'hsv(93, 99%, 77%)',
    },
    {
      id: 5,
      input: { color: 'cmyk(87%, 56%, 22%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 6,
      input: { color: '(20%, 81%)', to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 7,
      input: { color: 'CMYK(5%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 8,
      input: { color: 'cmyk(0, 63, 0, 99)', to: EXPECTED_TYPE },
      expected: 'hsv(300, 67%, 1%)',
    },
    {
      id: 9,
      input: { color: 'cmyk(0%, 0%, 0%, 34%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 66%)',
    },
    {
      id: 10,
      input: { color: 'cmyk(0, 0, 66)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 11,
      input: { color: 'cmyk(11%, 30%, 89%, 91%)', to: EXPECTED_TYPE },
      expected: 'hsv(46, 85%, 8%)',
    },
    {
      id: 12,
      input: { color: 'cmyk(+506%, 11.5%, 34%, -50%)', to: EXPECTED_TYPE },
      expected: 'hsv(164, 100%, 89%)',
    },
    {
      id: 13,
      input: { color: 'CMYK(-40%, -1%, +67%, 69.3%)', to: EXPECTED_TYPE },
      expected: 'hsv(60, 67%, 31%)',
    },
    {
      id: 14,
      input: { color: 'CMYK(+45.5%, 21.9%, -59.5%, 55.9%)', to: EXPECTED_TYPE },
      expected: 'hsv(208, 45%, 45%)',
    },
    {
      id: 15,
      input: { color: 'cmyk(228%, 0%, 0%, 86%)', to: EXPECTED_TYPE },
      expected: 'hsv(180, 100%, 14%)',
    },
    {
      id: 17,
      input: { color: 'cmyk(95%, 0, 100.4, 99.9%)', to: EXPECTED_TYPE },
      expected: 'hsv(120, 100%, 1%)',
    },
    {
      id: 18,
      input: { color: 'cmyk(805.305%, 33.0000001%, 99.9999%, 4%)', to: EXPECTED_TYPE },
      expected: 'hsv(121, 100%, 64%)',
    },
    {
      id: 19,
      input: { color: 'cmyk()', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 20,
      input: { color: 'cmyk(1%, 1%, 1%, 1%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 98%)',
    },
    {
      id: 21,
      input: { color: 'cmyk(0, 1, +5%, 5%)', to: EXPECTED_TYPE },
      expected: 'hsv(50, 5%, 95%)',
    },
    {
      id: 22,
      input: { color: 'cmyk(14)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 23,
      input: { color: () => 'cmyk(100%, 543%, -10%, 54%)', to: EXPECTED_TYPE },
      expected: 'hsv(240, 100%, 46%)',
    },
    {
      id: 24,
      input: { color: () => 'cmyk(86%, 69.9%, -5%, 0)', to: EXPECTED_TYPE },
      expected: 'hsv(228, 86%, 100%)',
    },
    {
      id: 25,
      input: { color: () => 'cmyk(54%, +54.7%, +600%, -34.3%)', to: EXPECTED_TYPE },
      expected: 'hsv(60, 100%, 46%)',
    },
    {
      id: 26,
      input: {
        color: () => 'cmyk(0%, 1%, -5%, 1%)',
        to: EXPECTED_TYPE,
      },
      expected: 'hsv(300, 1%, 99%)',
    },
    {
      id: 27,
      input: {
        color: () => 'cmyk(+24.8%, 96%, 5000%, fgdfgfdg%)',
        to: EXPECTED_TYPE,
      },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 28,
      input: { color: () => 'cmyk(0%, 0%, 0%, 4%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 96%)',
    },
    {
      id: 29,
      input: { color: () => 'cmyk(0%, 0%, +6%)', to: EXPECTED_TYPE },
      expected: 'hsv(0, 0%, 0%)',
    },
    {
      id: 30,
      input: {
        color: () => 'cmyk(+52%, -5%, 64%, 33%)',
        to: EXPECTED_TYPE,
      },
      expected: 'hsv(109, 64%, 67%)',
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
