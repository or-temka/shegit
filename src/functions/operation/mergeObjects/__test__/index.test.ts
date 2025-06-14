// src/functions/operation/object/mergeObjects.test.ts
import { mergeObjects } from '../index';

describe('mergeObjects', () => {
  it('Basic Merge: retains obj1 values and adds obj2 values', () => {
    expect(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 2, c: 4 });
  });

  it('Deep Merge with Nested Objects', () => {
    const o1 = { x: 1, nest: { a: 10, b: 20 } };
    const o2 = { y: 2, nest: { b: 30, c: 40 } };
    expect(mergeObjects(o1, o2)).toEqual({
      x: 1,
      y: 2,
      nest: { a: 10, b: 20, c: 40 },
    });
  });

  it('Merges deeply nested beyond two levels', () => {
    const o1 = { level1: { level2: { foo: 'bar' } } };
    const o2 = { level1: { level2: { baz: 'qux' }, extra: 123 }, other: true };
    expect(mergeObjects(o1, o2)).toEqual({
      level1: { level2: { foo: 'bar', baz: 'qux' }, extra: 123 },
      other: true,
    });
  });

  it('Preserves originals (no mutation)', () => {
    const a = { k: 5, nest: { p: 7 } };
    const b = { nest: { q: 8 } };
    const res = mergeObjects(a, b);
    // original objects unchanged
    expect(a).toEqual({ k: 5, nest: { p: 7 } });
    expect(b).toEqual({ nest: { q: 8 } });
    // nested objects are not the same references
    expect(res.nest).not.toBe(a.nest);
    expect(res.nest).not.toBe(b.nest);
  });

  it('Empty objects produce empty object', () => {
    expect(mergeObjects({}, {})).toEqual({});
  });

  it('Throws on non-plain inputs', () => {
    // @ts-expect-error
    expect(() => mergeObjects(null, {})).toThrow(TypeError);
    // @ts-expect-error
    expect(() => mergeObjects({}, 42)).toThrow(TypeError);
    // @ts-expect-error
    expect(() => mergeObjects([], {})).toThrow(TypeError);
    // @ts-expect-error
    expect(() => mergeObjects({}, new Date())).toThrow(TypeError);
  });

  it('Throws on top-level circular reference in obj1', () => {
    const o1: any = { a: 1 };
    o1.self = o1;
    expect(() => mergeObjects(o1, {})).toThrow(/Circular reference/);
  });

  it('Throws on deeper circular reference in nested obj1', () => {
    const o1: any = { nested: {} };
    o1.nested.self = o1.nested;
    expect(() => mergeObjects(o1, {})).toThrow(/Circular reference/);
  });

  it('Copies arrays by deep clone', () => {
    const arr = [1, { a: 2 }];
    const o1 = { list: arr };
    const res = mergeObjects(o1, {});
    expect(res.list).toEqual(arr);
    expect(res.list).not.toBe(arr);
    // nested element also deep-copied
    expect(res.list[1]).toEqual({ a: 2 });
    expect(res.list[1]).not.toBe(arr[1]);
  });

  it('Copies Date, Map, Set values by deep clone', () => {
    const date = new Date(2020, 0, 1);
    const map = new Map<string, number>([['key', 42]]);
    const set = new Set<number>([7]);
    const o1 = { date, map, set };
    const res = mergeObjects(o1, {});
    expect(res.date).toEqual(date);
    expect(res.date).not.toBe(date);
    expect(res.map).toEqual(map);
    expect(res.map).not.toBe(map);
    expect(res.set).toEqual(set);
    expect(res.set).not.toBe(set);
  });

  it('Does not merge nested non-plain objects (Date)', () => {
    const d1 = new Date(0);
    const d2 = new Date(10000);
    const result = mergeObjects({ d: d1 }, { d: d2 });
    // obj1's Date should override, deep-copied
    expect(result.d.getTime()).toBe(d1.getTime());
    expect(result.d).not.toBe(d1);
  });

  it('Ignores symbol-keyed properties', () => {
    const sym = Symbol('foo');
    const o1: any = { a: 1 };
    o1[sym] = 99;
    const o2: any = { b: 2 };
    o2[sym] = 100;
    const result: any = mergeObjects(o1, o2);
    expect(result.a).toBe(1);
    expect(result.b).toBe(2);
    // symbol properties should not be present
    expect(Object.getOwnPropertySymbols(result)).not.toContain(sym);
  });
});
