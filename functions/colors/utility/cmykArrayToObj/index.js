"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykArrayToObj = cmykArrayToObj;
const number_1 = require("../../../number");
const constants_1 = require("./constants");
const parseComponent = (component, isKey = false) => {
    if (typeof component === 'function') {
        component = component();
    }
    const num = Number(component);
    if (isKey) {
        return Number.isNaN(num)
            ? constants_1.DEFAULT_KEY_COMPONENT
            : num < 0
                ? constants_1.MIN_COMPONENT_VALUE
                : num > constants_1.MAX_COMPONENT_VALUE
                    ? constants_1.MAX_COMPONENT_VALUE
                    : (0, number_1.absoluteFloor)(num);
    }
    return Number.isNaN(num) || num < 0
        ? constants_1.MIN_COMPONENT_VALUE
        : num > constants_1.MAX_COMPONENT_VALUE
            ? constants_1.MAX_COMPONENT_VALUE
            : (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_COLOR_COMPONENT;
};
/**
 * #### CMYK color array to object
 *
 * Converts CMYK color [`cyan`, `magenta`, `yellow`, `key`] as an array
 * to a format object {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`}.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykArrayToObjInput} array CMYK color array
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykArrayToObj([1, 2, 3, 4])
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykArrayToObj(["+44", -200, () => 12, 110])
 * // {c: 44, m: 0, y: 12, k: 100}
 */
function cmykArrayToObj(array = constants_1.DEFAULT.input) {
    let actual = constants_1.DEFAULT.input;
    if (Array.isArray(array)) {
        actual = array;
    }
    else if (typeof array === 'function') {
        actual = array();
        if (actual === null) {
            return constants_1.DEFAULT.return;
        }
    }
    else {
        return constants_1.DEFAULT.return;
    }
    const c = parseComponent(actual[0]);
    const m = parseComponent(actual[1]);
    const y = parseComponent(actual[2]);
    const k = parseComponent(actual[3], true);
    return { c, m, y, k };
}
