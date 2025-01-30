import { CaseElements } from './types';

const DEFAULT_EXPECTED_VALUE = undefined;

const getInvalidAnyDepth = (startId: number = 0) => {
  const CASES_COUNT = 20;
  let currentId = startId - 1 - CASES_COUNT;
  const depthVariants = [
    '0',
    '-53',
    '74',
    'some',
    -5,
    NaN,
    true,
    null,
    false,
    new Set(),
    new Map(),
    Symbol('Hello'),
    Symbol(2),
    [0, [], false, () => {}],
    { name: 'Alina' },
    () => {},
    class Pet {},
    Infinity,
    -Infinity,
  ];
  return depthVariants
    .map((variant) => {
      currentId += CASES_COUNT;
      return [
        {
          id: currentId + 1,
          input: { value: 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 2,
          input: { value: 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 3,
          input: { value: -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 4,
          input: { value: 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 5,
          input: { value: -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 6,
          input: { value: () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 7,
          input: { value: () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 8,
          input: { value: () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 9,
          input: { value: () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 10,
          input: { value: () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 11,
          input: { value: () => () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 12,
          input: { value: () => () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 13,
          input: { value: () => () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 14,
          input: { value: () => () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 15,
          input: { value: () => () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 16,
          input: { value: () => () => () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 17,
          input: { value: () => () => () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 18,
          input: { value: () => () => () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 19,
          input: { value: () => () => () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 20,
          input: { value: () => () => () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
      ];
    })
    .flat();
};

export const validCases: CaseElements = [
  { id: 1, input: { value: { name: 'Alina' } }, expected: { name: 'Alina' } },
  {
    id: 2,
    input: { value: { project: 'shegit', majorVersion: 1 } },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 3,
    input: { value: { data: [true, false], resolved: 'yes' } },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 4, input: { value: () => ({ name: 'Alina' }) }, expected: { name: 'Alina' } },
  {
    id: 5,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }) },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 6,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }) },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 7, input: { value: () => () => ({ name: 'Alina' }) }, expected: { name: 'Alina' } },
  {
    id: 8,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }) },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 9,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }) },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 10, input: { value: () => () => () => ({ name: 'Alina' }) }, expected: { name: 'Alina' } },
  {
    id: 11,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }) },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 12,
    input: { value: () => () => () => ({ data: [true, false], resolved: 'yes' }) },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 13, input: { value: { name: 'Alina' }, depth: 0 }, expected: { name: 'Alina' } },
  {
    id: 14,
    input: { value: { project: 'shegit', majorVersion: 1 }, depth: 0 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 15,
    input: { value: { data: [true, false], resolved: 'yes' }, depth: 0 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 16,
    input: { value: () => ({ name: 'Alina' }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 17,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 18,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 19,
    input: { value: () => () => ({ name: 'Alina' }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 20,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 21,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 22,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 23,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 24,
    input: { value: () => () => () => -999.99, depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 25, input: { value: { name: 'Alina' }, depth: 1 }, expected: { name: 'Alina' } },
  {
    id: 26,
    input: { value: { project: 'shegit', majorVersion: 1 }, depth: 1 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 27,
    input: { value: { data: [true, false], resolved: 'yes' }, depth: 1 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 28, input: { value: () => ({ name: 'Alina' }), depth: 1 }, expected: { name: 'Alina' } },
  {
    id: 29,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }), depth: 1 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 30,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }), depth: 1 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 31,
    input: { value: () => () => ({ name: 'Alina' }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 32,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 33,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 34,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 35,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 36,
    input: { value: () => () => () => ({ data: [true, false], resolved: 'yes' }), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 37, input: { value: { name: 'Alina' }, depth: 2 }, expected: { name: 'Alina' } },
  {
    id: 38,
    input: { value: { project: 'shegit', majorVersion: 1 }, depth: 2 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 39,
    input: { value: { data: [true, false], resolved: 'yes' }, depth: 2 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 40, input: { value: () => ({ name: 'Alina' }), depth: 2 }, expected: { name: 'Alina' } },
  {
    id: 41,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }), depth: 2 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 42,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }), depth: 2 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 43,
    input: { value: () => () => ({ name: 'Alina' }), depth: 2 },
    expected: { name: 'Alina' },
  },
  {
    id: 44,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 2 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 45,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }), depth: 2 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 46,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 47,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 48,
    input: { value: () => () => () => ({ data: [true, false], resolved: 'yes' }), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 49, input: { value: { name: 'Alina' }, depth: 3 }, expected: { name: 'Alina' } },
  {
    id: 50,
    input: { value: { project: 'shegit', majorVersion: 1 }, depth: 3 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 51,
    input: { value: { data: [true, false], resolved: 'yes' }, depth: 3 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 52, input: { value: () => ({ name: 'Alina' }), depth: 3 }, expected: { name: 'Alina' } },
  {
    id: 53,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }), depth: 3 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 54,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }), depth: 3 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 55,
    input: { value: () => () => ({ name: 'Alina' }), depth: 3 },
    expected: { name: 'Alina' },
  },
  {
    id: 56,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 3 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 57,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }), depth: 3 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 58,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 3 },
    expected: { name: 'Alina' },
  },
  {
    id: 59,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 3 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 60,
    input: { value: () => () => () => ({ data: [true, false], resolved: 'yes' }), depth: 3 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 61, input: { value: { name: 'Alina' }, depth: 4 }, expected: { name: 'Alina' } },
  {
    id: 62,
    input: { value: { project: 'shegit', majorVersion: 1 }, depth: 4 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 63,
    input: { value: { data: [true, false], resolved: 'yes' }, depth: 4 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  { id: 64, input: { value: () => ({ name: 'Alina' }), depth: 4 }, expected: { name: 'Alina' } },
  {
    id: 65,
    input: { value: () => ({ project: 'shegit', majorVersion: 1 }), depth: 4 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 66,
    input: { value: () => ({ data: [true, false], resolved: 'yes' }), depth: 4 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 67,
    input: { value: () => () => ({ name: 'Alina' }), depth: 4 },
    expected: { name: 'Alina' },
  },
  {
    id: 68,
    input: { value: () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 4 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 69,
    input: { value: () => () => ({ data: [true, false], resolved: 'yes' }), depth: 4 },
    expected: { data: [true, false], resolved: 'yes' },
  },
  {
    id: 70,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 4 },
    expected: { name: 'Alina' },
  },
  {
    id: 71,
    input: { value: () => () => () => ({ project: 'shegit', majorVersion: 1 }), depth: 4 },
    expected: { project: 'shegit', majorVersion: 1 },
  },
  {
    id: 72,
    input: { value: () => () => () => ({ data: [true, false], resolved: 'yes' }), depth: 4 },
    expected: { data: [true, false], resolved: 'yes' },
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: { value: 'some' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: { value: '5876' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 3, input: { value: 55 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 4, input: { value: [1, 2] }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 5, input: { value: () => '33' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 6, input: { value: new Date() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 7, input: { value: new Set() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 8, input: { value: new Map() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 9, input: { value: Symbol(100) }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 10, input: { value: true }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 11, input: { value: false }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 12, input: { value: undefined }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 13, input: { value: null }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 14, input: { value: NaN }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 15,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 16, input: { value: () => 'some' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 17, input: { value: () => '5876' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 18, input: { value: () => 55 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 19, input: { value: () => [1, 2] }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 20, input: { value: () => new Date() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 21, input: { value: () => new Set() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 22, input: { value: () => new Map() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 23, input: { value: () => Symbol(100) }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 24, input: { value: () => true }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 25, input: { value: () => false }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 26, input: { value: () => undefined }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 27, input: { value: () => null }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 28, input: { value: () => NaN }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 29,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 30, input: { value: () => () => 'some' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 31, input: { value: () => () => '5876' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 32, input: { value: () => () => 55 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 33, input: { value: () => () => [1, 2] }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 34, input: { value: () => () => new Date() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 35, input: { value: () => () => new Set() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 36, input: { value: () => () => new Map() }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 37, input: { value: () => () => Symbol(100) }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 38, input: { value: () => () => true }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 39, input: { value: () => () => false }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 40, input: { value: () => () => undefined }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 41, input: { value: () => () => null }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 42, input: { value: () => () => NaN }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 43,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true] },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 44, input: { value: 'some', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 45, input: { value: '5876', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 46, input: { value: 55, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 47, input: { value: [1, 2], depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 48, input: { value: () => '33', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 49, input: { value: new Date(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 50, input: { value: new Set(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 51, input: { value: new Map(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 52, input: { value: Symbol(100), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 53, input: { value: true, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 54, input: { value: false, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 55, input: { value: undefined, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 56, input: { value: null, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 57, input: { value: NaN, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 58,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 59, input: { value: 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 60, input: { value: '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 61, input: { value: 55, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 62, input: { value: [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 63, input: { value: () => '33', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 64, input: { value: new Date(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 65, input: { value: new Set(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 66, input: { value: new Map(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 67, input: { value: Symbol(100), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 68, input: { value: true, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 69, input: { value: false, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 70, input: { value: undefined, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 71, input: { value: null, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 72, input: { value: NaN, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 73,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 74, input: { value: 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 75, input: { value: '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 76, input: { value: 55, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 77, input: { value: [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 78, input: { value: () => '33', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 79, input: { value: new Date(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 80, input: { value: new Set(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 81, input: { value: new Map(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 82, input: { value: Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 83, input: { value: true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 84, input: { value: false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 85, input: { value: undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 86, input: { value: null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 87, input: { value: NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 88,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 89, input: { value: () => 'some', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 90, input: { value: () => '5876', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 91, input: { value: () => 55, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 92, input: { value: () => [1, 2], depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 93, input: { value: () => () => '33', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 94, input: { value: () => new Date(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 95, input: { value: () => new Set(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 96, input: { value: () => new Map(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 97, input: { value: () => Symbol(100), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 98, input: { value: () => true, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 99, input: { value: () => false, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 100, input: { value: () => undefined, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 101, input: { value: () => null, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 102, input: { value: () => NaN, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 103,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 104, input: { value: () => 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 105, input: { value: () => '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 106, input: { value: () => 55, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 107, input: { value: () => [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 108, input: { value: () => () => '33', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 109, input: { value: () => new Date(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 110, input: { value: () => new Set(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 111, input: { value: () => new Map(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 112, input: { value: () => Symbol(100), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 113, input: { value: () => true, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 114, input: { value: () => false, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 115, input: { value: () => undefined, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 116, input: { value: () => null, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 117, input: { value: () => NaN, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 118,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 119, input: { value: () => 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 120, input: { value: () => '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 121, input: { value: () => 55, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 122, input: { value: () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 123, input: { value: () => () => '33', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 124, input: { value: () => new Date(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 125, input: { value: () => new Set(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 126, input: { value: () => new Map(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 127, input: { value: () => Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 128, input: { value: () => true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 129, input: { value: () => false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 130, input: { value: () => undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 131, input: { value: () => null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 132, input: { value: () => NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 133,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 134, input: { value: () => () => 'some', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 135, input: { value: () => () => '5876', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 136,
    input: { value: () => () => 55, depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 137, input: { value: () => () => [1, 2], depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 138, input: { value: () => () => () => '33', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 139, input: { value: () => () => new Date(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 140, input: { value: () => () => new Set(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 141, input: { value: () => () => new Map(), depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 142,
    input: { value: () => () => Symbol(100), depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 143, input: { value: () => () => true, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 144, input: { value: () => () => false, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 145, input: { value: () => () => undefined, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 146, input: { value: () => () => null, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 147, input: { value: () => () => NaN, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 148,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 0 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 149, input: { value: () => () => 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 150, input: { value: () => () => '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 151,
    input: { value: () => () => 55, depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 152, input: { value: () => () => [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 153, input: { value: () => () => () => '33', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 154, input: { value: () => () => new Date(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 155, input: { value: () => () => new Set(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 156, input: { value: () => () => new Map(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 157,
    input: { value: () => () => Symbol(100), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 158, input: { value: () => () => true, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 159, input: { value: () => () => false, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 160, input: { value: () => () => undefined, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 161, input: { value: () => () => null, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 162, input: { value: () => () => NaN, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 163,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 164, input: { value: () => () => 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 165, input: { value: () => () => '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 166,
    input: { value: () => () => 55, depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 167, input: { value: () => () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 168, input: { value: () => () => () => '33', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 169, input: { value: () => () => new Date(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 170, input: { value: () => () => new Set(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 171, input: { value: () => () => new Map(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 172,
    input: { value: () => () => Symbol(100), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 173, input: { value: () => () => true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 174, input: { value: () => () => false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 175, input: { value: () => () => undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 176, input: { value: () => () => null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 177, input: { value: () => () => NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 178,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 179, input: { value: Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 180, input: { value: () => Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 181, input: { value: () => () => Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 182, input: { value: Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 183, input: { value: () => Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 184, input: { value: () => () => Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 185, input: { value: Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 186, input: { value: () => Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 187, input: { value: () => () => Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 188, input: { value: Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 189, input: { value: () => Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 190, input: { value: () => () => Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 191, input: { value: Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 192, input: { value: () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 193, input: { value: () => () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 194, input: { value: -Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 195, input: { value: () => -Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 196, input: { value: () => () => -Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 197, input: { value: -Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 198, input: { value: () => -Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 199, input: { value: () => () => -Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 200, input: { value: -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 201, input: { value: () => -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 202, input: { value: () => () => -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 203, input: { value: -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 204, input: { value: () => -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 205, input: { value: () => () => -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 206, input: { value: -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 207, input: { value: () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 208, input: { value: () => () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 209, input: { value: /ab+c/ }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 210, input: { value: () => /ab+c/ }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 211, input: { value: () => () => /ab+c/ }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 212, input: { value: /ab+c/, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 213, input: { value: () => /ab+c/, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 214, input: { value: () => () => /ab+c/, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 215, input: { value: /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 216, input: { value: () => /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 217, input: { value: () => () => /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 218, input: { value: /ab+c/, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 219, input: { value: () => /ab+c/, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 220, input: { value: () => () => /ab+c/, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 221, input: { value: /ab+c/, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 222, input: { value: () => /ab+c/, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 223, input: { value: () => () => /ab+c/, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 224,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 225,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 226,
    input: {
      value: () => () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 227,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 0,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 228,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 0,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 229,
    input: {
      value: () => () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 0,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 230,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 1,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 231,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 1,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 232,
    input: {
      value: () => () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 1,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 233,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 234,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 235,
    input: {
      value: () => () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 236,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 237,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 238,
    input: {
      value: () => () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },

  ...getInvalidAnyDepth(239),
];
