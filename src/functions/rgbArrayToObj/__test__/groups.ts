import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: [1, 2, 3], expected: { r: 1, g: 2, b: 3 } },
  { id: 2, input: [0, 0, 0], expected: { r: 0, g: 0, b: 0 } },
  { id: 3, input: [255, 255, 255], expected: { r: 255, g: 255, b: 255 } },
  { id: 4, input: [53, 84, 2], expected: { r: 53, g: 84, b: 2 } },
];

export const partialArrays: CaseElements = [
  { id: 5, input: [234, 12], expected: { r: 234, g: 12, b: 0 } },
  { id: 6, input: [85], expected: { r: 85, g: 0, b: 0 } },
];

export const extraElements: CaseElements = [
  { id: 7, input: [124, 62, 55, 0.5], expected: { r: 124, g: 62, b: 55 } },
  { id: 8, input: [5, 42, 0, 342, 23], expected: { r: 5, g: 42, b: 0 } },
];

export const invalidTypes: CaseElements = [
  { id: 13, input: 5345, expected: { r: 0, g: 0, b: 0 } },
  { id: 14, input: '5876', expected: { r: 0, g: 0, b: 0 } },
  { id: 15, input: 'John', expected: { r: 0, g: 0, b: 0 } },
  { id: 16, input: { name: 'John' }, expected: { r: 0, g: 0, b: 0 } },
  { id: 18, input: () => 4, expected: { r: 0, g: 0, b: 0 } },
];

export const mixedCases: CaseElements = [
  { id: 20, input: () => [15, -26, '+64'], expected: { r: 15, g: 0, b: 64 } },
  { id: 23, input: ['--126', false, '+267'], expected: { r: 0, g: 0, b: 255 } },
];
