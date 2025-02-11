"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMappedColorTypeTo = void 0;
const constants_1 = require("../constants");
const isMappedColorTypeTo = (to, colorType) => {
    const toMapped = constants_1.colorTypeToMapping[colorType];
    return toMapped.includes(to);
};
exports.isMappedColorTypeTo = isMappedColorTypeTo;
