import { To } from '../../types';
import { GroupCaseElements } from '../types';
import { DEFAULT } from '../../constants';

const EXPECTED_TYPE: To = 'object';
const DEFAULT_EXPECTED_VALUE = DEFAULT.return;

export const rgbArrayToObjectCases: GroupCaseElements<typeof EXPECTED_TYPE> = {
  valid: [
    { id: 1, input: { color: [1, 2, 3], to: EXPECTED_TYPE }, expected: { r: 1, g: 2, b: 3, a: 1 } },
    { id: 2, input: { color: [0, 0, 0], to: EXPECTED_TYPE }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 3,
      input: { color: [255, 255, 255], to: EXPECTED_TYPE },
      expected: { r: 255, g: 255, b: 255, a: 1 },
    },
    {
      id: 4,
      input: { color: [53, 84, 2], to: EXPECTED_TYPE },
      expected: { r: 53, g: 84, b: 2, a: 1 },
    },
    {
      id: 5,
      input: { color: [234, 12], to: EXPECTED_TYPE },
      expected: { r: 234, g: 12, b: 0, a: 1 },
    },
    { id: 6, input: { color: [85], to: EXPECTED_TYPE }, expected: { r: 85, g: 0, b: 0, a: 1 } },
    {
      id: 7,
      input: { color: [124, 62, 55, 0.5], to: EXPECTED_TYPE },
      expected: { r: 124, g: 62, b: 55, a: 1 },
    },
    {
      id: 8,
      input: { color: [5, 42, 0, 342, 23], to: EXPECTED_TYPE },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
    {
      id: 9,
      input: { color: [63.3, 55.8, 0], to: EXPECTED_TYPE },
      expected: { r: 63, g: 55, b: 0, a: 1 },
    },
    {
      id: 10,
      input: { color: ['0', '255', -5], to: EXPECTED_TYPE },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 11,
      input: { color: ['-86', 266, '.0'], to: EXPECTED_TYPE },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 12,
      input: { color: () => [15, -26, '+64'], to: EXPECTED_TYPE },
      expected: { r: 15, g: 0, b: 64, a: 1 },
    },
    {
      id: 13,
      input: { color: ['--126', false, '+267'], to: EXPECTED_TYPE },
      expected: { r: 0, g: 0, b: 255, a: 1 },
    },
  ],

  invalid: [
    { id: 1, input: { color: 5345, to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
    { id: 2, input: { color: '5876', to: EXPECTED_TYPE }, expected: DEFAULT_EXPECTED_VALUE },
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
  ],
};
