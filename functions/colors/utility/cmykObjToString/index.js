"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykObjToString = cmykObjToString;
const constants_1 = require("./constants");
const number_1 = require("../../../number");
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
 * #### CMYK color object to CMYK string
 *
 * Converts CMYK color {c: `cyan`, m: `magenta`, y: `yellow`, k: `key`} as an object
 * to a format string "cmyk(`cyan`%, `magenta`%, `yellow`%, `key`%)".
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykObjToStringInput} obj CMYK color object
 * @returns {string} CMYK color string
 * @example
 *
 * cmykObjToString({c: 1, m: 2, y: 3, k: 4})
 * // "cmyk(1%, 2%, 3%, 4%)"
 *
 * cmykObjToString({c: 400, m: () => "+54", y: -20, k: 1})
 * // "cmyk(100%, 54%, 0%, 1%)"
 */
function cmykObjToString(obj = constants_1.DEFAULT.input) {
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
    const c = parseComponent(actual.c);
    const m = parseComponent(actual.m);
    const y = parseComponent(actual.y);
    const k = parseComponent(actual.k, true);
    return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
}
