"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbObjToCmykObj = rgbObjToCmykObj;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
const parseComponent = (component) => {
    let actual = component;
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
 * #### RGBa color object to CMYK color object
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToCmykObjInput} obj RGBa color object
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * rgbObjToCmykObj({r: 1, g: 2, b: 3})
 * // { c: 67, m: 33, y: 0, k: 99 }
 *
 * rgbObjToCmykObj({r: 400, g: () => "+54", b: -20, a: 1})
 * // { c: 0, m: 79, y: 100, k: 0 }
 */
function rgbObjToCmykObj(obj = constants_1.DEFAULT.input) {
    const rgbColor = constants_1.DEFAULT_RGB_OBJ;
    let actual = obj;
    if (typeof obj === 'function')
        actual = obj();
    if (typeof actual === 'object') {
        if (Array.isArray(actual)) {
            return constants_1.DEFAULT.return;
        }
        if (actual !== null) {
            const r = parseComponent(actual.r || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
            const g = parseComponent(actual.g || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
            const b = parseComponent(actual.b || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
            Object.assign(rgbColor, { r, g, b });
        }
    }
    else {
        return constants_1.DEFAULT.return;
    }
    rgbColor.r /= 255;
    rgbColor.g /= 255;
    rgbColor.b /= 255;
    let k = 1 - Math.max(rgbColor.r, rgbColor.g, rgbColor.b);
    if (k === 1)
        return { c: 0, m: 0, y: 0, k: 100 };
    let c = (1 - rgbColor.r - k) / (1 - k);
    let m = (1 - rgbColor.g - k) / (1 - k);
    let y = (1 - rgbColor.b - k) / (1 - k);
    c = Math.round(c * 100);
    m = Math.round(m * 100);
    y = Math.round(y * 100);
    k = Math.round(k * 100);
    return { c, m, y, k };
}
