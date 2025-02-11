"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvObjToArray = hsvObjToArray;
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
 * #### HSV color object to array
 *
 * Converts HSV color {h: `hue`, s: `saturation`, v: `value`} as an object
 * to a format array [`hue`, `saturation`, `value`].
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvObjToArrayInput} obj HSV color object
 * @returns {HsvArray} HSV color array
 * @example
 *
 * hsvObjToArray({h: 1, s: 2, v: 3})
 * // [1, 2, 3]
 *
 * hsvObjToArray(() => {h: 400, s: () => "+54.3", v: -20})
 * // [360, 54, 0]
 */
function hsvObjToArray(obj = constants_1.DEFAULT.input) {
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
    const h = parseHueComponent(actual.h);
    const s = parseSaturationComponent(actual.s);
    const v = parseValueComponent(actual.v);
    return [h, s, v];
}
