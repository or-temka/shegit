const _ = require('../dist');

describe('To color - convert a color of one type to another', () => {
  const testCasesForObject = [
    { id: 1, input: { color: [1, 2, 3], to: 'object' }, expected: { r: 1, g: 2, b: 3, a: 1 } },
    { id: 2, input: { color: [0, 0, 0], to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 3,
      input: { color: [255, 255, 255], to: 'object' },
      expected: { r: 255, g: 255, b: 255, a: 1 },
    },
    { id: 4, input: { color: [53, 84, 2], to: 'object' }, expected: { r: 53, g: 84, b: 2, a: 1 } },
    { id: 5, input: { color: [234, 12], to: 'object' }, expected: { r: 234, g: 12, b: 0, a: 1 } },
    { id: 6, input: { color: [85], to: 'object' }, expected: { r: 85, g: 0, b: 0, a: 1 } },
    {
      id: 7,
      input: { color: [124, 62, 55, 0.5], to: 'object' },
      expected: { r: 124, g: 62, b: 55, a: 1 },
    },
    {
      id: 8,
      input: { color: [5, 42, 0, 342, 23], to: 'object' },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
    {
      id: 9,
      input: { color: [63.3, 55.8, 0], to: 'object' },
      expected: { r: 63, g: 55, b: 0, a: 1 },
    },
    {
      id: 10,
      input: { color: ['0', '255', -5], to: 'object' },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 11,
      input: { color: ['-86', 266, '.0'], to: 'object' },
      expected: { r: 0, g: 255, b: 0, a: 1 },
    },
    {
      id: 12,
      input: { color: [{ name: 'John' }, [23, 76], () => 4], to: 'object' },
      expected: { r: 0, g: 0, b: 4, a: 1 },
    },
    { id: 13, input: { color: 5345, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 14, input: { color: '5876', to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 15, input: { color: 'John', to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 16,
      input: { color: { name: 'John' }, to: 'object' },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    { id: 17, input: { color: [], to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 18, input: { color: () => 4, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 19,
      input: {
        color: () => ({
          name: 'John',
        }),
        to: 'object',
      },
      expected: { r: 0, g: 0, b: 0, a: 1 },
    },
    {
      id: 20,
      input: { color: () => [15, -26, '+64'], to: 'object' },
      expected: { r: 15, g: 0, b: 64, a: 1 },
    },
    { id: 21, input: { color: true, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    { id: 22, input: { color: 35.345, to: 'object' }, expected: { r: 0, g: 0, b: 0, a: 1 } },
    {
      id: 23,
      input: { color: ['--126', false, '+267'], to: 'object' },
      expected: { r: 0, g: 0, b: 255, a: 1 },
    },
  ];
  const lastCaseId = testCasesForObject[testCasesForObject.length - 1].id;

  testCasesForObject.forEach((test) => {
    it(`(${test.id}/${lastCaseId}) input color: ${test.input.color} input to type: ${
      test.input.to
    }, expected: ${JSON.stringify(test.expected)}`, () => {
      const actual = _.toColor(test.input.color, test.input.to);
      expect(actual).toStrictEqual(test.expected);
    });
  });
});
