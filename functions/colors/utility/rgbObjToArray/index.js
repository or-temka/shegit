"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbObjToArray = rgbObjToArray;
const constants_1 = require("./constants");
function roundDownAbsolute(value) {
    return Math.floor(Math.abs(value));
}
/**
 * #### RGB color object to RGB array
 *
 * Converts RGB color `{r: red, g: green, b: blue}` as an object
 * to a format array [`red`, `green`, `blue`].
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToArrayInput} obj RGB color object
 * @returns {RgbArray} RGB color array
 * @example
 *
 * rgbObjToArray({r: 1, g: 2, b: 3})
 * // [1, 2, 3]
 *
 * rgbObjToArray(() => {r: 400, g: () => "+54", b: -20, a: 1})
 * // [255, 54, 0]
 */
function rgbObjToArray(obj = constants_1.DEFAULT.input) {
    let actual = constants_1.DEFAULT.input;
    const isObject = Object.prototype.toString.call(obj) === '[object Object]';
    if (isObject) {
        actual = obj;
    }
    else if (typeof obj === 'function') {
        actual = obj();
        if (actual === null) {
            return constants_1.DEFAULT.return;
        }
    }
    else {
        return constants_1.DEFAULT.return;
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
    const r = parseComponent(actual.r);
    const g = parseComponent(actual.g);
    const b = parseComponent(actual.b);
    return [r, g, b];
}
