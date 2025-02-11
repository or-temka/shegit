"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT = exports.DEFAULT_KEY_COMPONENT = exports.DEFAULT_COLOR_COMPONENT = exports.MAX_COMPONENT_VALUE = exports.MIN_COMPONENT_VALUE = void 0;
exports.MIN_COMPONENT_VALUE = 0;
exports.MAX_COMPONENT_VALUE = 100;
exports.DEFAULT_COLOR_COMPONENT = exports.MIN_COMPONENT_VALUE;
exports.DEFAULT_KEY_COMPONENT = exports.MAX_COMPONENT_VALUE;
exports.DEFAULT = {
    input: {
        c: exports.DEFAULT_COLOR_COMPONENT,
        m: exports.DEFAULT_COLOR_COMPONENT,
        y: exports.DEFAULT_COLOR_COMPONENT,
        k: exports.DEFAULT_KEY_COMPONENT,
    },
    return: `cmyk(${exports.DEFAULT_COLOR_COMPONENT}%, ${exports.DEFAULT_COLOR_COMPONENT}%, ${exports.DEFAULT_COLOR_COMPONENT}%, ${exports.DEFAULT_KEY_COMPONENT}%)`,
};
