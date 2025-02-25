import { deepCopy } from '../../../../../dist';

describe('deepCopy', () => {
  it('should copy primitives', () => {
    expect(deepCopy(42)).toBe(42);
    expect(deepCopy('hello')).toBe('hello');
    expect(deepCopy(true)).toBe(true);
    expect(deepCopy(null)).toBe(null);
    expect(deepCopy(undefined)).toBe(undefined);
  });

  it('should copy arrays', () => {
    const original = [1, 2, { a: 3 }];
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied[2]).not.toBe(original[2]);
  });

  it('should copy objects', () => {
    const original = { a: 1, b: { c: 2 } };
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.b).not.toBe(original.b);
  });

  it('should copy dates', () => {
    const original = new Date();
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should copy regular expressions', () => {
    const original = /test/g;
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should copy Maps', () => {
    const original = new Map([
      [1, 'one'],
      [2, 'two'],
    ]);
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should copy Sets', () => {
    const original = new Set([1, 2, 3]);
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should handle nested structures', () => {
    const original = {
      a: 1,
      b: [2, 3, { c: 4 }],
      d: new Date(),
      e: /test/g,
      f: new Map([
        [1, 'one'],
        [2, 'two'],
      ]),
      g: new Set([1, 2, 3]),
    };
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.b).not.toBe(original.b);
    expect(copied.b[2]).not.toBe(original.b[2]);
    expect(copied.d).not.toBe(original.d);
    expect(copied.e).not.toBe(original.e);
    expect(copied.f).not.toBe(original.f);
    expect(copied.g).not.toBe(original.g);
  });

  it('should handle functions (by reference)', () => {
    const original = { a: () => {} };
    const copied = deepCopy(original);

    expect(copied.a).toBe(original.a);
  });

  it('should handle circular references', () => {
    const original: any = { a: 1 };
    original.self = original;

    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied.self).toBe(copied);
  });
});
