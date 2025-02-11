"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT = exports.DEFAULT_HEX_STRING = exports.DEFAULT_RGB_OBJ = exports.DEFAULT_RGB_ALPHA_COMPONENT = exports.DEFAULT_RGB_COLOR_COMPONENT = exports.MAX_RGB_COMPONENT_VALUE = exports.MIN_RGB_COMPONENT_VALUE = void 0;
exports.MIN_RGB_COMPONENT_VALUE = 0;
exports.MAX_RGB_COMPONENT_VALUE = 255;
exports.DEFAULT_RGB_COLOR_COMPONENT = exports.MIN_RGB_COMPONENT_VALUE;
exports.DEFAULT_RGB_ALPHA_COMPONENT = 1;
exports.DEFAULT_RGB_OBJ = {
    r: exports.DEFAULT_RGB_COLOR_COMPONENT,
    g: exports.DEFAULT_RGB_COLOR_COMPONENT,
    b: exports.DEFAULT_RGB_COLOR_COMPONENT,
    a: exports.DEFAULT_RGB_ALPHA_COMPONENT,
};
exports.DEFAULT_HEX_STRING = "#000000";
exports.DEFAULT = {
    input: exports.DEFAULT_RGB_OBJ,
    return: exports.DEFAULT_HEX_STRING,
};
