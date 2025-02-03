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
          input: { value: 95, depth: variant },
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
          input: { value: () => '5876', depth: variant },
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
          input: { value: () => () => '5876', depth: variant },
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
          input: { value: () => () => () => '5876', depth: variant },
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
  { id: 1, input: { value: 'some' }, expected: 'some' },
  { id: 2, input: { value: '5876' }, expected: '5876' },
  { id: 3, input: { value: { obj: true } }, expected: { obj: true } },
  { id: 4, input: { value: [1, 2] }, expected: [1, 2] },
  { id: 5, input: { value: () => '33' }, expected: '33' },
  { id: 6, input: { value: new Date(1) }, expected: new Date(1) },
  {
    id: 7,
    input: { value: new Set(['value1', 'value2']) },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 8,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  { id: 9, input: { value: Symbol(100), useToString: true }, expected: 'Symbol(100)' },
  { id: 10, input: { value: true }, expected: true },
  { id: 11, input: { value: false }, expected: false },
  { id: 12, input: { value: undefined }, expected: undefined },
  { id: 13, input: { value: null }, expected: null },
  { id: 14, input: { value: NaN }, expected: NaN },
  {
    id: 15,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], useToString: true },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 16, input: { value: Infinity }, expected: Infinity },
  { id: 17, input: { value: -Infinity }, expected: -Infinity },
  { id: 18, input: { value: () => 'some' }, expected: 'some' },
  { id: 19, input: { value: () => '5876' }, expected: '5876' },
  { id: 20, input: { value: () => ({ obj: true }) }, expected: { obj: true } },
  { id: 21, input: { value: () => [1, 2] }, expected: [1, 2] },
  { id: 22, input: { value: () => () => '33' }, expected: '33' },
  { id: 23, input: { value: () => new Date('2021-05-07') }, expected: new Date('2021-05-07') },
  {
    id: 24,
    input: { value: () => new Set(['value1', 'value2']) },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 25,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  { id: 26, input: { value: () => Symbol(100), useToString: true }, expected: 'Symbol(100)' },
  { id: 27, input: { value: () => true }, expected: true },
  { id: 28, input: { value: () => false }, expected: false },
  { id: 29, input: { value: () => undefined }, expected: undefined },
  { id: 30, input: { value: () => null }, expected: null },
  { id: 31, input: { value: () => NaN }, expected: NaN },
  {
    id: 32,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], useToString: true },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 33, input: { value: () => Infinity }, expected: Infinity },
  { id: 34, input: { value: () => -Infinity }, expected: -Infinity },
  { id: 35, input: { value: () => () => 'some' }, expected: 'some' },
  { id: 36, input: { value: () => () => '5876' }, expected: '5876' },
  { id: 37, input: { value: () => () => ({ obj: true }) }, expected: { obj: true } },
  { id: 38, input: { value: () => () => [1, 2] }, expected: [1, 2] },
  { id: 39, input: { value: () => () => () => '33' }, expected: '33' },
  { id: 40, input: { value: () => () => new Date(4) }, expected: new Date(4) },
  {
    id: 41,
    input: { value: () => () => new Set(['value1', 'value2']) },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 42,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  { id: 43, input: { value: () => () => Symbol(100), useToString: true }, expected: 'Symbol(100)' },
  { id: 44, input: { value: () => () => true }, expected: true },
  { id: 45, input: { value: () => () => false }, expected: false },
  { id: 46, input: { value: () => () => undefined }, expected: undefined },
  { id: 47, input: { value: () => () => null }, expected: null },
  { id: 48, input: { value: () => () => NaN }, expected: NaN },
  {
    id: 49,
    input: {
      value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      useToString: true,
    },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 50, input: { value: () => () => Infinity }, expected: Infinity },
  { id: 51, input: { value: () => () => -Infinity }, expected: -Infinity },
  { id: 52, input: { value: () => () => () => 'some' }, expected: 'some' },
  { id: 53, input: { value: () => () => () => '5876' }, expected: '5876' },
  { id: 54, input: { value: () => () => () => ({ obj: true }) }, expected: { obj: true } },
  { id: 55, input: { value: () => () => () => [1, 2] }, expected: [1, 2] },
  { id: 56, input: { value: () => () => () => () => '33' }, expected: '33' },
  { id: 57, input: { value: () => () => () => new Date(5) }, expected: new Date(5) },
  {
    id: 58,
    input: { value: () => () => () => new Set(['value1', 'value2']) },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 59,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  {
    id: 60,
    input: { value: () => () => () => Symbol(100), useToString: true },
    expected: 'Symbol(100)',
  },
  { id: 61, input: { value: () => () => () => true }, expected: true },
  { id: 62, input: { value: () => () => () => false }, expected: false },
  { id: 63, input: { value: () => () => () => undefined }, expected: undefined },
  { id: 64, input: { value: () => () => () => null }, expected: null },
  { id: 65, input: { value: () => () => () => NaN }, expected: NaN },
  {
    id: 66,
    input: {
      value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      useToString: true,
    },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 67, input: { value: () => () => () => Infinity }, expected: Infinity },
  { id: 68, input: { value: () => () => () => -Infinity }, expected: -Infinity },
  { id: 69, input: { value: 'some', depth: 0 }, expected: 'some' },
  { id: 70, input: { value: '5876', depth: 0 }, expected: '5876' },
  { id: 71, input: { value: { obj: true }, depth: 0 }, expected: { obj: true } },
  { id: 72, input: { value: [1, 2], depth: 0 }, expected: [1, 2] },
  { id: 73, input: { value: () => '33', depth: 0, useToString: true }, expected: "() => '33'" },
  { id: 74, input: { value: new Date(2), depth: 0 }, expected: new Date(2) },
  {
    id: 75,
    input: { value: new Set(['value1', 'value2']), depth: 0 },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 76,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
      depth: 0,
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  { id: 77, input: { value: Symbol(100), depth: 0, useToString: true }, expected: 'Symbol(100)' },
  { id: 78, input: { value: true, depth: 0 }, expected: true },
  { id: 79, input: { value: false, depth: 0 }, expected: false },
  { id: 80, input: { value: undefined, depth: 0 }, expected: undefined },
  { id: 81, input: { value: null, depth: 0 }, expected: null },
  { id: 82, input: { value: NaN, depth: 0 }, expected: NaN },
  {
    id: 83,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 0, useToString: true },
    expected: `() => 'some',[object Object],55,yes,true`,
  },
  { id: 84, input: { value: Infinity, depth: 0 }, expected: Infinity },
  { id: 85, input: { value: -Infinity, depth: 0 }, expected: -Infinity },
  { id: 86, input: { value: () => 'some', depth: 0, useToString: true }, expected: "() => 'some'" },
  { id: 87, input: { value: () => '5876', depth: 0, useToString: true }, expected: "() => '5876'" },
  {
    id: 88,
    input: { value: () => ({ obj: true }), depth: 0, useToString: true },
    expected: `() => ({
      obj: true
    })`,
  },
  { id: 89, input: { value: () => [1, 2], depth: 0, useToString: true }, expected: '() => [1, 2]' },
  {
    id: 90,
    input: { value: () => () => '33', depth: 0, useToString: true },
    expected: "() => () => '33'",
  },
  {
    id: 91,
    input: { value: () => new Date('2020-01-03'), depth: 0, useToString: true },
    expected: "() => new Date('2020-01-03')",
  },
  {
    id: 92,
    input: { value: () => new Set(['value1', 'value2']), depth: 0, useToString: true },
    expected: "() => new Set(['value1', 'value2'])",
  },
  {
    id: 93,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 0,
      useToString: true,
    },
    expected: `() => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 94,
    input: { value: () => Symbol(100), depth: 0, useToString: true },
    expected: '() => Symbol(100)',
  },
  { id: 95, input: { value: () => true, depth: 0, useToString: true }, expected: '() => true' },
  { id: 96, input: { value: () => false, depth: 0, useToString: true }, expected: '() => false' },
  {
    id: 97,
    input: { value: () => undefined, depth: 0, useToString: true },
    expected: '() => undefined',
  },
  { id: 98, input: { value: () => null, depth: 0, useToString: true }, expected: '() => null' },
  { id: 99, input: { value: () => NaN, depth: 0, useToString: true }, expected: '() => NaN' },
  {
    id: 100,
    input: {
      value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 0,
      useToString: true,
    },
    expected: `() => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 101,
    input: { value: () => Infinity, depth: 0, useToString: true },
    expected: '() => Infinity',
  },
  {
    id: 102,
    input: { value: () => -Infinity, depth: 0, useToString: true },
    expected: '() => -Infinity',
  },
  {
    id: 103,
    input: { value: () => () => 'some', depth: 0, useToString: true },
    expected: "() => () => 'some'",
  },
  {
    id: 104,
    input: { value: () => () => '5876', depth: 0, useToString: true },
    expected: "() => () => '5876'",
  },
  {
    id: 105,
    input: { value: () => () => ({ obj: true }), depth: 0, useToString: true },
    expected: `() => () => ({
      obj: true
    })`,
  },
  {
    id: 106,
    input: { value: () => () => [1, 2], depth: 0, useToString: true },
    expected: '() => () => [1, 2]',
  },
  {
    id: 107,
    input: { value: () => () => () => '33', depth: 0, useToString: true },
    expected: "() => () => () => '33'",
  },
  {
    id: 108,
    input: { value: () => () => new Date('2020-01-03'), depth: 0, useToString: true },
    expected: "() => () => new Date('2020-01-03')",
  },
  {
    id: 109,
    input: { value: () => () => new Set(['value1', 'value2']), depth: 0, useToString: true },
    expected: "() => () => new Set(['value1', 'value2'])",
  },
  {
    id: 110,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 0,
      useToString: true,
    },
    expected: `() => () => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 111,
    input: { value: () => () => Symbol(100), depth: 0, useToString: true },
    expected: '() => () => Symbol(100)',
  },
  {
    id: 112,
    input: { value: () => () => true, depth: 0, useToString: true },
    expected: '() => () => true',
  },
  {
    id: 113,
    input: { value: () => () => false, depth: 0, useToString: true },
    expected: '() => () => false',
  },
  {
    id: 114,
    input: { value: () => () => undefined, depth: 0, useToString: true },
    expected: '() => () => undefined',
  },
  {
    id: 115,
    input: { value: () => () => null, depth: 0, useToString: true },
    expected: '() => () => null',
  },
  {
    id: 116,
    input: { value: () => () => NaN, depth: 0, useToString: true },
    expected: '() => () => NaN',
  },
  {
    id: 117,
    input: {
      value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 0,
      useToString: true,
    },
    expected: `() => () => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 118,
    input: { value: () => () => Infinity, depth: 0, useToString: true },
    expected: '() => () => Infinity',
  },
  {
    id: 119,
    input: { value: () => () => -Infinity, depth: 0, useToString: true },
    expected: '() => () => -Infinity',
  },
  {
    id: 120,
    input: { value: () => () => () => 'some', depth: 0, useToString: true },
    expected: "() => () => () => 'some'",
  },
  {
    id: 121,
    input: { value: () => () => () => '5876', depth: 0, useToString: true },
    expected: "() => () => () => '5876'",
  },
  {
    id: 122,
    input: { value: () => () => () => ({ obj: true }), depth: 0, useToString: true },
    expected: `() => () => () => ({
      obj: true
    })`,
  },
  {
    id: 123,
    input: { value: () => () => () => [1, 2], depth: 0, useToString: true },
    expected: '() => () => () => [1, 2]',
  },
  {
    id: 124,
    input: { value: () => () => () => () => '33', depth: 0, useToString: true },
    expected: "() => () => () => () => '33'",
  },
  {
    id: 125,
    input: { value: () => () => () => new Date('2020-01-03'), depth: 0, useToString: true },
    expected: "() => () => () => new Date('2020-01-03')",
  },
  {
    id: 126,
    input: { value: () => () => () => new Set(['value1', 'value2']), depth: 0, useToString: true },
    expected: "() => () => () => new Set(['value1', 'value2'])",
  },
  {
    id: 127,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 0,
      useToString: true,
    },
    expected: `() => () => () => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 128,
    input: { value: () => () => () => Symbol(100), depth: 0, useToString: true },
    expected: '() => () => () => Symbol(100)',
  },
  {
    id: 129,
    input: { value: () => () => () => true, depth: 0, useToString: true },
    expected: '() => () => () => true',
  },
  {
    id: 130,
    input: { value: () => () => () => false, depth: 0, useToString: true },
    expected: '() => () => () => false',
  },
  {
    id: 131,
    input: { value: () => () => () => undefined, depth: 0, useToString: true },
    expected: '() => () => () => undefined',
  },
  {
    id: 132,
    input: { value: () => () => () => null, depth: 0, useToString: true },
    expected: '() => () => () => null',
  },
  {
    id: 133,
    input: { value: () => () => () => NaN, depth: 0, useToString: true },
    expected: '() => () => () => NaN',
  },
  {
    id: 134,
    input: {
      value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 0,
      useToString: true,
    },
    expected: `() => () => () => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 135,
    input: { value: () => () => () => Infinity, depth: 0, useToString: true },
    expected: '() => () => () => Infinity',
  },
  {
    id: 136,
    input: { value: () => () => () => -Infinity, depth: 0, useToString: true },
    expected: '() => () => () => -Infinity',
  },
  { id: 137, input: { value: 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 138, input: { value: '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 139, input: { value: { obj: true }, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 140, input: { value: [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 141, input: { value: () => '33', depth: 1 }, expected: '33' },
  { id: 142, input: { value: new Date('2020-01-03'), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 143,
    input: { value: new Set(['value1', 'value2']), depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 144,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
      depth: 1,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 145, input: { value: Symbol(100), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 146, input: { value: true, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 147, input: { value: false, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 148, input: { value: undefined, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 149, input: { value: null, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 150, input: { value: NaN, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 151,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 152, input: { value: Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 153, input: { value: -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 154, input: { value: () => 'some', depth: 1 }, expected: 'some' },
  { id: 155, input: { value: () => '5876', depth: 1 }, expected: '5876' },
  { id: 156, input: { value: () => ({ obj: true }), depth: 1 }, expected: { obj: true } },
  { id: 157, input: { value: () => [1, 2], depth: 1 }, expected: [1, 2] },
  {
    id: 158,
    input: { value: () => () => '33', depth: 1, useToString: true },
    expected: "() => '33'",
  },
  { id: 159, input: { value: () => new Date(99), depth: 1 }, expected: new Date(99) },
  {
    id: 160,
    input: { value: () => new Set(['value1', 'value2']), depth: 1 },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 161,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 1,
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  {
    id: 162,
    input: { value: () => Symbol(100), depth: 1, useToString: true },
    expected: 'Symbol(100)',
  },
  { id: 163, input: { value: () => true, depth: 1 }, expected: true },
  { id: 164, input: { value: () => false, depth: 1 }, expected: false },
  { id: 165, input: { value: () => undefined, depth: 1 }, expected: undefined },
  { id: 166, input: { value: () => null, depth: 1 }, expected: null },
  { id: 167, input: { value: () => NaN, depth: 1 }, expected: NaN },
  {
    id: 168,
    input: {
      value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 1,
      useToString: true,
    },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 169, input: { value: () => Infinity, depth: 1 }, expected: Infinity },
  { id: 170, input: { value: () => -Infinity, depth: 1 }, expected: -Infinity },
  {
    id: 171,
    input: { value: () => () => 'some', depth: 1, useToString: true },
    expected: "() => 'some'",
  },
  {
    id: 172,
    input: { value: () => () => '5876', depth: 1, useToString: true },
    expected: "() => '5876'",
  },
  {
    id: 173,
    input: { value: () => () => ({ obj: true }), depth: 1, useToString: true },
    expected: `() => ({
      obj: true
    })`,
  },
  {
    id: 174,
    input: { value: () => () => [1, 2], depth: 1, useToString: true },
    expected: '() => [1, 2]',
  },
  {
    id: 175,
    input: { value: () => () => () => '33', depth: 1, useToString: true },
    expected: "() => () => '33'",
  },
  {
    id: 176,
    input: { value: () => () => new Date('2020-01-03'), depth: 1, useToString: true },
    expected: "() => new Date('2020-01-03')",
  },
  {
    id: 177,
    input: { value: () => () => new Set(['value1', 'value2']), depth: 1, useToString: true },
    expected: "() => new Set(['value1', 'value2'])",
  },
  {
    id: 178,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 1,
      useToString: true,
    },
    expected: `() => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 179,
    input: { value: () => () => Symbol(100), depth: 1, useToString: true },
    expected: '() => Symbol(100)',
  },
  {
    id: 180,
    input: { value: () => () => true, depth: 1, useToString: true },
    expected: '() => true',
  },
  {
    id: 181,
    input: { value: () => () => false, depth: 1, useToString: true },
    expected: '() => false',
  },
  {
    id: 182,
    input: { value: () => () => undefined, depth: 1, useToString: true },
    expected: '() => undefined',
  },
  {
    id: 183,
    input: { value: () => () => null, depth: 1, useToString: true },
    expected: '() => null',
  },
  {
    id: 184,
    input: { value: () => () => NaN, depth: 1, useToString: true },
    expected: '() => NaN',
  },
  {
    id: 185,
    input: {
      value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 1,
      useToString: true,
    },
    expected: `() => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 186,
    input: { value: () => () => Infinity, depth: 1, useToString: true },
    expected: '() => Infinity',
  },
  {
    id: 187,
    input: { value: () => () => -Infinity, depth: 1, useToString: true },
    expected: '() => -Infinity',
  },
  {
    id: 188,
    input: { value: () => () => () => 'some', depth: 1, useToString: true },
    expected: "() => () => 'some'",
  },
  {
    id: 189,
    input: { value: () => () => () => '5876', depth: 1, useToString: true },
    expected: "() => () => '5876'",
  },
  {
    id: 190,
    input: { value: () => () => () => ({ obj: true }), depth: 1, useToString: true },
    expected: `() => () => ({
      obj: true
    })`,
  },
  {
    id: 191,
    input: { value: () => () => () => [1, 2], depth: 1, useToString: true },
    expected: '() => () => [1, 2]',
  },
  {
    id: 192,
    input: { value: () => () => () => () => '33', depth: 1, useToString: true },
    expected: "() => () => () => '33'",
  },
  {
    id: 193,
    input: { value: () => () => () => new Date('2020-01-03'), depth: 1, useToString: true },
    expected: "() => () => new Date('2020-01-03')",
  },
  {
    id: 194,
    input: { value: () => () => () => new Set(['value1', 'value2']), depth: 1, useToString: true },
    expected: "() => () => new Set(['value1', 'value2'])",
  },
  {
    id: 195,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 1,
      useToString: true,
    },
    expected: `() => () => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 196,
    input: { value: () => () => () => Symbol(100), depth: 1, useToString: true },
    expected: '() => () => Symbol(100)',
  },
  {
    id: 197,
    input: { value: () => () => () => true, depth: 1, useToString: true },
    expected: '() => () => true',
  },
  {
    id: 198,
    input: { value: () => () => () => false, depth: 1, useToString: true },
    expected: '() => () => false',
  },
  {
    id: 199,
    input: { value: () => () => () => undefined, depth: 1, useToString: true },
    expected: '() => () => undefined',
  },
  {
    id: 200,
    input: { value: () => () => () => null, depth: 1, useToString: true },
    expected: '() => () => null',
  },
  {
    id: 201,
    input: { value: () => () => () => NaN, depth: 1, useToString: true },
    expected: '() => () => NaN',
  },
  {
    id: 202,
    input: {
      value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 1,
      useToString: true,
    },
    expected: `() => () => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 203,
    input: { value: () => () => () => Infinity, depth: 1, useToString: true },
    expected: '() => () => Infinity',
  },
  {
    id: 204,
    input: { value: () => () => () => -Infinity, depth: 1, useToString: true },
    expected: '() => () => -Infinity',
  },
  { id: 205, input: { value: 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 206, input: { value: '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 207, input: { value: { obj: true }, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 208, input: { value: [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 209, input: { value: () => '33', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 210, input: { value: new Date('2020-01-03'), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 211,
    input: { value: new Set(['value1', 'value2']), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 212,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 213, input: { value: Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 214, input: { value: true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 215, input: { value: false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 216, input: { value: undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 217, input: { value: null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 218, input: { value: NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 219,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 220, input: { value: Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 221, input: { value: -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 222, input: { value: () => 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 223, input: { value: () => '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 224, input: { value: () => ({ obj: true }), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 225, input: { value: () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 226, input: { value: () => () => '33', depth: 2 }, expected: '33' },
  {
    id: 227,
    input: { value: () => new Date('2020-01-03'), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 228,
    input: { value: () => new Set(['value1', 'value2']), depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 229,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 230, input: { value: () => Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 231, input: { value: () => true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 232, input: { value: () => false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 233, input: { value: () => undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 234, input: { value: () => null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 235, input: { value: () => NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 236,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 237, input: { value: () => Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 238, input: { value: () => -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 239, input: { value: () => () => 'some', depth: 2 }, expected: 'some' },
  { id: 240, input: { value: () => () => '5876', depth: 2 }, expected: '5876' },
  { id: 241, input: { value: () => () => ({ obj: true }), depth: 2 }, expected: { obj: true } },
  { id: 242, input: { value: () => () => [1, 2], depth: 2 }, expected: [1, 2] },
  {
    id: 243,
    input: { value: () => () => () => '33', depth: 2, useToString: true },
    expected: "() => '33'",
  },
  {
    id: 244,
    input: { value: () => () => new Date('1990-12-05'), depth: 2 },
    expected: new Date('1990-12-05'),
  },
  {
    id: 245,
    input: { value: () => () => new Set(['value1', 'value2']), depth: 2 },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 246,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 2,
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  {
    id: 247,
    input: { value: () => () => Symbol(100), depth: 2, useToString: true },
    expected: 'Symbol(100)',
  },
  { id: 248, input: { value: () => () => true, depth: 2 }, expected: true },
  { id: 249, input: { value: () => () => false, depth: 2 }, expected: false },
  { id: 250, input: { value: () => () => undefined, depth: 2 }, expected: undefined },
  { id: 251, input: { value: () => () => null, depth: 2 }, expected: null },
  { id: 252, input: { value: () => () => NaN, depth: 2 }, expected: NaN },
  {
    id: 253,
    input: {
      value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 2,
      useToString: true,
    },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 254, input: { value: () => () => Infinity, depth: 2 }, expected: Infinity },
  { id: 255, input: { value: () => () => -Infinity, depth: 2 }, expected: -Infinity },
  {
    id: 256,
    input: { value: () => () => () => 'some', depth: 2, useToString: true },
    expected: "() => 'some'",
  },
  {
    id: 257,
    input: { value: () => () => () => '5876', depth: 2, useToString: true },
    expected: "() => '5876'",
  },
  {
    id: 258,
    input: { value: () => () => () => ({ obj: true }), depth: 2, useToString: true },
    expected: `() => ({
      obj: true
    })`,
  },
  {
    id: 259,
    input: { value: () => () => () => [1, 2], depth: 2, useToString: true },
    expected: '() => [1, 2]',
  },
  {
    id: 260,
    input: { value: () => () => () => () => '33', depth: 2, useToString: true },
    expected: "() => () => '33'",
  },
  {
    id: 261,
    input: { value: () => () => () => new Date('2020-01-03'), depth: 2, useToString: true },
    expected: "() => new Date('2020-01-03')",
  },
  {
    id: 262,
    input: { value: () => () => () => new Set(['value1', 'value2']), depth: 2, useToString: true },
    expected: "() => new Set(['value1', 'value2'])",
  },
  {
    id: 263,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 2,
      useToString: true,
    },
    expected: `() => new Map([['name', 'Alina'], ['age', '23']])`,
  },
  {
    id: 264,
    input: { value: () => () => () => Symbol(100), depth: 2, useToString: true },
    expected: '() => Symbol(100)',
  },
  {
    id: 265,
    input: { value: () => () => () => true, depth: 2, useToString: true },
    expected: '() => true',
  },
  {
    id: 266,
    input: { value: () => () => () => false, depth: 2, useToString: true },
    expected: '() => false',
  },
  {
    id: 267,
    input: { value: () => () => () => undefined, depth: 2, useToString: true },
    expected: '() => undefined',
  },
  {
    id: 268,
    input: { value: () => () => () => null, depth: 2, useToString: true },
    expected: '() => null',
  },
  {
    id: 269,
    input: { value: () => () => () => NaN, depth: 2, useToString: true },
    expected: '() => NaN',
  },
  {
    id: 270,
    input: {
      value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 2,
      useToString: true,
    },
    expected: `() => [() => 'some', {
      who: 'I\`m'
    }, 55, 'yes', true]`,
  },
  {
    id: 271,
    input: { value: () => () => () => Infinity, depth: 2, useToString: true },
    expected: '() => Infinity',
  },
  {
    id: 272,
    input: { value: () => () => () => -Infinity, depth: 2, useToString: true },
    expected: '() => -Infinity',
  },
  { id: 273, input: { value: 'some', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 274, input: { value: '5876', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 275, input: { value: { obj: true }, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 276, input: { value: [1, 2], depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 277, input: { value: () => '33', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 278, input: { value: new Date('2020-02-02'), depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 279,
    input: { value: new Set(['value1', 'value2']), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 280,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 281, input: { value: Symbol(100), depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 282, input: { value: true, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 283, input: { value: false, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 284, input: { value: undefined, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 285, input: { value: null, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 286, input: { value: NaN, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 287,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 288, input: { value: Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 289, input: { value: -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 290, input: { value: () => 'some', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 291, input: { value: () => '5876', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 292, input: { value: () => ({ obj: true }), depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 293, input: { value: () => [1, 2], depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 294, input: { value: () => () => '33', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 295,
    input: { value: () => new Date('2020-01-02'), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 296,
    input: { value: () => new Set(['value1', 'value2']), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 297,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 298, input: { value: () => Symbol(100), depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 299, input: { value: () => true, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 300, input: { value: () => false, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 301, input: { value: () => undefined, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 302, input: { value: () => null, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 303, input: { value: () => NaN, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 304,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 305, input: { value: () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 306, input: { value: () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 307, input: { value: () => () => 'some', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 308, input: { value: () => () => '5876', depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 309,
    input: { value: () => () => ({ obj: true }), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 310, input: { value: () => () => [1, 2], depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 311, input: { value: () => () => () => '33', depth: 3 }, expected: '33' },
  {
    id: 312,
    input: { value: () => () => new Date('2020-01-01'), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 313,
    input: { value: () => () => new Set(['value1', 'value2']), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 314,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 315,
    input: { value: () => () => Symbol(100), depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 316, input: { value: () => () => true, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 317, input: { value: () => () => false, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 318, input: { value: () => () => undefined, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 319, input: { value: () => () => null, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 320, input: { value: () => () => NaN, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 321,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 3 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 322, input: { value: () => () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 323, input: { value: () => () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 324, input: { value: () => () => () => 'some', depth: 3 }, expected: 'some' },
  { id: 325, input: { value: () => () => () => '5876', depth: 3 }, expected: '5876' },
  {
    id: 326,
    input: { value: () => () => () => ({ obj: true }), depth: 3 },
    expected: { obj: true },
  },
  { id: 327, input: { value: () => () => () => [1, 2], depth: 3 }, expected: [1, 2] },
  {
    id: 328,
    input: { value: () => () => () => () => '33', depth: 3, useToString: true },
    expected: "() => '33'",
  },
  { id: 329, input: { value: () => () => () => new Date(7), depth: 3 }, expected: new Date(7) },
  {
    id: 330,
    input: { value: () => () => () => new Set(['value1', 'value2']), depth: 3 },
    expected: new Set(['value1', 'value2']),
  },
  {
    id: 331,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 3,
    },
    expected: new Map([
      ['name', 'Alina'],
      ['age', '23'],
    ]),
  },
  {
    id: 332,
    input: { value: () => () => () => Symbol(100), depth: 3, useToString: true },
    expected: 'Symbol(100)',
  },
  {
    id: 333,
    input: { value: () => () => () => true, depth: 3 },
    expected: true,
  },
  { id: 334, input: { value: () => () => () => false, depth: 3 }, expected: false },
  { id: 335, input: { value: () => () => () => undefined, depth: 3 }, expected: undefined },
  { id: 336, input: { value: () => () => () => null, depth: 3 }, expected: null },
  { id: 337, input: { value: () => () => () => NaN, depth: 3 }, expected: NaN },
  {
    id: 338,
    input: {
      value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true],
      depth: 3,
      useToString: true,
    },
    expected: "() => 'some',[object Object],55,yes,true",
  },
  { id: 339, input: { value: () => () => () => Infinity, depth: 3 }, expected: Infinity },
  { id: 340, input: { value: () => () => () => -Infinity, depth: 3 }, expected: -Infinity },
  { id: 341, input: { value: 'some', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 342, input: { value: '5876', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 343, input: { value: { obj: true }, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 344, input: { value: [1, 2], depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 345, input: { value: () => '33', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 346, input: { value: new Date(7), depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 347,
    input: { value: new Set(['value1', 'value2']), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 348,
    input: {
      value: new Map([
        ['name', 'Alina'],
        ['age', '23'],
      ]),
      depth: 4,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 349, input: { value: Symbol(100), depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 350, input: { value: true, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 351, input: { value: false, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 352, input: { value: undefined, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 353, input: { value: null, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 354, input: { value: NaN, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 355,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 356, input: { value: Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 357, input: { value: -Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 358, input: { value: () => 'some', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 359, input: { value: () => '5876', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 360, input: { value: () => ({ obj: true }), depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 361, input: { value: () => [1, 2], depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 362, input: { value: () => () => '33', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 363, input: { value: () => new Date(6), depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 364,
    input: { value: () => new Set(['value1', 'value2']), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 365,
    input: {
      value: () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 4,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 366, input: { value: () => Symbol(100), depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 367, input: { value: () => true, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 368, input: { value: () => false, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 369, input: { value: () => undefined, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 370, input: { value: () => null, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 371, input: { value: () => NaN, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 372,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 373, input: { value: () => Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 374, input: { value: () => -Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 375, input: { value: () => () => 'some', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 376, input: { value: () => () => '5876', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 377,
    input: { value: () => () => ({ obj: true }), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 378, input: { value: () => () => [1, 2], depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 379, input: { value: () => () => () => '33', depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 380,
    input: { value: () => () => new Date(2), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 381,
    input: { value: () => () => new Set(['value1', 'value2']), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 382,
    input: {
      value: () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 4,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 383,
    input: { value: () => () => Symbol(100), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 384, input: { value: () => () => true, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 385, input: { value: () => () => false, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 386, input: { value: () => () => undefined, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 387, input: { value: () => () => null, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 388, input: { value: () => () => NaN, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 389,
    input: { value: () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 390, input: { value: () => () => Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 391, input: { value: () => () => -Infinity, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 392,
    input: { value: () => () => () => 'some', depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 393,
    input: { value: () => () => () => '5876', depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 394,
    input: { value: () => () => () => ({ obj: true }), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 395,
    input: { value: () => () => () => [1, 2], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 396, input: { value: () => () => () => () => '33', depth: 4 }, expected: '33' },
  {
    id: 397,
    input: { value: () => () => () => new Date(5), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 398, input: { value: () => () => () => 222, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 399,
    input: {
      value: () => () => () =>
        new Map([
          ['name', 'Alina'],
          ['age', '23'],
        ]),
      depth: 4,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 400,
    input: { value: () => () => () => Symbol(100), depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 401, input: { value: () => () => () => true, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 402,
    input: { value: () => () => () => false, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 403,
    input: { value: () => () => () => undefined, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 404, input: { value: () => () => () => null, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 405, input: { value: () => () => () => NaN, depth: 4 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 406,
    input: { value: () => () => () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 407,
    input: { value: () => () => () => Infinity, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 408,
    input: { value: () => () => () => -Infinity, depth: 4 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
];

export const invalidCases: CaseElements = [
  { id: 1, input: { value: 'some', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 2, input: { value: '5876', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 3, input: { value: { obj: true }, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 4, input: { value: [1, 2], depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 5, input: { value: '33', depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 6, input: { value: new Date(5), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 7, input: { value: new Set(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 8, input: { value: new Map(), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 9, input: { value: Symbol(100), depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 10, input: { value: true, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 11, input: { value: false, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 12, input: { value: undefined, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 13, input: { value: null, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 14, input: { value: NaN, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 15,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 1 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 16, input: { value: 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 17, input: { value: '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 18, input: { value: { obj: true }, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 19, input: { value: [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 20, input: { value: () => '33', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 21, input: { value: new Date(4), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 22, input: { value: new Set(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 23, input: { value: new Map(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 24, input: { value: Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 25, input: { value: true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 26, input: { value: false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 27, input: { value: undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 28, input: { value: null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 29, input: { value: NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 30,
    input: { value: [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 31, input: { value: () => 'some', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 32, input: { value: () => '5876', depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 33, input: { value: () => ({ obj: true }), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 34, input: { value: () => [1, 2], depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 35, input: { value: () => new Date(3), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 36, input: { value: () => new Set(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 37, input: { value: () => new Map(), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 38, input: { value: () => Symbol(100), depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 39, input: { value: () => true, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 40, input: { value: () => false, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 41, input: { value: () => undefined, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 42, input: { value: () => null, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 43, input: { value: () => NaN, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 44,
    input: { value: () => [() => 'some', { who: 'I`m' }, 55, 'yes', true], depth: 2 },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  { id: 45, input: { value: Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 46, input: { value: Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 47, input: { value: Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 48, input: { value: () => Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 49, input: { value: -Infinity, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 50, input: { value: -Infinity, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 51, input: { value: -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 52, input: { value: () => -Infinity, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 53, input: { value: /ab+c/, depth: 1 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 54, input: { value: /ab+c/, depth: 2 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 55, input: { value: /ab+c/, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  { id: 56, input: { value: () => /ab+c/, depth: 3 }, expected: DEFAULT_EXPECTED_VALUE },
  {
    id: 57,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 1,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 58,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 2,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 59,
    input: {
      value: new Promise((resolve, reject) => {
        resolve('Done!');
      }),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },
  {
    id: 60,
    input: {
      value: () =>
        new Promise((resolve, reject) => {
          resolve('Done!');
        }),
      depth: 3,
    },
    expected: DEFAULT_EXPECTED_VALUE,
  },

  ...getInvalidAnyDepth(61),
];
