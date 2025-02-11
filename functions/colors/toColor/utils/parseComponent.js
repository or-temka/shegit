"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComponent = void 0;
const parseComponent = (component) => {
    let actual = component;
    if (typeof component === 'function')
        actual = component();
    const num = Number(actual);
    return Number.isNaN(num) ? 0 : num;
};
exports.parseComponent = parseComponent;
