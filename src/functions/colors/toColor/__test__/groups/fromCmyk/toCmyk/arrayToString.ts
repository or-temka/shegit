import { DEFAULT } from '../../../../../utility/cmykObjToString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'cmyk-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const cmykArrayToCmykStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: [0, 0, 0, 0], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(0%, 0%, 0%, 0%)',
    },
    {
      id: 2,
      input: { color: [1, 2, 3, 4], to: EXPECTED_TYPE },
      expected: 'cmyk(1%, 2%, 3%, 4%)',
    },
    {
      id: 3,
      input: { color: [100, 100, 100, 100], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 100%, 100%, 100%)',
    },
    {
      id: 4,
      input: { color: [64, 21, 99, 2], to: EXPECTED_TYPE },
      expected: 'cmyk(64%, 21%, 99%, 2%)',
    },
    {
      id: 5,
      input: { color: [87, 56, 22], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(87%, 56%, 22%, 100%)',
    },
    {
      id: 6,
      input: { color: [20, 81], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(20%, 81%, 0%, 100%)',
    },
    {
      id: 7,
      input: { color: [5], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(5%, 0%, 0%, 100%)',
    },
    {
      id: 8,
      input: { color: [0, 63, 0, 99], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 63%, 0%, 99%)',
    },
    {
      id: 9,
      input: { color: [0, 0, 0, 34], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 0%, 34%)',
    },
    {
      id: 10,
      input: { color: [0, 0, 66], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(0%, 0%, 66%, 100%)',
    },
    {
      id: 11,
      input: { color: [11, 30, 89, 91], to: EXPECTED_TYPE },
      expected: 'cmyk(11%, 30%, 89%, 91%)',
    },
    {
      id: 12,
      input: { color: ['+506', 11.5, 34, -50], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(100%, 11%, 34%, 0%)',
    },
    {
      id: 13,
      input: { color: ['-40', '-1', '+67', '69.3'], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 0%, 67%, 69%)',
    },
    {
      id: 14,
      input: { color: ['+45.5', '21.9', '-59.5', 55.9], to: EXPECTED_TYPE },
      expected: 'cmyk(45%, 21%, 0%, 55%)',
    },
    {
      id: 15,
      input: { color: [228, 0, 0, 86], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 0%, 0%, 86%)',
    },
    {
      id: 16,
      input: { color: [95, 0, 100.4, 99.9], to: EXPECTED_TYPE },
      expected: 'cmyk(95%, 0%, 100%, 99%)',
    },
    {
      id: 17,
      input: { color: [76, 75, 0, 52], to: EXPECTED_TYPE },
      expected: 'cmyk(76%, 75%, 0%, 52%)',
    },
    {
      id: 18,
      input: { color: [75, '0', -5, 22], to: EXPECTED_TYPE },
      expected: 'cmyk(75%, 0%, 0%, 22%)',
    },
    {
      id: 19,
      input: { color: [805.305, 33.0000001, 99.9999, 4], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 33%, 99%, 4%)',
    },
    {
      id: 20,
      input: { color: [false, false, false, false], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(0%, 0%, 0%, 0%)',
    },
    {
      id: 21,
      input: { color: [true, true, true, true], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(1%, 1%, 1%, 1%)',
    },
    {
      id: 22,
      input: { color: [false, true, '+5', 5], to: EXPECTED_TYPE },
      expected: 'cmyk(0%, 1%, 5%, 5%)',
    },
    {
      id: 23,
      input: {
        color: ['-100000', '+100000', true, false],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(0%, 100%, 1%, 0%)',
    },
    {
      id: 24,
      input: {
        color: [845.64564, 53.534907, '56.60485', 0],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(100%, 53%, 56%, 0%)',
    },
    {
      id: 25,
      input: { color: ['14'], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(14%, 0%, 0%, 100%)',
    },
    {
      id: 26,
      input: { color: () => [100, 543, -10, 54], to: EXPECTED_TYPE },
      expected: 'cmyk(100%, 100%, 0%, 54%)',
    },
    {
      id: 27,
      input: { color: () => [86, '69.9', '-5', false], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(86%, 69%, 0%, 0%)',
    },
    {
      id: 28,
      input: {
        color: () => [() => 54, '+54.7', '+600', -34.3],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(54%, 54%, 100%, 0%)',
    },
    {
      id: 29,
      input: {
        color: () => [false, true, () => -5, true],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(0%, 1%, 0%, 1%)',
    },
    {
      id: 30,
      input: {
        color: () => [() => '+24.8', () => '96', () => 5000, () => 'gdfgh'],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(24%, 96%, 100%, 100%)',
    },
    {
      id: 31,
      input: { color: () => [0, 0, 0, () => 4], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(0%, 0%, 0%, 4%)',
    },
    {
      id: 32,
      input: { color: () => [0, 0, () => '+6'], to: EXPECTED_TYPE, fromColorType: 'cmyk' },
      expected: 'cmyk(0%, 0%, 6%, 100%)',
    },
    {
      id: 33,
      input: {
        color: () => [() => '+52', () => '-5', 64, () => '33'],
        to: EXPECTED_TYPE,
        fromColorType: 'cmyk',
      },
      expected: 'cmyk(52%, 0%, 64%, 33%)',
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
