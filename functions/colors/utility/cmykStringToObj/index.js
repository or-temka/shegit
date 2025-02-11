"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykStringToObj = cmykStringToObj;
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
 * #### CMYK color string to object
 *
 * Converts CMYK color "cmyk(`cyan`%, `magenta`%, `yellow`%, `key%`)"" as an string
 * to a format object `{c: cyan, m: magenta, y: yellow, k: key}`.
 *
 * @since 1.1.0
 * @category Color
 * @param {CmykStringToObjInput} string CMYK color string
 * @returns {CmykObj} CMYK color object
 * @example
 *
 * cmykStringToObj("cmyk(1, 2, 3, 4)")
 * // {c: 1, m: 2, y: 3, k: 4}
 *
 * cmykStringToObj(() => "500, 12, -200, 5.5")
 * // {c: 100, m: 12, y: 0, k: 5}
 */
function cmykStringToObj(string = constants_1.DEFAULT.input) {
    let actual = string;
    if (typeof actual === 'function')
        actual = actual();
    if (typeof actual !== 'string')
        return constants_1.DEFAULT.return;
    actual = actual.trim();
    const match = actual.match(/-?\d+(\.\d+)?/g)?.slice(0, 4);
    if (!match)
        return constants_1.DEFAULT.return;
    const defaultStringComponent = `${constants_1.DEFAULT_COLOR_COMPONENT}`;
    const [c = defaultStringComponent, m = defaultStringComponent, y = defaultStringComponent, k = `${constants_1.DEFAULT_KEY_COMPONENT}`,] = match;
    const cyan = parseComponent(c);
    const magenta = parseComponent(m);
    const yellow = parseComponent(y);
    const key = parseComponent(k, true);
    return {
        c: cyan,
        m: magenta,
        y: yellow,
        k: key,
    };
}
