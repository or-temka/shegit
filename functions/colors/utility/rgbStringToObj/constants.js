"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT = exports.DEFAULT_ALPHA_COMPONENT = exports.DEFAULT_COLOR_COMPONENT = void 0;
exports.DEFAULT_COLOR_COMPONENT = 0;
exports.DEFAULT_ALPHA_COMPONENT = 1;
exports.DEFAULT = {
    input: `rgb(${exports.DEFAULT_COLOR_COMPONENT}, ${exports.DEFAULT_COLOR_COMPONENT}, ${exports.DEFAULT_COLOR_COMPONENT})`,
    return: {
        r: exports.DEFAULT_COLOR_COMPONENT,
        g: exports.DEFAULT_COLOR_COMPONENT,
        b: exports.DEFAULT_COLOR_COMPONENT,
        a: exports.DEFAULT_ALPHA_COMPONENT,
    },
};
