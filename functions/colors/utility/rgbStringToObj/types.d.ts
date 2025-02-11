import { FuncRgbString, RgbaObj, RgbString } from '../../../../types';
export type RgbStringToObjInput = RgbString | FuncRgbString;
export interface RgbStringToObjDefault {
    input: RgbStringToObjInput;
    return: RgbaObj;
}
