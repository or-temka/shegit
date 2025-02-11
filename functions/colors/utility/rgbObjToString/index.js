"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbObjToString = rgbObjToString;
const constants_1 = require("./constants");
const absoluteFloor_1 = require("../../../number/absoluteFloor");
/**
 * #### RGB color object to string
 *
 * Converts RGB color `{r: red, g: green, b: blue}` as an object
 * to a format string "rgb(`red`, `green`, `blue`)".
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToStringInput} obj RGB color object
 * @returns {string} RGB color string
 * @example
 *
 * rgbObjToString({r: 1, g: 2, b: 3})
 * // "rgb(1, 2, 3)"
 *
 * rgbObjToString({r: 400, g: () => "+54", b: -20, a: 1})
 * // "rgb(255, 54, 0)"
 */
function rgbObjToString(obj = constants_1.DEFAULT.input) {
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
                : (0, absoluteFloor_1.absoluteFloor)(num) || constants_1.DEFAULT_COLOR_COMPONENT;
    };
    const r = parseComponent(actual.r);
    const g = parseComponent(actual.g);
    const b = parseComponent(actual.b);
    return `rgb(${r}, ${g}, ${b})`;
}
