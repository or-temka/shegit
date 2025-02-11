"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyArrayToRgba = void 0;
const utility_1 = require("../../utility");
const anyArrayToRgba = (array, colorType) => {
    if (colorType === 'cmyk')
        return (0, utility_1.cmykObjToRgbObj)((0, utility_1.cmykArrayToObj)(array));
    if (colorType === 'hsv')
        return (0, utility_1.hsvObjToRgbObj)((0, utility_1.hsvArrayToObj)(array));
    return (0, utility_1.rgbArrayToObj)(array);
};
exports.anyArrayToRgba = anyArrayToRgba;
