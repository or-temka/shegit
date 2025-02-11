"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbObjToHsvObj = rgbObjToHsvObj;
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
 * #### RGBa color object to HSV color object
 *
 * Converts RGBa color {r: `red`, g: `green`, b: `blue`, a: `alpha`} as an object
 * to a HSV color {h: `hue`, s: `saturation`, v: `value`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {RgbObjToHsvObjInput} obj RGBa color object
 * @returns {HsvObj} HSV color object
 * @example
 *
 * rgbObjToHsvObj({ r: 64, g: 21, b: 99 })
 * // { h: 273, s: 79, v: 39 }
 *
 * rgbObjToHsvObj(() => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }))
 * // { h: 109, s: 100, v: 100 }
 */
function rgbObjToHsvObj(obj = constants_1.DEFAULT.input) {
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
    const r = rgbColor.r / 255;
    const g = rgbColor.g / 255;
    const b = rgbColor.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h = 0;
    let s = max === 0 ? 0 : delta / max;
    let v = max;
    if (delta === 0) {
        h = 0;
    }
    else if (max === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (max === g) {
        h = (b - r) / delta + 2;
    }
    else if (max === b) {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    s = Math.round(s * 100);
    v = Math.round(v * 100);
    return { h, s, v };
}
