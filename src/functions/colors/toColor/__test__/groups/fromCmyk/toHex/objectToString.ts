import { DEFAULT } from '../../../../../utility/rgbObjToHexString/constants';
import { To } from '../../../../types';
import { GroupCaseElements } from '../../../types';

const EXPECTED_TYPE: To = 'hex-string';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const cmykObjectToHexStringCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    {
      id: 1,
      input: { color: { c: 0, m: 0, y: 0, k: 0 }, to: EXPECTED_TYPE },
      expected: '#FFFFFF',
    },
    {
      id: 2,
      input: { color: { c: 1, m: 2, y: 3, k: 4 }, to: EXPECTED_TYPE },
      expected: '#F2F0ED',
    },
    {
      id: 3,
      input: { color: { c: 100, m: 100, y: 100, k: 100 }, to: EXPECTED_TYPE },
      expected: '#000000',
    },
    {
      id: 4,
      input: { color: { c: 64, m: 21, y: 99, k: 2 }, to: EXPECTED_TYPE },
      expected: '#5AC502',
    },
    {
      id: 5,
      input: { color: { c: 87, m: 56, y: 22 }, to: EXPECTED_TYPE },
      expected: '#2170C7',
    },
    {
      id: 6,
      input: { color: { c: 20, m: 81 }, to: EXPECTED_TYPE },
      expected: '#CC30FF',
    },
    {
      id: 7,
      input: { color: { c: 5 }, to: EXPECTED_TYPE },
      expected: '#F2FFFF',
    },
    {
      id: 8,
      input: { color: { m: 63, k: 99 }, to: EXPECTED_TYPE },
      expected: '#030103',
    },
    {
      id: 9,
      input: { color: { k: 34 }, to: EXPECTED_TYPE },
      expected: '#A8A8A8',
    },
    {
      id: 10,
      input: { color: { y: 66 }, to: EXPECTED_TYPE },
      expected: '#FFFF57',
    },
    {
      id: 11,
      input: { color: { k: 91, y: 89, c: 11, m: 30 }, to: EXPECTED_TYPE },
      expected: '#141003',
    },
    {
      id: 12,
      input: { color: { c: '+506', m: 11.5, y: 34, k: -50 }, to: EXPECTED_TYPE },
      expected: '#00E3A8',
    },
    {
      id: 13,
      input: { color: { c: '-40', m: '-1', y: '+67', k: '69.3' }, to: EXPECTED_TYPE },
      expected: '#4F4F1A',
    },
    {
      id: 14,
      input: { color: { c: '+45.5', m: '21.9', y: '-59.5', k: 55.9 }, to: EXPECTED_TYPE },
      expected: '#3F5B73',
    },
    {
      id: 15,
      input: { color: { c: 228, k: 86 }, to: EXPECTED_TYPE },
      expected: '#002424',
    },
    {
      id: 16,
      input: { color: { c: 95, y: 100.4, k: 99.9 }, to: EXPECTED_TYPE },
      expected: '#000300',
    },
    {
      id: 17,
      input: { color: { m: 75, k: 52, c: 76 }, to: EXPECTED_TYPE },
      expected: '#1D1F7A',
    },
    {
      id: 18,
      input: { color: { k: 22, c: 75, m: '0', y: -5 }, to: EXPECTED_TYPE },
      expected: '#32C7C7',
    },
    {
      id: 19,
      input: { color: { c: 805.305, m: 33.0000001, y: 99.9999, k: 4 }, to: EXPECTED_TYPE },
      expected: '#00A402',
    },
    {
      id: 20,
      input: { color: { c: false, m: false, y: false, k: false }, to: EXPECTED_TYPE },
      expected: '#FFFFFF',
    },
    {
      id: 21,
      input: { color: { c: true, m: true, y: true, k: true }, to: EXPECTED_TYPE },
      expected: '#FAFAFA',
    },
    {
      id: 22,
      input: { color: { c: false, m: true, y: '+5', k: 5 }, to: EXPECTED_TYPE },
      expected: '#F2F0E6',
    },
    {
      id: 23,
      input: { color: { c: '-100000', m: '+100000', y: true, k: false }, to: EXPECTED_TYPE },
      expected: '#FF00FC',
    },
    {
      id: 24,
      input: { color: { c: 845.64564, m: 53.534907, y: '56.60485', k: 0 }, to: EXPECTED_TYPE },
      expected: '#007870',
    },
    {
      id: 25,
      input: { color: { c: '14' }, to: EXPECTED_TYPE },
      expected: '#DBFFFF',
    },
    {
      id: 26,
      input: { color: () => ({ c: 100, m: 543, y: -10, k: 54 }), to: EXPECTED_TYPE },
      expected: '#000075',
    },
    {
      id: 27,
      input: { color: () => ({ c: 86, m: '69.9', y: '-5', k: false }), to: EXPECTED_TYPE },
      expected: '#244FFF',
    },
    {
      id: 28,
      input: { color: () => ({ c: () => 54, m: '+54.7', y: '+600', k: -34.3 }), to: EXPECTED_TYPE },
      expected: '#757500',
    },
    {
      id: 29,
      input: {
        color: () => ({ c: () => false, m: () => true, y: () => -5, k: true }),
        to: EXPECTED_TYPE,
      },
      expected: '#FCFAFC',
    },
    {
      id: 30,
      input: {
        color: () => ({ c: () => '+24.8', m: () => '96', y: () => 5000, k: () => 'gdfgh' }),
        to: EXPECTED_TYPE,
      },
      expected: '#C20A00',
    },
    {
      id: 31,
      input: { color: () => ({ k: () => 4 }), to: EXPECTED_TYPE },
      expected: '#F5F5F5',
    },
    {
      id: 32,
      input: { color: () => ({ y: () => '+6' }), to: EXPECTED_TYPE },
      expected: '#FFFFF0',
    },
    {
      id: 33,
      input: {
        color: () => ({ c: () => '+52', m: () => '-5', y: 64, k: () => '33' }),
        to: EXPECTED_TYPE,
      },
      expected: '#52AB3E',
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
