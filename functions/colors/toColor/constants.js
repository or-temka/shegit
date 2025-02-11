"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CMYK_OBJECT = exports.DEFAULT_RGB_OBJECT = exports.colorTypeToMapping = exports.COLOR_TYPES = exports.DEFAULT = exports.DEFAULT_RGB_ALPHA_COMPONENT = exports.DEFAULT_RGB_COLOR_COMPONENT = exports.MAX_RGB_COMPONENT_VALUE = exports.MIN_RGB_COMPONENT_VALUE = exports.DEFAULT_CMYK_KEY_COMPONENT = exports.DEFAULT_CMYK_COLOR_COMPONENT = exports.MAX_CMYK_COMPONENT_VALUE = exports.MIN_CMYK_COMPONENT_VALUE = void 0;
exports.MIN_CMYK_COMPONENT_VALUE = 0;
exports.MAX_CMYK_COMPONENT_VALUE = 100;
exports.DEFAULT_CMYK_COLOR_COMPONENT = exports.MIN_CMYK_COMPONENT_VALUE;
exports.DEFAULT_CMYK_KEY_COMPONENT = exports.MAX_CMYK_COMPONENT_VALUE;
exports.MIN_RGB_COMPONENT_VALUE = 0;
exports.MAX_RGB_COMPONENT_VALUE = 255;
exports.DEFAULT_RGB_COLOR_COMPONENT = exports.MIN_RGB_COMPONENT_VALUE;
exports.DEFAULT_RGB_ALPHA_COMPONENT = 1;
exports.DEFAULT = {
    input: [exports.DEFAULT_RGB_COLOR_COMPONENT, exports.DEFAULT_RGB_COLOR_COMPONENT, exports.DEFAULT_RGB_COLOR_COMPONENT],
    return: {
        r: exports.DEFAULT_RGB_COLOR_COMPONENT,
        g: exports.DEFAULT_RGB_COLOR_COMPONENT,
        b: exports.DEFAULT_RGB_COLOR_COMPONENT,
        a: exports.DEFAULT_RGB_ALPHA_COMPONENT,
    },
};
exports.COLOR_TYPES = ['rgb', 'cmyk', 'hex', 'hsv'];
exports.colorTypeToMapping = {
    rgb: ['object', 'rgb-object', 'rgb-array', 'rgb-string'],
    cmyk: ['cmyk-object', 'cmyk-array', 'cmyk-string'],
    hex: ['hex-string'],
    hsv: ['hsv-object', 'hsv-array', 'hsv-string'],
};
exports.DEFAULT_RGB_OBJECT = {
    r: exports.DEFAULT_RGB_COLOR_COMPONENT,
    g: exports.DEFAULT_RGB_COLOR_COMPONENT,
    b: exports.DEFAULT_RGB_COLOR_COMPONENT,
    a: exports.DEFAULT_RGB_ALPHA_COMPONENT,
};
exports.DEFAULT_CMYK_OBJECT = {
    c: exports.DEFAULT_CMYK_COLOR_COMPONENT,
    m: exports.DEFAULT_CMYK_COLOR_COMPONENT,
    y: exports.DEFAULT_CMYK_COLOR_COMPONENT,
    k: exports.DEFAULT_CMYK_KEY_COMPONENT,
};
