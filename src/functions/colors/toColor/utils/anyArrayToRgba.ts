import { RgbaObj } from 'types';
import {
  cmykArrayToObj,
  CmykArrayToObjInput,
  cmykObjToRgbObj,
  Input,
  rgbArrayToObj,
} from '../../utility';
import { ColorType } from '../types';

export const anyArrayToRgba = (array: any[], colorType: ColorType): RgbaObj => {
  if (colorType === 'cmyk') return cmykObjToRgbObj(cmykArrayToObj(array as CmykArrayToObjInput));
  return rgbArrayToObj(array as Input);
};
