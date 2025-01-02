import {
  rgbObjToString,
  rgbObjToArray,
  rgbObjToCmykObj,
  cmykObjToArray,
  cmykObjToString,
  cmykArrayToObj,
  cmykStringToObj,
} from '../utility';
import { CmykArray, CmykObj, CmykString, RgbaObj } from '../../../types';
import { DEFAULT, DEFAULT_RGB_OBJECT } from './constants';
import { ColorProp, ColorType, ReturnColorType, To } from './types';
import {
  anyArrayToRgba,
  anyObjectToRgba,
  anyStringToRgba,
  getPossibleArrayColor,
  getPossibleObjectColor,
  getPossibleStringColor,
  isMappedColorTypeTo,
} from './utils';

/**
 * #### To color
 *
 * Convert a color of one type to another.
 *
 * @since 1.0.1
 * @category Color
 * @param {Color} color color in any representation
 * @param {To} to type of the return color
 * @returns {ReturnColorType<To>} the color in the selected "To" type
 * @example
 *
 * toColor([1, 2, 3], "object") // {r: 1, g: 2, b: 3, a: 1}
 * toColor(["+44", -200, () => 12, 2], "object") // {r: 44, g: 0, b: 12, a: 1}
 */
export function toColor<T extends To>(
  color: ColorProp = DEFAULT.input,
  to: T = 'object' as T,
  fromColorType: ColorType | undefined = undefined,
): ReturnColorType<T> {
  const c: RgbaObj = { ...DEFAULT_RGB_OBJECT };
  let colorType: ColorType = 'rgb';
  let isSameColorType = false;

  if (typeof color === 'function') color = color();
  const colorVarType = typeof color;

  if (colorVarType === 'object') {
    if (Array.isArray(color)) {
      colorType = fromColorType || getPossibleArrayColor(color);
      isSameColorType = isMappedColorTypeTo(to, colorType);
      Object.assign(c, anyArrayToRgba(color, colorType));
    } else {
      if (color !== null) {
        colorType = fromColorType || getPossibleObjectColor(color);
        isSameColorType = isMappedColorTypeTo(to, colorType);
        Object.assign(c, anyObjectToRgba(color, colorType));
      }
    }
  } else if (colorVarType === 'string') {
    colorType = fromColorType || getPossibleStringColor(color as string);
    isSameColorType = isMappedColorTypeTo(to, colorType);
    Object.assign(c, anyStringToRgba(color as string, colorType));
  }

  switch (to) {
    case 'object':
    case 'rgb-object':
      return c as ReturnColorType<T>;
    case 'rgb-array':
      return rgbObjToArray(c) as ReturnColorType<T>;
    case 'rgb-string':
      return rgbObjToString(c) as ReturnColorType<T>;
    case 'cmyk-object':
      if (isSameColorType) {
        if (colorVarType === 'object') {
          if (Array.isArray(color)) {
            return cmykArrayToObj(color as CmykArray) as ReturnColorType<T>;
          }
          return cmykArrayToObj(cmykObjToArray(color as CmykObj)) as ReturnColorType<T>;
        }
        if (colorVarType === 'string') {
          return cmykStringToObj(color as CmykString) as ReturnColorType<T>;
        }
      }
      return rgbObjToCmykObj(c) as ReturnColorType<T>;
    case 'cmyk-array':
      if (isSameColorType) {
        if (colorVarType === 'object') {
          if (Array.isArray(color)) {
            return cmykObjToArray(cmykArrayToObj(color as CmykArray)) as ReturnColorType<T>;
          }
          return cmykObjToArray(color as CmykObj) as ReturnColorType<T>;
        }
        if (colorVarType === 'string') {
          return cmykObjToArray(cmykStringToObj(color as CmykString)) as ReturnColorType<T>;
        }
      }
      return cmykObjToArray(rgbObjToCmykObj(c)) as ReturnColorType<T>;
    case 'cmyk-string':
      if (isSameColorType) {
        if (colorVarType === 'object') {
          if (Array.isArray(color)) {
            return cmykObjToString(cmykArrayToObj(color as CmykArray)) as ReturnColorType<T>;
          }
          return cmykObjToString(color as CmykObj) as ReturnColorType<T>;
        }
        if (colorVarType === 'string') {
          return cmykObjToString(cmykStringToObj(color as CmykString)) as ReturnColorType<T>;
        }
      }
      return cmykObjToString(rgbObjToCmykObj(c)) as ReturnColorType<T>;
    default:
      return c as ReturnColorType<T>;
  }
}
