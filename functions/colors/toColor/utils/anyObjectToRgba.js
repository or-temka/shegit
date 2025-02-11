"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyObjectToRgba = void 0;
const utility_1 = require("../../utility");
const constants_1 = require("../constants");
const number_1 = require("../../../number");
const parseRgbComponent = (component) => {
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
const anyObjectToRgba = (obj, colorType) => {
    let rgba = obj;
    if (colorType === 'cmyk') {
        rgba = (0, utility_1.cmykObjToRgbObj)(obj);
    }
    else if (colorType === 'hsv') {
        rgba = (0, utility_1.hsvObjToRgbObj)(obj);
    }
    const r = parseRgbComponent(rgba.r || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
    const g = parseRgbComponent(rgba.g || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
    const b = parseRgbComponent(rgba.b || constants_1.DEFAULT_RGB_COLOR_COMPONENT);
    return { r, g, b, a: constants_1.DEFAULT_RGB_ALPHA_COMPONENT };
};
exports.anyObjectToRgba = anyObjectToRgba;
