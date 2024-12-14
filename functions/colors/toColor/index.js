"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toColor = toColor;
const utility_1 = require("../utility");
const constants_1 = require("./constants");
const number_1 = require("../../number");
const parseComponent = (component) => {
    let actual = component;
    if (typeof component === 'function')
        actual = component();
    const num = Number(actual);
    return Number.isNaN(num) || num < 0
        ? constants_1.DEFAULT_COLOR_COMPONENT
        : num > 255
            ? 255
            : (0, number_1.absoluteFloor)(num) || constants_1.DEFAULT_COLOR_COMPONENT;
};
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
 * toColor([1, 2, 3], "object") // {r: 1, g: 2, b: 3, a: 1}
 * toColor(["+44", -200, () => 12, 2], "object") // {r: 44, g: 0, b: 12, a: 1}
 */
function toColor(color = constants_1.DEFAULT.input, to = 'object') {
    const c = {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
    };
    if (typeof color === 'function')
        color = color();
    if (typeof color === 'object') {
        if (Array.isArray(color)) {
            const { r, g, b } = (0, utility_1.rgbArrayToObj)(color);
            Object.assign(c, { r, g, b, a: 1 });
        }
        else {
            if (color !== null) {
                const r = parseComponent(color.r || constants_1.DEFAULT_COLOR_COMPONENT);
                const g = parseComponent(color.g || constants_1.DEFAULT_COLOR_COMPONENT);
                const b = parseComponent(color.b || constants_1.DEFAULT_COLOR_COMPONENT);
                Object.assign(c, { r, g, b, a: 1 });
            }
        }
    }
    else if (typeof color === 'string') {
        const { r, g, b, a = 1 } = (0, utility_1.rgbStringToObj)(color);
        Object.assign(c, { r, g, b, a });
    }
    switch (to) {
        case 'object':
        case 'rgb-object':
            return c;
        case 'rgb-array':
            return (0, utility_1.rgbObjToArray)(c);
        case 'rgb-string':
            return (0, utility_1.rgbObjToString)(c);
        default:
            return c;
    }
}
