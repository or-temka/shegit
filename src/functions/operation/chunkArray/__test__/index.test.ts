import { chunkArray } from '../../../../../dist';

describe('chunkArray', () => {
  it('should split an array into chunks of the specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('should return the original array as a single chunk if size is greater than array length', () => {
    const array = [1, 2];
    const size = 5;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2]]);
  });

  it('should return an empty array if the input array is empty', () => {
    const array: number[] = [];
    const size = 3;
    const result = chunkArray(array, size);
    expect(result).toEqual([]);
  });

  it('should split the array into chunks of size 1', () => {
    const array = [1, 2, 3];
    const size = 1;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it('should return the original array as a single chunk if size is 0', () => {
    const array = [1, 2, 3];
    const size = 0;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should use the default chunk size of 2 if no size is provided', () => {
    const array = [1, 2, 3, 4, 5];
    const result = chunkArray(array);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle arrays with mixed types', () => {
    const array = [1, 'a', true, { key: 'value' }];
    const size = 2;
    const result = chunkArray(array, size);
    expect(result).toEqual([
      [1, 'a'],
      [true, { key: 'value' }],
    ]);
  });

  it('should handle arrays of objects', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const size = 2;
    const result = chunkArray(array, size);
    expect(result).toEqual([
      [{ id: 1 }, { id: 2 }],
      [{ id: 3 }, { id: 4 }],
    ]);
  });

  it('should handle large arrays', () => {
    const array = Array.from({ length: 1000 }, (_, i) => i + 1);
    const size = 100;
    const result = chunkArray(array, size);
    expect(result.length).toBe(10);
    expect(result[0].length).toBe(100);
    expect(result[9]).toEqual(Array.from({ length: 100 }, (_, i) => 901 + i));
  });

  it('should handle negative chunk size by treating it as 0', () => {
    const array = [1, 2, 3];
    const size = -1;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should handle NaN chunk size by treating it as 0', () => {
    const array = [1, 2, 3];
    const size = NaN;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should handle non-integer chunk size by rounding down', () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2.9;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle arrays with undefined and null values', () => {
    const array = [1, undefined, null, 2, 3];
    const size = 2;
    const result = chunkArray(array, size);
    expect(result).toEqual([[1, undefined], [null, 2], [3]]);
  });

  it('should handle arrays with nested arrays', () => {
    const array = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const size = 3;
    const result = chunkArray(array, size);
    expect(result).toEqual([
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [[7, 8]],
    ]);
  });

  it('should handle arrays with functions', () => {
    const fn1 = () => console.log('fn1');
    const fn2 = () => console.log('fn2');
    const array = [fn1, fn2, fn1, fn2];
    const size = 2;
    const result = chunkArray(array, size);
    expect(result).toEqual([
      [fn1, fn2],
      [fn1, fn2],
    ]);
  });
});
