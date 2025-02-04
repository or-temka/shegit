import { GroupCaseElements } from '../../types';

export const invalidFromColorTypeParameterCases: GroupCaseElements<any> = {
  valid: [],
  invalid: [
    {
      id: 1,
      input: { color: 'rgb(53, 84, 2)', to: 'rgb-array', fromColorType: 'gpw' as any },
      expected: [53, 84, 2],
    },
    {
      id: 2,
      input: { color: [false, true, '+55.642'], to: 'hsv-object', fromColorType: 44 as any },
      expected: { h: 239, s: 100, v: 22 },
    },
    {
      id: 3,
      input: { color: 'rgb(124, 62, 55, 0.5)', to: 'hex-string', fromColorType: false as any },
      expected: '#7C3E37',
    },
    {
      id: 4,
      input: {
        color: () => ({ r: '--24', g: () => '+86', b: 0 }),
        to: 'cmyk-object',
        fromColorType: true as any,
      },
      expected: { c: 100, m: 0, y: 100, k: 66 },
    },
    {
      id: 5,
      input: { color: [228, 0, 0, 86], to: 'rgb-array', fromColorType: NaN as any },
      expected: [0, 36, 36],
    },
    {
      id: 6,
      input: {
        color: 'cmyk(805.305%, 33.0000001%, 99.9999%, 4)',
        to: 'hsv-object',
        fromColorType: undefined as any,
      },
      expected: { h: 121, s: 100, v: 64 },
    },
    {
      id: 7,
      input: { color: { c: '14' }, to: 'hex-string', fromColorType: Infinity as any },
      expected: '#DBFFFF',
    },
    {
      id: 8,
      input: {
        color: [805.305, 33.0000001, 99.9999, 4],
        to: 'cmyk-object',
        fromColorType: -Infinity as any,
      },
      expected: { c: 100, m: 33, y: 99, k: 4 },
    },
    {
      id: 9,
      input: { color: '052a00', to: 'rgb-object', fromColorType: null as any },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
    {
      id: 10,
      input: { color: '#123F16', to: 'hsv-string', fromColorType: new Date() as any },
      expected: 'hsv(125, 71%, 25%)',
    },
    {
      id: 11,
      input: { color: '   #0f0040   ', to: 'hex-string', fromColorType: new Set() as any },
      expected: '#0F0040',
    },
    {
      id: 12,
      input: { color: '#0c632C', to: 'cmyk-object', fromColorType: new Map() as any },
      expected: { c: 88, m: 0, y: 56, k: 61 },
    },
    {
      id: 13,
      input: {
        color: () => 'hsv(500000, 230, 77)',
        to: 'rgb-array',
        fromColorType: (() => 'cmyk-array') as any,
      },
      expected: [196, 0, 0],
    },
    {
      id: 14,
      input: {
        color: { h: () => '5000000', s: () => '230', v: () => '77' },
        to: 'hsv-string',
        fromColorType: -100 as any,
      },
      expected: 'hsv(360, 100%, 77%)',
    },
    {
      id: 15,
      input: {
        color: 'hsv(360, 100%, 100%)',
        to: 'cmyk-string',
        fromColorType: new Error() as any,
      },
      expected: 'cmyk(0%, 100%, 100%, 0%)',
    },
    {
      id: 16,
      input: { color: () => 'rgb(53, 84, 2)', to: 'rgb-array', fromColorType: ['some', 44] as any },
      expected: [53, 84, 2],
    },
    {
      id: 17,
      input: {
        color: () => [false, true, '+55.642'],
        to: 'hsv-object',
        fromColorType: { name: 'Alina', age: 23 } as any,
      },
      expected: { h: 239, s: 100, v: 22 },
    },
    {
      id: 18,
      input: {
        color: () => 'rgb(124, 62, 55, 0.5)',
        to: 'hex-string',
        fromColorType: Symbol(4) as any,
      },
      expected: '#7C3E37',
    },
    {
      id: 19,
      input: { color: () => '052a00', to: 'rgb-object', fromColorType: 3.2 as any },
      expected: { r: 5, g: 42, b: 0, a: 1 },
    },
    {
      id: 20,
      input: { color: () => '#123F16', to: 'hsv-string', fromColorType: 0 as any },
      expected: 'hsv(125, 71%, 25%)',
    },
  ],
};
