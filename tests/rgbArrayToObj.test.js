const _ = require('../dist');

describe('RGB array to object', () => {
  const testCases = [{ input: [1, 2, 3], expected: { r: 1, g: 2, b: 3 } }];

  testCases.forEach((test) => {
    it(`input: ${test.input}, expected: ${test.expected}`, () => {
      const actual = _.rgbArrayToObj(test.input);
      expect(actual).toStrictEqual(test.expected);
    });
  });
});
