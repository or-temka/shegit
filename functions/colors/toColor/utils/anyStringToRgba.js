"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyStringToRgba = void 0;
const utility_1 = require("../../utility");
const constants_1 = require("../constants");
const anyStringToRgba = (str, colorType) => {
    let rgba = constants_1.DEFAULT.return;
    if (colorType === 'cmyk') {
        const cmyk = (0, utility_1.cmykStringToObj)(str);
        rgba = (0, utility_1.cmykObjToRgbObj)(cmyk);
    }
    else if (colorType === 'hex') {
        rgba = (0, utility_1.hexStringToRgbObj)(str);
    }
    else if (colorType === 'hsv') {
        const hsv = (0, utility_1.hsvStringToObj)(str);
        rgba = (0, utility_1.hsvObjToRgbObj)(hsv);
    }
    else {
        rgba = (0, utility_1.rgbStringToObj)(str);
    }
    const { r, g, b, a = 1 } = rgba;
    return { r, g, b, a };
};
exports.anyStringToRgba = anyStringToRgba;
