import { CaseElements } from './types';

export const validCases: CaseElements = [
  { id: 1, input: { r: 1, g: 2, b: 3 }, expected: [1, 2, 3] },
  { id: 2, input: { r: 0, g: 0, b: 0 }, expected: [0, 0, 0] },
  { id: 3, input: { r: 255, g: 255, b: 255 }, expected: [255, 255, 255] },
  { id: 4, input: { r: 53, g: 84, b: 2 }, expected: [53, 84, 2] },
];

export const partialArrays: CaseElements = [
  { id: 5, input: { r: 234, g: 12 }, expected: [234, 12, 0] },
  { id: 6, input: { r: 85 }, expected: [85, 0, 0] },
];

export const extraElements: CaseElements = [
  { id: 7, input: { r: 124, g: 62, b: 55, a: 0.5 }, expected: [124, 62, 55] },
  { id: 8, input: { r: 5, g: 42, b: 0, a: 12, other: 'some' }, expected: [5, 42, 0] },
];

export const invalidTypes: CaseElements = [
  { id: 13, input: 5345, expected: [0, 0, 0] },
  { id: 14, input: '5876', expected: [0, 0, 0] },
  { id: 15, input: 'John', expected: [0, 0, 0] },
  { id: 16, input: { name: 'John' }, expected: [0, 0, 0] },
  { id: 18, input: () => 4, expected: [0, 0, 0] },
];

export const mixedCases: CaseElements = [
  { id: 20, input: () => ({ r: 15, g: -26, b: '+64' }), expected: [15, 0, 64] },
  { id: 23, input: { r: '--126', g: false, b: '+267' }, expected: [0, 0, 255] },
];
