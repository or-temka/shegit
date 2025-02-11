"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexStringToRgbObj = hexStringToRgbObj;
const constants_1 = require("./constants");
const parseHexComponent = (component) => parseInt(`${component}`, 16);
/**
 * #### HEX color string to RGB color object
 *
 * Converts HEX color "#`red` `green` `blue`" as an string
 * to a RGB color {r: `red`, g: `green`, b: `blue`} as an object.
 *
 * @since 1.1.0
 * @category Color
 * @param {HexStringToRgbObjInput} str HEX color string
 * @returns {HexStringToRgbObjReturn} RGBa color object
 * @example
 *
 * hexStringToRgbObj("#1200E3")
 * // { r: 18, g: 0, b: 227 }
 *
 * hexStringToRgbObj(() => "123")
 * // { r: 17, g: 34, b: 51 }
 */
function hexStringToRgbObj(str = constants_1.DEFAULT.input) {
    let actual = str;
    if (typeof str === 'function')
        actual = str();
    if (typeof actual !== 'string')
        return constants_1.DEFAULT.return;
    actual = actual.trim();
    const match = actual.match(/[a-fA-F0-9]/g)?.slice(0, 6);
    if (!match)
        return constants_1.DEFAULT.return;
    let r = constants_1.DEFAULT_HEX_COMPONENT;
    let g = constants_1.DEFAULT_HEX_COMPONENT;
    let b = constants_1.DEFAULT_HEX_COMPONENT;
    if (match.length === 6) {
        r = parseHexComponent(`${match[0]}${match[1]}`);
        g = parseHexComponent(`${match[2]}${match[3]}`);
        b = parseHexComponent(`${match[4]}${match[5]}`);
    }
    else if (match.length >= 3) {
        r = parseHexComponent(match[0] + match[0] || constants_1.DEFAULT_HEX_COMPONENT);
        g = parseHexComponent(match[1] + match[1] || constants_1.DEFAULT_HEX_COMPONENT);
        b = parseHexComponent(match[2] + match[2] || constants_1.DEFAULT_HEX_COMPONENT);
    }
    return { r, g, b };
}
