"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbArrayToObj = rgbArrayToObj;
const constants_1 = require("./constants");
/**
 * #### RGB color array to object
 *
 * Converts RGB color [red, green, blue] as an array
 * to a format object {r: [red], g: [green], b: [blue]}.
 *
 * @since 1.0.1
 * @category Color
 * @param {rgbArray | FuncRgbArray} array RGB color array
 * @returns {rgbObj} RGB color object
 * @example
 *
 * rgbArrayToObj([1, 2, 3])
 * // => {r: 1, g: 2, b: 3}
 */
function roundDownAbsolute(value) {
    return Math.floor(Math.abs(value));
}
function rgbArrayToObj(array = constants_1.DEFAULT.input) {
    let actual = constants_1.DEFAULT.input;
    const isArray = Array.isArray(array);
    if (!isArray) {
        const isFunction = typeof array === 'function';
        if (!isFunction)
            return constants_1.DEFAULT.return;
        actual = array();
    }
    else {
        actual = array;
    }
    const parseComponent = (component) => {
        if (typeof component === 'function') {
            component = component();
        }
        const num = Number(component);
        return Number.isNaN(num) || num < 0
            ? constants_1.DEFAULT_COLOR_COMPONENT
            : num > 255
                ? 255
                : roundDownAbsolute(num);
    };
    const r = parseComponent(actual[0]);
    const g = parseComponent(actual[1]);
    const b = parseComponent(actual[2]);
    return { r, g, b };
}
//# sourceMappingURL=index.js.map