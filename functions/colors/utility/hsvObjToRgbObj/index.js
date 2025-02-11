"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvObjToRgbObj = hsvObjToRgbObj;
const constants_1 = require("./constants");
const number_1 = require("../../../number");
const getComponentNumber = (component) => {
    if (typeof component === 'function')
        component = component();
    return Number(component);
};
const parseHueComponent = (component) => {
    const num = getComponentNumber(component);
    if (Number.isNaN(num))
        return constants_1.DEFAULT_HSV_HUE_COMPONENT;
    if (num < constants_1.MIN_HSV_HUE_COMPONENT)
        return constants_1.MIN_HSV_HUE_COMPONENT;
    if (num > constants_1.MAX_HSV_HUE_COMPONENT)
        return constants_1.MAX_HSV_HUE_COMPONENT;
    return (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_HSV_HUE_COMPONENT;
};
const parseSaturationComponent = (component) => {
    const num = getComponentNumber(component);
    if (Number.isNaN(num))
        return constants_1.DEFAULT_HSV_SATURATION_COMPONENT;
    if (num < constants_1.MIN_HSV_SATURATION_COMPONENT)
        return constants_1.MIN_HSV_SATURATION_COMPONENT;
    if (num > constants_1.MAX_HSV_SATURATION_COMPONENT)
        return constants_1.MAX_HSV_SATURATION_COMPONENT;
    return (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_HSV_SATURATION_COMPONENT;
};
const parseValueComponent = (component) => {
    const num = getComponentNumber(component);
    if (Number.isNaN(num))
        return constants_1.DEFAULT_HSV_VALUE_COMPONENT;
    if (num < constants_1.MIN_HSV_VALUE_COMPONENT)
        return constants_1.MIN_HSV_VALUE_COMPONENT;
    if (num > constants_1.MAX_HSV_VALUE_COMPONENT)
        return constants_1.MAX_HSV_VALUE_COMPONENT;
    return (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_HSV_VALUE_COMPONENT;
};
/**
 * #### HSV color object to RGB color object
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToRgbObjInput} obj HSV color object
 * @returns {RgbaObj} RGB color object
 * @example
 *
 * hsvObjToRgbObj({ h: 220, s: 50, v: 80 })
 * // { r: 102, g: 136, b: 204, a: 1 }
 *
 * hsvObjToRgbObj(() => ({ h: '262.3', s: '+99.9', v: '2.6' }))
 * // { r: 2, g: 0, b: 5, a: 1 }
 *
 * hsvObjToRgbObj("some")
 * // { r: 0, g: 0, b: 0, a: 1 }
 */
function hsvObjToRgbObj(obj = constants_1.DEFAULT.input) {
    let actual = obj;
    if (typeof actual === 'function')
        actual = actual();
    if (typeof actual !== 'object' || Array.isArray(actual) || !actual) {
        return constants_1.DEFAULT.return;
    }
    const s = parseSaturationComponent(actual.s) / 100;
    const v = parseValueComponent(actual.v) / 100;
    const h = parseHueComponent(actual.h);
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r;
    let g;
    let b;
    if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
    }
    else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
    }
    else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
    }
    else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
    }
    else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
    }
    else if (h >= 300 && h < 360) {
        [r, g, b] = [c, 0, x];
    }
    else if (h === 360) {
        [r, g, b] = [c, 0, 0];
    }
    else {
        [r, g, b] = [0, 0, 0];
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return { r, g, b, a: 1 };
}
