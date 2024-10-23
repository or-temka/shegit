const _ = require('../dist');

describe('RGB array to object', () => {
  const testCases = [
    { id: 1, input: [1, 2, 3], expected: { r: 1, g: 2, b: 3 } },
    { id: 2, input: [0, 0, 0], expected: { r: 0, g: 0, b: 0 } },
    { id: 3, input: [255, 255, 255], expected: { r: 255, g: 255, b: 255 } },
    { id: 4, input: [53, 84, 2], expected: { r: 53, g: 84, b: 2 } },
    { id: 5, input: [234, 12], expected: { r: 234, g: 12, b: 0 } },
    { id: 6, input: [85], expected: { r: 85, g: 0, b: 0 } },
    { id: 7, input: [124, 62, 55, 0.5], expected: { r: 124, g: 62, b: 55 } },
    { id: 8, input: [5, 42, 0, 342, 23], expected: { r: 5, g: 42, b: 0 } },
    { id: 9, input: [63.3, 55.8, 0], expected: { r: 63, g: 55, b: 0 } },
    { id: 10, input: ['0', '255', -5], expected: { r: 0, g: 255, b: 0 } },
    { id: 11, input: ['-86', 266, '.0'], expected: { r: 0, g: 255, b: 0 } },
    {
      id: 12,
      input: [{ name: 'John' }, [23, 76], () => 4],
      expected: { r: 0, g: 0, b: 4 },
    },
    { id: 13, input: 5345, expected: { r: 0, g: 0, b: 0 } },
    { id: 14, input: '5876', expected: { r: 0, g: 0, b: 0 } },
    { id: 15, input: 'John', expected: { r: 0, g: 0, b: 0 } },
    { id: 16, input: { name: 'John' }, expected: { r: 0, g: 0, b: 0 } },
    { id: 17, input: [], expected: { r: 0, g: 0, b: 0 } },
    { id: 18, input: () => 4, expected: { r: 0, g: 0, b: 0 } },
    {
      id: 19,
      input: () => ({
        name: 'John',
      }),
      expected: { r: 0, g: 0, b: 0 },
    },
    { id: 20, input: () => [15, -26, '+64'], expected: { r: 15, g: 0, b: 64 } },
    { id: 21, input: true, expected: { r: 0, g: 0, b: 0 } },
    { id: 22, input: 35.345, expected: { r: 0, g: 0, b: 0 } },
    { id: 23, input: ['--126', false, '+267'], expected: { r: 126, g: 0, b: 267 } },
  ];
  const lastCaseId = testCases[testCases.length - 1].id;

  testCases.forEach((test) => {
    it(`(${test.id}/${lastCaseId}) input: ${test.input}, expected: ${test.expected}`, () => {
      const actual = _.rgbArrayToObj(test.input);
      expect(actual).toStrictEqual(test.expected);
    });
  });
});
