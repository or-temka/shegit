import { RgbArrayWithFuncVal } from 'functions';
import { RgbaObj } from 'types';
export type Color = RgbArrayWithFuncVal;
export type To = 'object';
export type ColorProp = Color | ((...args: any[]) => Color);
export type ReturnColorType<T extends To> = T extends 'object' ? RgbaObj : never;
export interface Default {
    input: RgbArrayWithFuncVal;
    return: RgbaObj;
}
//# sourceMappingURL=types.d.ts.map