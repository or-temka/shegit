"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostImportantColorType = void 0;
const getMostImportantColorType = (colorType) => {
    if (colorType.includes('rgb') && colorType[3] !== 'cmyk')
        return 'rgb';
    return 'cmyk';
};
exports.getMostImportantColorType = getMostImportantColorType;
