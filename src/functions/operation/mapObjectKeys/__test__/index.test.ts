import { mapObjectKeys } from '../../../../../dist';

describe('mapObjectKeys', () => {
  // Basic functionality tests
  it('should transform object keys to uppercase', () => {
    const original = { firstName: 'John', lastName: 'Doe', age: 30 };
    const transformFn = (key: string) => key.toUpperCase();
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({ FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 });
  });

  it('should add a prefix to each key', () => {
    const original = { id: 1, name: 'Alice' };
    const transformFn = (key: string) => `user_${key}`;
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({ user_id: 1, user_name: 'Alice' });
  });

  it('should add a suffix to each key', () => {
    const original = { a: 1, b: 2, c: 3 };
    const transformFn = (key: string) => `${key}_key`;
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({ a_key: 1, b_key: 2, c_key: 3 });
  });

  // Edge cases
  it('should handle an empty object', () => {
    const original = {};
    const transformFn = (key: string) => key.toUpperCase();
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({});
  });

  it('should throw `undefined` if the first argument is not an object', () => {
    const original = null;
    const transformFn = (key: string) => key.toUpperCase();
    expect(mapObjectKeys(original as any, transformFn as any)).toEqual(undefined);
  });

  it('should throw an same object if the second argument is not a function', () => {
    const original = { a: 1, b: 2 };
    const transformFn = 'not a function';
    // @ts-ignore
    expect(mapObjectKeys(original, transformFn)).toEqual(original);
  });

  // Complex cases
  it('should handle nested objects (without modifying nested keys)', () => {
    const original = { user: { id: 1, name: 'Alice' }, role: 'admin' };
    const transformFn = (key: string) => key.toUpperCase();
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({
      USER: { id: 1, name: 'Alice' },
      ROLE: 'admin',
    });
  });

  it('should handle keys with special characters', () => {
    const original = { 'user-name': 'John', 'age-in-years': 30 };
    const transformFn = (key: string) => key.replace(/-/g, '_');
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({ user_name: 'John', age_in_years: 30 });
  });

  it('should handle numeric keys', () => {
    const original = { 1: 'one', 2: 'two' };
    const transformFn = (key: string) => `key_${key}`;
    const result = mapObjectKeys(original, transformFn as any);
    expect(result).toEqual({ key_1: 'one', key_2: 'two' });
  });

  it('should handle symbol-like keys', () => {
    const original = { '@': 'at', '#': 'hash' };
    const transformFn = (key: string) => `symbol_${key}`;
    const result = mapObjectKeys(original, transformFn);
    expect(result).toEqual({ 'symbol_@': 'at', 'symbol_#': 'hash' });
  });
});
