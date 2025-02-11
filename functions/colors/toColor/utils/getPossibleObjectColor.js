"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleObjectColor = void 0;
const getPossibleObjectColor = (obj) => {
    const getChanceOfColor = (keysToCheck) => {
        const matchedKeys = keysToCheck.filter((key) => key in obj);
        const count = matchedKeys.length;
        const chance = count / keysToCheck.length;
        return chance;
    };
    const rgbChance = getChanceOfColor(['r', 'g', 'b', 'a']);
    const cmykChance = getChanceOfColor(['c', 'm', 'y', 'k']);
    const hsvChance = getChanceOfColor(['h', 's', 'v']);
    const colorChances = [rgbChance, cmykChance, hsvChance];
    const chancesMap = ['rgb', 'cmyk', 'hsv'];
    const maxValue = Math.max(...colorChances);
    const maxIndex = colorChances.indexOf(maxValue);
    return chancesMap[maxIndex];
};
exports.getPossibleObjectColor = getPossibleObjectColor;
