"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbObjToHexString = rgbObjToHexString;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
const parseToHex = (component) => {
    const hex = Math.round(component).toString(16).padStart(2, '0');
    return hex.toUpperCase();
};
const parseRgbComponent = (component) => {
    let actual = component || constants_1.DEFAULT_RGB_COLOR_COMPONENT;
    if (typeof component === 'function')
        actual = component();
    const num = Number(actual);
    return Number.isNaN(num) || num < constants_1.MIN_RGB_COMPONENT_VALUE
        ? constants_1.MIN_RGB_COMPONENT_VALUE
        : num > constants_1.MAX_RGB_COMPONENT_VALUE
            ? constants_1.MAX_RGB_COMPONENT_VALUE
            : (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_RGB_COLOR_COMPONENT;
};
/**
 * #### RGBa color object to HEX color string
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a HEX color "#`red` `green` `blue`" as an string.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToHexStringInput} obj RGBa color object
 * @returns {string} HEX color string
 * @example
 *
 * rgbObjToHexString({ r: 64, g: 21, b: 99 })
 * // "#401563"
 *
 * rgbObjToHexString(() => ({ r: -500, g: 500, b: '58.8' }))
 * // "#00FF3A"
 */
function rgbObjToHexString(obj = constants_1.DEFAULT.input) {
    let actual = obj;
    if (typeof obj === 'function')
        actual = obj();
    if (typeof actual === 'object') {
        if (Array.isArray(actual)) {
            return constants_1.DEFAULT.return;
        }
        if (actual !== null) {
            const r = parseToHex(parseRgbComponent(actual?.r));
            const g = parseToHex(parseRgbComponent(actual?.g));
            const b = parseToHex(parseRgbComponent(actual?.b));
            return `#${r}${g}${b}`;
        }
    }
    return constants_1.DEFAULT.return;
}
