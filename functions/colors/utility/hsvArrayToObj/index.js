"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvArrayToObj = hsvArrayToObj;
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
 * #### HSV color array to object
 *
 * Converts HSV color [`hue`, `saturation`, `value`] as an array
 * to a format object {h: `hue`, s: `saturation`, v: `value`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {HsvArrayToObjInput} array HSV color array
 * @returns {HsvArrayToObjReturn} HSV color return
 * @example
 *
 * hsvArrayToObj([1, 2, 3])
 * // {h: 1, s: 2, v: 3}
 *
 * hsvArrayToObj(() => [400, () => "+54.3", -20])
 * // {h: 360, s: 54, v: 0}
 */
function hsvArrayToObj(array = constants_1.DEFAULT.input) {
    let actual = array;
    if (typeof array === 'function')
        actual = array();
    if (!Array.isArray(actual))
        return constants_1.DEFAULT.return;
    const h = parseHueComponent(actual[0]);
    const s = parseSaturationComponent(actual[1]);
    const v = parseValueComponent(actual[2]);
    return { h, s, v };
}
