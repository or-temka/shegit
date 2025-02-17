import { getRandomValue } from '../../../../../dist';

describe('getRandomValue', () => {
  it('returns a primitive as is', () => {
    expect(getRandomValue(42)).toBe(42);
    expect(getRandomValue('hello')).toBe('hello');
    expect(getRandomValue(true)).toBe(true);
    expect(getRandomValue(null)).toBe(null);
    expect(getRandomValue(undefined)).toBe(undefined);
  });

  it('returns a random value from an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = getRandomValue(array);
    expect(array).toContain(result);
  });

  it('returns a random value from a Set', () => {
    const set = new Set(['a', 'b', 'c']);
    const result = getRandomValue(set);
    expect(set.has(result)).toBe(true);
  });

  it('returns a random value from a Map', () => {
    const map = new Map([
      ['key1', 10],
      ['key2', 20],
      ['key3', 30],
    ]);
    const result = getRandomValue(map);
    expect([...map.values()]).toContain(result);
  });

  it('returns a random value from an object', () => {
    const obj = { x: 'one', y: 'two', z: 'three' };
    const result = getRandomValue(obj);
    expect(Object.values(obj)).toContain(result);
  });

  it('returns undefined for empty collections', () => {
    expect(getRandomValue([])).toBeUndefined();
    expect(getRandomValue(new Set())).toBeUndefined();
    expect(getRandomValue(new Map())).toBeUndefined();
    expect(getRandomValue({})).toBeUndefined();
  });
});
