"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleComponentByValue = void 0;
const parseComponent_1 = require("./parseComponent");
const getPossibleComponentByValue = (component) => {
    const parsedComponent = (0, parseComponent_1.parseComponent)(component);
    // if (parsedComponent <= 100 && parsedComponent >= 0) return 'cmyk';
    if (parsedComponent <= 255)
        return 'rgb';
    return 'rgb';
};
exports.getPossibleComponentByValue = getPossibleComponentByValue;
