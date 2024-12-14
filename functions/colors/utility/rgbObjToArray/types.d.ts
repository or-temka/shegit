import { FuncRgbObj, RgbArray, RgbObjFunc } from '../../../../types';
export type RgbObjToArrayInput = RgbObjFunc | FuncRgbObj;
export interface RgbObjToArrayDefault {
    input: RgbObjToArrayInput;
    return: RgbArray;
}
