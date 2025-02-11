"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykObjToRgbObj = cmykObjToRgbObj;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
const parseComponent = (component) => {
    let actual = component;
    if (typeof component === 'function')
        actual = component();
    const num = Number(actual);
    return Number.isNaN(num) || num < constants_1.MIN_CMYK_COMPONENT_VALUE
        ? constants_1.MIN_CMYK_COMPONENT_VALUE
        : num > constants_1.MAX_CMYK_COMPONENT_VALUE
            ? constants_1.MAX_CMYK_COMPONENT_VALUE
            : (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_CMYK_COLOR_COMPONENT;
};
/**
 * #### CMYK color object to RGB color object
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToRgbObjInput} obj CMYK color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * cmykObjToRgbObj({ c: 1, m: 2, y: 3, k: 4 })
 * // { r: 242, g: 240, b: 237, a: 1 }
 *
 * cmykObjToRgbObj(() => ({ c: () => '+24.8', m: () => '96', y: () => 5000, k: () => 'gdfgh' }))
 * // { r: 194, g: 10, b: 0, a: 1 }
 */
function cmykObjToRgbObj(obj = constants_1.DEFAULT.input) {
    const cmykColor = constants_1.DEFAULT_CMYK_OBJ;
    let actual = obj;
    if (typeof obj === 'function')
        actual = obj();
    if (typeof actual === 'object') {
        if (Array.isArray(actual)) {
            return constants_1.DEFAULT.return;
        }
        if (actual !== null) {
            const c = parseComponent(actual.c || constants_1.DEFAULT_CMYK_COLOR_COMPONENT);
            const m = parseComponent(actual.m || constants_1.DEFAULT_CMYK_COLOR_COMPONENT);
            const y = parseComponent(actual.y || constants_1.DEFAULT_CMYK_COLOR_COMPONENT);
            const k = parseComponent(actual.k || constants_1.DEFAULT_CMYK_COLOR_COMPONENT);
            Object.assign(cmykColor, { c, m, y, k });
        }
    }
    else {
        return constants_1.DEFAULT.return;
    }
    cmykColor.c /= 100;
    cmykColor.m /= 100;
    cmykColor.y /= 100;
    cmykColor.k /= 100;
    // Calculate RGB values in range [0, 1]
    let r = (1 - cmykColor.c) * (1 - cmykColor.k);
    let g = (1 - cmykColor.m) * (1 - cmykColor.k);
    let b = (1 - cmykColor.y) * (1 - cmykColor.k);
    // Convert to range [0, 255]
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return { r, g, b, a: 1 };
}
