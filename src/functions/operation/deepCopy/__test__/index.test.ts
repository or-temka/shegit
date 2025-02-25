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

  it('should handle nested circular references', () => {
    const original: any = { a: 1, b: {} };
    original.b.circular = original;

    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied.b.circular).toBe(copied);
  });

  it('should handle objects with symbol keys', () => {
    const key = Symbol('key');
    const original = { [key]: 'value' };
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied[key]).toBe(original[key]);
  });

  it('should handle objects with prototype methods', () => {
    class TestClass {
      public value: number;

      constructor(value: number) {
        this.value = value;
      }

      public method() {
        return this.value;
      }
    }
    const original = new TestClass(42);
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied.method()).toBe(original.method());
  });

  it('should handle Promises (by reference)', () => {
    const original = Promise.resolve(42);
    const copied = deepCopy(original);

    expect(copied).toBe(original);
  });

  it('should handle Errors', () => {
    const original = new Error('Test error');
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should handle Buffers (Node.js)', () => {
    const original = Buffer.from('test');
    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
  });

  it('should handle complex mixed structures', () => {
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
      h: { i: { j: { k: 'deep' } } },
      circular: null as any,
    };
    original.circular = original;

    const copied = deepCopy(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.b).not.toBe(original.b);
    expect(copied.b[2]).not.toBe(original.b[2]);
    expect(copied.d).not.toBe(original.d);
    expect(copied.e).not.toBe(original.e);
    expect(copied.f).not.toBe(original.f);
    expect(copied.g).not.toBe(original.g);
    expect(copied.h.i.j).not.toBe(original.h.i.j);
    expect(copied.circular).toBe(copied);
  });
});
