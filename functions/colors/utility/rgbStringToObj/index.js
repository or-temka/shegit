"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbStringToObj = rgbStringToObj;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
const parseComponent = (component) => {
    const num = Number(component);
    return Number.isNaN(num) || num < 0
        ? constants_1.DEFAULT_COLOR_COMPONENT
        : num > 255
            ? 255
            : (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_COLOR_COMPONENT;
};
const parseAlphaComponent = (alphaComponent) => {
    const num = Number(alphaComponent);
    if (Number.isNaN(num))
        return constants_1.DEFAULT_ALPHA_COMPONENT;
    return num < 0 ? 0 : num > 1 ? 1 : num;
};
/**
 * #### RGB color string to object
 *
 * Converts RGB color "rgb(`red`, `green`, `blue`)" as an string
 * to a format object `{r: red, g: green, b: blue, a: alpha}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbStringToObjInput} string RGB color string
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * rgbStringToObj("rgb(1, 2, 3)")
 * // {r: 1, g: 2, b: 3, a: 1}
 *
 * rgbStringToObj(() => "500, 12, -200, 0.5")
 * // {r: 255, g: 12, b: 0, a: 0.5}
 */
function rgbStringToObj(string = constants_1.DEFAULT.input) {
    let actual = string;
    if (typeof actual === 'function')
        actual = actual();
    if (typeof actual !== 'string')
        return constants_1.DEFAULT.return;
    actual = actual.trim();
    const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4);
    if (!match)
        return constants_1.DEFAULT.return;
    const [r = '0', g = '0', b = '0', a = '1'] = match;
    const red = parseComponent(r);
    const green = parseComponent(g);
    const blue = parseComponent(b);
    const alpha = parseAlphaComponent(a);
    return {
        r: red,
        g: green,
        b: blue,
        a: alpha,
    };
}
