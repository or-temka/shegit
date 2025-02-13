import { RgbaObj } from 'types';
import {
  cmykObjToRgbObj,
  cmykStringToObj,
  hexStringToRgbObj,
  hsvObjToRgbObj,
  hsvStringToObj,
  rgbStringToObj,
} from '../../utility';
import { DEFAULT } from '../constants';
import { ColorType } from '../types';

export const anyStringToRgba = (str: string, colorType: ColorType): RgbaObj => {
  let rgba = DEFAULT.return;

  if (colorType === 'cmyk') {
    const cmyk = cmykStringToObj(str);
    rgba = cmykObjToRgbObj(cmyk);
  } else if (colorType === 'hex') {
    rgba = hexStringToRgbObj(str);
  } else if (colorType === 'hsv') {
    const hsv = hsvStringToObj(str);
    rgba = hsvObjToRgbObj(hsv);
  } else {
    rgba = rgbStringToObj(str);
  }

  const { r, g, b, a = 1 } = rgba;
  return { r, g, b, a };
};
