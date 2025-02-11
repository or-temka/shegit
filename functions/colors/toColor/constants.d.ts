import { ColorType, ColorTypeToMapping, Default } from './types';
export declare const MIN_CMYK_COMPONENT_VALUE = 0;
export declare const MAX_CMYK_COMPONENT_VALUE = 100;
export declare const DEFAULT_CMYK_COLOR_COMPONENT = 0;
export declare const DEFAULT_CMYK_KEY_COMPONENT = 100;
export declare const MIN_RGB_COMPONENT_VALUE = 0;
export declare const MAX_RGB_COMPONENT_VALUE = 255;
export declare const DEFAULT_RGB_COLOR_COMPONENT = 0;
export declare const DEFAULT_RGB_ALPHA_COMPONENT = 1;
export declare const DEFAULT: Default;
export declare const COLOR_TYPES: readonly ColorType[];
export declare const colorTypeToMapping: ColorTypeToMapping;
export declare const DEFAULT_RGB_OBJECT: {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const DEFAULT_CMYK_OBJECT: {
    c: number;
    m: number;
    y: number;
    k: number;
};
