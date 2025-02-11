"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromColorTypeIsCorrect = void 0;
const constants_1 = require("../constants");
const fromColorTypeIsCorrect = (colorType) => {
    if (typeof colorType !== 'string')
        return false;
    if (!constants_1.COLOR_TYPES.includes(colorType))
        return false;
    return true;
};
exports.fromColorTypeIsCorrect = fromColorTypeIsCorrect;
