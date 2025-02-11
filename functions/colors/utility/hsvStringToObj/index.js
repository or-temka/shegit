"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvStringToObj = hsvStringToObj;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
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
 * #### HSV color string to object
 *
 * Converts HSV color "hsv(`hue`, `saturation`%, `value`%)" as an string
 * to a format object `{h: hue, s: saturation, v: value}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvStringToObjInput} string HSV color string
 * @returns {HsvObj} HSV color object
 * @example
 *
 * hsvStringToObj("hsv(1, 2%, 3%)")
 * // {h: 1, s: 2, v: 3}
 *
 * hsvStringToObj(() => "500, 12, -200")
 * // {h: 360, s: 12, v: 0}
 */
function hsvStringToObj(string = constants_1.DEFAULT.input) {
    let actual = string;
    if (typeof actual === 'function')
        actual = actual();
    if (typeof actual !== 'string')
        return constants_1.DEFAULT.return;
    actual = actual.trim();
    const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 3);
    if (!match)
        return constants_1.DEFAULT.return;
    const [h = '0', s = '0', v = '0'] = match;
    const hue = parseHueComponent(h);
    const saturation = parseSaturationComponent(s);
    const value = parseValueComponent(v);
    return {
        h: hue,
        s: saturation,
        v: value,
    };
}
