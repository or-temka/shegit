"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toColor = toColor;
const utility_1 = require("../utility");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const fromColorTypeIsCorrect_1 = require("./utils/fromColorTypeIsCorrect");
/**
 * #### To color
 *
 * Convert a color of one type to another.
 *
 * @since 1.0.1
 * @category Color
 * @param {Color} color color in any representation
 * @param {To} to type of the return color
 * @returns {ReturnColorType<To>} the color in the selected "To" type
 * @example
 *
 * toColor([1, 2, 3], "rgb-object")
 * // {r: 1, g: 2, b: 3, a: 1}
 *
 * toColor('cmyk(64%, 21%, 99%, 2%)', "hex-string")
 * // '#5AC502'
 *
 * toColor([12, 99, 44, 12], "cmyk-object", fromColorType: 'rgb')
 * // { c: 88, m: 0, y: 56, k: 61 }
 */
function toColor(color = constants_1.DEFAULT.input, to = 'object', fromColorType = undefined) {
    const c = { ...constants_1.DEFAULT_RGB_OBJECT };
    let colorType = 'rgb';
    let isSameColorType = false;
    if (typeof color === 'function')
        color = color();
    const colorVarType = typeof color;
    if (colorVarType === 'object') {
        if (Array.isArray(color)) {
            colorType = (0, fromColorTypeIsCorrect_1.fromColorTypeIsCorrect)(fromColorType)
                ? fromColorType
                : (0, utils_1.getPossibleArrayColor)(color);
            isSameColorType = (0, utils_1.isMappedColorTypeTo)(to, colorType);
            Object.assign(c, (0, utils_1.anyArrayToRgba)(color, colorType));
        }
        else {
            if (color !== null) {
                colorType = (0, fromColorTypeIsCorrect_1.fromColorTypeIsCorrect)(fromColorType)
                    ? fromColorType
                    : (0, utils_1.getPossibleObjectColor)(color);
                isSameColorType = (0, utils_1.isMappedColorTypeTo)(to, colorType);
                Object.assign(c, (0, utils_1.anyObjectToRgba)(color, colorType));
            }
        }
    }
    else if (colorVarType === 'string') {
        colorType = (0, fromColorTypeIsCorrect_1.fromColorTypeIsCorrect)(fromColorType)
            ? fromColorType
            : (0, utils_1.getPossibleStringColor)(color);
        isSameColorType = (0, utils_1.isMappedColorTypeTo)(to, colorType);
        Object.assign(c, (0, utils_1.anyStringToRgba)(color, colorType));
    }
    switch (to) {
        case 'object':
        case 'rgb-object':
            return c;
        case 'rgb-array':
            return (0, utility_1.rgbObjToArray)(c);
        case 'rgb-string':
            return (0, utility_1.rgbObjToString)(c);
        case 'cmyk-object':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.cmykArrayToObj)(color);
                    }
                    return (0, utility_1.cmykArrayToObj)((0, utility_1.cmykObjToArray)(color));
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.cmykStringToObj)(color);
                }
            }
            return (0, utility_1.rgbObjToCmykObj)(c);
        case 'cmyk-array':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.cmykObjToArray)((0, utility_1.cmykArrayToObj)(color));
                    }
                    return (0, utility_1.cmykObjToArray)(color);
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.cmykObjToArray)((0, utility_1.cmykStringToObj)(color));
                }
            }
            return (0, utility_1.cmykObjToArray)((0, utility_1.rgbObjToCmykObj)(c));
        case 'cmyk-string':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.cmykObjToString)((0, utility_1.cmykArrayToObj)(color));
                    }
                    return (0, utility_1.cmykObjToString)(color);
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.cmykObjToString)((0, utility_1.cmykStringToObj)(color));
                }
            }
            return (0, utility_1.cmykObjToString)((0, utility_1.rgbObjToCmykObj)(c));
        case 'hex-string':
            return (0, utility_1.rgbObjToHexString)(c);
        case 'hsv-object':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.hsvArrayToObj)(color);
                    }
                    return (0, utility_1.hsvArrayToObj)((0, utility_1.hsvObjToArray)(color));
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.hsvStringToObj)(color);
                }
            }
            return (0, utility_1.rgbObjToHsvObj)(c);
        case 'hsv-array':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.hsvObjToArray)((0, utility_1.hsvArrayToObj)(color));
                    }
                    return (0, utility_1.hsvObjToArray)(color);
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.hsvObjToArray)((0, utility_1.hsvStringToObj)(color));
                }
            }
            return (0, utility_1.hsvObjToArray)((0, utility_1.rgbObjToHsvObj)(c));
        case 'hsv-string':
            if (isSameColorType) {
                if (colorVarType === 'object') {
                    if (Array.isArray(color)) {
                        return (0, utility_1.hsvObjToString)((0, utility_1.hsvArrayToObj)(color));
                    }
                    return (0, utility_1.hsvObjToString)(color);
                }
                if (colorVarType === 'string') {
                    return (0, utility_1.hsvObjToString)((0, utility_1.hsvStringToObj)(color));
                }
            }
            return (0, utility_1.hsvObjToString)((0, utility_1.rgbObjToHsvObj)(c));
        default:
            return c;
    }
}
