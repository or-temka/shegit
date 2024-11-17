import { describeTestGroups } from '../../../../utils';
import { toColor } from '../../../../dist/functions/toColor';
import { TestGroups } from '../../../../utils/test/describeTestGroups/types';
import { CaseElements, TestGroupCaseElementExpected, TestGroupCaseElementInput } from './types';

describe('To color - convert a color of one type to another', () => {
  const validArrayCases: CaseElements = [
    { id: 1, input: { color: [1, 2, 3], to: 'object' }, expected: { r: 1, g: 2, b: 3, a: 1 } },
    { id: 2, input: { color: [0, 0, 0], to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 3,
      input: { color: [255, 255, 255], to: 'object' },
      expected: { r: 255, g: 255, b: 255, a: 1 },
    },
    { id: 4, input: { color: [53, 84, 2], to: 'object' }, expected: { r: 53, g: 84, b: 2, a: 1 } },
  ];

  const incompleteArrayCases: CaseElements = [
    { id: 5, input: { color: [234, 12], to: 'object' }, expected: { r: 234, g: 12, b: 0, a: 1 } },
    { id: 6, input: { color: [85], to: 'object' }, expected: { r: 85, g: 0, b: 0, a: 1 } },
  ];

  const withAlphaArrayCases: CaseElements = [
    {
      id: 1,
      input: { color: [124, 62, 55, 0.5], to: 'object' },
      expected: { r: 124, g: 62, b: 55, a: 1 },
    },
    {
      id: 2,
      input: { color: [5, 42, 0, 342, 23], to: 'object' },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
  ];

  const nonStandartArrayCases: CaseElements = [
    {
      id: 1,
      input: { color: [63.3, 55.8, 0], to: 'object' },
      expected: { r: 63, g: 55, b: 0, a: 1 },
    },
    {
      id: 2,
      input: { color: ['0', '255', -5], to: 'object' },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 3,
      input: { color: ['-86', 266, '.0'], to: 'object' },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 4,
      input: { color: () => [15, -26, '+64'], to: 'object' },
      expected: { r: 15, g: 0, b: 64, a: 1 },
    },
  ];

  const invalidInputCases: CaseElements = [
    { id: 1, input: { color: 5345, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 2, input: { color: '5876', to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 3,
      input: { color: { name: 'John' }, to: 'object' },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    { id: 4, input: { color: [], to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 5, input: { color: () => 4, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 6,
      input: {
        color: () => ({
          name: 'John',
        }),
        to: 'object',
      },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    { id: 7, input: { color: true, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 8, input: { color: 35.345, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 9,
      input: { color: ['--126', false, '+267'], to: 'object' },
      expected: { r: 0, g: 0, b: 255, a: 1 },
    },
  ];

  const testGroups: TestGroups<TestGroupCaseElementInput, TestGroupCaseElementExpected> = [
    { name: 'Valid RGB arrays', cases: validArrayCases },
    { name: 'Incomplete arrays', cases: incompleteArrayCases },
    { name: 'With alpha arrays', cases: withAlphaArrayCases },
    { name: 'Non-standart arrays', cases: nonStandartArrayCases },
    { name: 'Invalid inputs', cases: invalidInputCases },
  ];

  describeTestGroups({
    testGroups,
    callback: (input) => toColor(input.color, input.to),
  });
});
