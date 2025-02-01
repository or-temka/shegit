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
          input: { value: () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 2,
          input: { value: () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 3,
          input: { value: () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 4,
          input: { value: () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 5,
          input: { value: () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 6,
          input: { value: () => () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 7,
          input: { value: () => () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 8,
          input: { value: () => () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 9,
          input: { value: () => () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 10,
          input: { value: () => () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 11,
          input: { value: () => () => () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 12,
          input: { value: () => () => () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 13,
          input: { value: () => () => () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 14,
          input: { value: () => () => () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 15,
          input: { value: () => () => () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 16,
          input: { value: () => () => () => () => 0, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 17,
          input: { value: () => () => () => () => 964, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 18,
          input: { value: () => () => () => () => -200, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 19,
          input: { value: () => () => () => () => 683.3, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
        {
          id: currentId + 20,
          input: { value: () => () => () => () => -999.99, depth: variant },
          expected: DEFAULT_EXPECTED_VALUE,
        },
      ];
    })
    .flat();
};

export const validCases: CaseElements = [
  { id: 1, input: { value: () => 0, useString: true }, expected: '() => 0' },
  { id: 2, input: { value: () => 'text' }, expected: "() => 'text'" },
  { id: 3, input: { value: () => [null] }, expected: '() => [null]' },
  {
    id: 4,
    input: { value: () => () => ({ name: 'Alina' }) },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  { id: 5, input: { value: () => () => () => false }, expected: '() => false' },
  { id: 6, input: { value: () => () => 0 }, expected: '() => 0' },
  { id: 7, input: { value: () => () => 'text' }, expected: "() => 'text'" },
  { id: 8, input: { value: () => () => [null] }, expected: '() => [null]' },
  {
    id: 9,
    input: { value: () => () => () => ({ name: 'Alina' }) },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  { id: 10, input: { value: () => () => () => () => false }, expected: '() => false' },
  { id: 11, input: { value: () => () => () => 0 }, expected: '() => 0' },
  { id: 12, input: { value: () => () => () => 'text' }, expected: "() => 'text'" },
  { id: 13, input: { value: () => () => () => [null] }, expected: '() => [null]' },
  {
    id: 14,
    input: { value: () => () => () => () => ({ name: 'Alina' }) },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 15,
    input: { value: () => () => () => () => () => false },
    expected: '() => false',
  },
  { id: 16, input: { value: () => () => () => () => 0 }, expected: '() => 0' },
  { id: 17, input: { value: () => () => () => () => 'text' }, expected: "() => 'text'" },
  { id: 18, input: { value: () => () => () => () => [null] }, expected: '() => [null]' },
  {
    id: 19,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }) },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 20,
    input: { value: () => () => () => () => () => () => false },
    expected: '() => false',
  },
  { id: 21, input: { value: () => 0, depth: 0 }, expected: '() => 0' },
  { id: 22, input: { value: () => 'text', depth: 0 }, expected: "() => 'text'" },
  { id: 23, input: { value: () => [null], depth: 0 }, expected: '() => [null]' },
  {
    id: 24,
    input: { value: () => () => ({ name: 'Alina' }), depth: 0 },
    expected: `() => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 25,
    input: { value: () => () => () => false, depth: 0 },
    expected: '() => () => () => false',
  },
  { id: 26, input: { value: () => () => 0, depth: 0 }, expected: '() => () => 0' },
  { id: 27, input: { value: () => () => 'text', depth: 0 }, expected: "() => () => 'text'" },
  { id: 28, input: { value: () => () => [null], depth: 0 }, expected: '() => () => [null]' },
  {
    id: 29,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 0 },
    expected: `() => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 30,
    input: { value: () => () => () => () => false, depth: 0 },
    expected: '() => () => () => () => false',
  },
  { id: 31, input: { value: () => () => () => 0, depth: 0 }, expected: '() => () => () => 0' },
  {
    id: 32,
    input: { value: () => () => () => 'text', depth: 0 },
    expected: "() => () => () => 'text'",
  },
  {
    id: 33,
    input: { value: () => () => () => [null], depth: 0 },
    expected: '() => () => () => [null]',
  },
  {
    id: 34,
    input: { value: () => () => () => () => ({ name: 'Alina' }), depth: 0 },
    expected: `() => () => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 35,
    input: { value: () => () => () => () => () => false, depth: 0 },
    expected: '() => () => () => () => () => false',
  },
  {
    id: 36,
    input: { value: () => () => () => () => 0, depth: 0 },
    expected: '() => () => () => () => 0',
  },
  {
    id: 37,
    input: { value: () => () => () => () => 'text', depth: 0 },
    expected: "() => () => () => () => 'text'",
  },
  {
    id: 38,
    input: { value: () => () => () => () => [null], depth: 0 },
    expected: '() => () => () => () => [null]',
  },
  {
    id: 39,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }), depth: 0 },
    expected: `() => () => () => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 40,
    input: { value: () => () => () => () => () => () => false, depth: 0 },
    expected: '() => () => () => () => () => () => false',
  },
  { id: 41, input: { value: () => 0, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 42, input: { value: () => 'text', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 43, input: { value: () => [null], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 44,
    input: { value: () => () => ({ name: 'Alina' }), depth: 1 },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 45,
    input: { value: () => () => () => false, depth: 1 },
    expected: '() => () => false',
  },
  { id: 46, input: { value: () => () => 0, depth: 1 }, expected: '() => 0' },
  { id: 47, input: { value: () => () => 'text', depth: 1 }, expected: "() => 'text'" },
  { id: 48, input: { value: () => () => [null], depth: 1 }, expected: '() => [null]' },
  {
    id: 49,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 1 },
    expected: `() => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 50,
    input: { value: () => () => () => () => false, depth: 1 },
    expected: '() => () => () => false',
  },
  { id: 51, input: { value: () => () => () => 0, depth: 1 }, expected: '() => () => 0' },
  {
    id: 52,
    input: { value: () => () => () => 'text', depth: 1 },
    expected: "() => () => 'text'",
  },
  {
    id: 53,
    input: { value: () => () => () => [null], depth: 1 },
    expected: '() => () => [null]',
  },
  {
    id: 54,
    input: { value: () => () => () => () => ({ name: 'Alina' }), depth: 1 },
    expected: `() => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 55,
    input: { value: () => () => () => () => () => false, depth: 1 },
    expected: '() => () => () => () => false',
  },
  {
    id: 56,
    input: { value: () => () => () => () => 0, depth: 1 },
    expected: '() => () => () => 0',
  },
  {
    id: 57,
    input: { value: () => () => () => () => 'text', depth: 1 },
    expected: "() => () => () => 'text'",
  },
  {
    id: 58,
    input: { value: () => () => () => () => [null], depth: 1 },
    expected: '() => () => () => [null]',
  },
  {
    id: 59,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }), depth: 1 },
    expected: `() => () => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 60,
    input: { value: () => () => () => () => () => () => false, depth: 1 },
    expected: '() => () => () => () => () => false',
  },
  { id: 61, input: { value: () => 0, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 62, input: { value: () => 'text', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 63, input: { value: () => [null], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 64,
    input: { value: () => () => ({ name: 'Alina' }), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 65,
    input: { value: () => () => () => false, depth: 2 },
    expected: '() => false',
  },
  { id: 66, input: { value: () => () => 0, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 67, input: { value: () => () => 'text', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 68, input: { value: () => () => [null], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 69,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 2 },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 70,
    input: { value: () => () => () => () => false, depth: 2 },
    expected: '() => () => false',
  },
  { id: 71, input: { value: () => () => () => 0, depth: 2 }, expected: '() => 0' },
  { id: 72, input: { value: () => () => () => 'text', depth: 2 }, expected: "() => 'text'" },
  { id: 73, input: { value: () => () => () => [null], depth: 2 }, expected: '() => [null]' },
  {
    id: 74,
    input: { value: () => () => () => () => ({ name: 'Alina' }), depth: 2 },
    expected: `() => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 75,
    input: { value: () => () => () => () => () => false, depth: 2 },
    expected: '() => () => () => false',
  },
  {
    id: 76,
    input: { value: () => () => () => () => 0, depth: 2 },
    expected: '() => () => 0',
  },
  {
    id: 77,
    input: { value: () => () => () => () => 'text', depth: 2 },
    expected: "() => () => 'text'",
  },
  {
    id: 78,
    input: { value: () => () => () => () => [null], depth: 2 },
    expected: '() => () => [null]',
  },
  {
    id: 79,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }), depth: 2 },
    expected: `() => () => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 80,
    input: { value: () => () => () => () => () => () => false, depth: 2 },
    expected: '() => () => () => () => false',
  },
  { id: 81, input: { value: () => 0, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 82, input: { value: () => 'text', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 83, input: { value: () => [null], depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 84,
    input: { value: () => () => ({ name: 'Alina' }), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 85,
    input: { value: () => () => () => false, depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 86, input: { value: () => () => 0, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 87, input: { value: () => () => 'text', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 88, input: { value: () => () => [null], depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 89,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 90,
    input: { value: () => () => () => () => false, depth: 3 },
    expected: '() => false',
  },
  { id: 91, input: { value: () => () => () => 0, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 92,
    input: { value: () => () => () => 'text', depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 93,
    input: { value: () => () => () => [null], depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 94,
    input: { value: () => () => () => () => ({ name: 'Alina' }), depth: 3 },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 95,
    input: { value: () => () => () => () => () => false, depth: 3 },
    expected: '() => () => false',
  },
  { id: 96, input: { value: () => () => () => () => 0, depth: 3 }, expected: '() => 0' },
  { id: 97, input: { value: () => () => () => () => 'text', depth: 3 }, expected: "() => 'text'" },
  { id: 98, input: { value: () => () => () => () => [null], depth: 3 }, expected: '() => [null]' },
  {
    id: 99,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }), depth: 3 },
    expected: `() => () => ({
      name: 'Alina'
    })`,
  },
  {
    id: 100,
    input: { value: () => () => () => () => () => () => false, depth: 3 },
    expected: '() => () => () => false',
  },
  { id: 101, input: { value: () => 0, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 102, input: { value: () => 'text', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 103, input: { value: () => [null], depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 104,
    input: { value: () => () => ({ name: 'Alina' }), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 105,
    input: { value: () => () => () => false, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 106, input: { value: () => () => 0, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 107, input: { value: () => () => 'text', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 108, input: { value: () => () => [null], depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 109,
    input: { value: () => () => () => ({ name: 'Alina' }), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 110,
    input: { value: () => () => () => () => false, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 111, input: { value: () => () => () => 0, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 112,
    input: { value: () => () => () => 'text', depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 113,
    input: { value: () => () => () => [null], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 114,
    input: { value: () => () => () => () => ({ name: 'Alina' }), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 115,
    input: { value: () => () => () => () => () => false, depth: 4 },
    expected: '() => false',
  },
  {
    id: 116,
    input: { value: () => () => () => () => 0, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 117,
    input: { value: () => () => () => () => 'text', depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 118,
    input: { value: () => () => () => () => [null], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 119,
    input: { value: () => () => () => () => () => ({ name: 'Alina' }), depth: 4 },
    expected: `() => ({
      name: 'Alina'
    })`,
  },
  {
    id: 120,
    input: { value: () => () => () => () => () => () => false, depth: 4 },
    expected: '() => () => false',
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: { value: 'some' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: { value: '5876' }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 3, input: { value: { obj: true } }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 4, input: { value: [1, 2] }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 5, input: { value: 33 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 44, input: { value: 'some', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 45, input: { value: '5876', depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 46, input: { value: { obj: true }, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 47, input: { value: [1, 2], depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 48, input: { value: 33, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 61, input: { value: { obj: true }, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 62, input: { value: [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 63, input: { value: 33, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 76, input: { value: { obj: true }, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 77, input: { value: [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 78, input: { value: 33, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 104, input: { value: () => 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 105, input: { value: () => '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 106, input: { value: () => ({ obj: true }), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 107, input: { value: () => [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 108, input: { value: () => 33, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 121, input: { value: () => ({ obj: true }), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 122, input: { value: () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 123, input: { value: () => 33, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 164, input: { value: () => () => 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 165, input: { value: () => () => '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 166,
    input: { value: () => () => ({ obj: true }), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 167, input: { value: () => () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 168, input: { value: () => () => 33, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
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
  { id: 182, input: { value: Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 185, input: { value: Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 186, input: { value: () => Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 188, input: { value: Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 189, input: { value: () => Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 190, input: { value: () => () => Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 191, input: { value: Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 192, input: { value: () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 193, input: { value: () => () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 194, input: { value: -Infinity }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 197, input: { value: -Infinity, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 200, input: { value: -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 201, input: { value: () => -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 203, input: { value: -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 204, input: { value: () => -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 205, input: { value: () => () => -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 206, input: { value: -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 207, input: { value: () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 208, input: { value: () => () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 209, input: { value: /ab+c/ }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 212, input: { value: /ab+c/, depth: 0 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 215, input: { value: /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 216, input: { value: () => /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
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
