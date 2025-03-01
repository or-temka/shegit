import { compareObjects } from '../../../../../dist';

describe('deepCopy', () => {
  it('should return differences by default', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 4 } };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: 3, c: { d: 4 } });
  });

  it('should return common properties when returnType is "common"', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 3 } };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({ a: 1, c: { d: 3 } });
  });

  it('should handle deeply nested objects with differences', () => {
    const obj1 = { a: { b: { c: { d: 1 } } } };
    const obj2 = { a: { b: { c: { d: 2 } } } };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ a: { b: { c: { d: 2 } } } });
  });

  it('should handle deeply nested objects with common properties', () => {
    const obj1 = { a: { b: { c: { d: 1 } } } };
    const obj2 = { a: { b: { c: { d: 1 } } } };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({ a: { b: { c: { d: 1 } } } });
  });

  it('should handle arrays', () => {
    const obj1 = { a: [1, 2, 3] };
    const obj2 = { a: [1, 2, 3] };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({ a: [1, 2, 3] });
  });

  it('should handle arrays with differences', () => {
    const obj1 = { a: [1, 2, 3] };
    const obj2 = { a: [4, 5, 6] };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ a: [4, 5, 6] });
  });

  it('should handle null values correctly', () => {
    const obj1 = { a: null, b: 2 };
    const obj2 = { a: null, b: 3 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: 3 });
  });

  it('should handle undefined values correctly', () => {
    const obj1 = { a: undefined, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle mixed types correctly', () => {
    const obj1 = { a: 1, b: 'hello', c: true };
    const obj2 = { a: 1, b: 'world', c: false };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: 'world', c: false });
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = {};
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({});
  });

  it('should handle one empty object and one non-empty object', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle objects with different structures', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: 2 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: 2 });
  });

  it('should handle objects with missing keys in one object', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: undefined });
  });

  it('should handle objects with additional keys in one object', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1, b: 2 };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({ b: 2 });
  });

  it('should handle complex nested structures with differences', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    };
    const obj2 = {
      a: 1,
      b: {
        c: [1, 2, 4],
        d: { e: { f: 6 } },
      },
    };
    const result = compareObjects(obj1, obj2);
    expect(result).toEqual({
      b: {
        c: [1, 2, 4],
        d: { e: { f: 6 } },
      },
    });
  });

  it('should handle complex nested structures with common properties', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    };
    const obj2 = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    });
  });

  it('should handle complex nested structures with different properties', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    };
    const obj2 = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: { e: { f: 5 } },
      },
    };
    const result = compareObjects(obj1, obj2, 'diff');
    expect(result).toEqual({});
  });

  it('should handle functions as primitives', () => {
    const obj1 = { a: () => {} };
    const obj2 = { a: () => {} };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({});
  });

  it('should handle Symbols as primitives', () => {
    const sym1 = Symbol('test');
    const sym2 = Symbol('test');
    const obj1 = { a: sym1 };
    const obj2 = { a: sym2 };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({});
  });

  it('should handle Dates as primitives', () => {
    const date1 = new Date(2023, 1, 1);
    const date2 = new Date(2023, 1, 1);
    const obj1 = { a: date1 };
    const obj2 = { a: date2 };
    const result = compareObjects(obj1, obj2, 'common');
    expect(result).toEqual({});
  });
});
