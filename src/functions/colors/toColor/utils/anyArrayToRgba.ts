import { RgbaObj } from 'types';
import {
  cmykArrayToObj,
  CmykArrayToObjInput,
  cmykObjToRgbObj,
  hsvArrayToObj,
  HsvArrayToObjInput,
  hsvObjToRgbObj,
  Input,
  rgbArrayToObj,
} from '../../utility';
import { ColorType } from '../types';

export const anyArrayToRgba = (array: any[], colorType: ColorType): RgbaObj => {
  if (colorType === 'cmyk') return cmykObjToRgbObj(cmykArrayToObj(array as CmykArrayToObjInput));
  if (colorType === 'hsv') return hsvObjToRgbObj(hsvArrayToObj(array as HsvArrayToObjInput));
  return rgbArrayToObj(array as Input);
};
