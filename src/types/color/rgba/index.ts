import { RgbArrayComponentValue } from 'types';

export type RgbaArrayComponentAlfaValue = number;
export type RgbaArray = [
  RgbArrayComponentValue,
  RgbArrayComponentValue,
  RgbArrayComponentValue,
  RgbaArrayComponentAlfaValue,
];
export interface RgbaObj {
  r: RgbArrayComponentValue;
  g: RgbArrayComponentValue;
  b: RgbArrayComponentValue;
  a: RgbaArrayComponentAlfaValue;
}
