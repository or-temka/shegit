"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toColor = toColor;
const rgb_array_to_obj_1 = require("@shegit/rgb-array-to-obj");
const constants_1 = require("./constants");
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
 * toColor([1, 2, 3], "object")
 * // => {r: 1, g: 2, b: 3, a: 1}
 */
function toColor(color = constants_1.DEFAULT.input, to = 'object') {
    const c = {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
    };
    if (typeof color === 'function') {
        color = color();
    }
    if (typeof color === 'object') {
        const isArray = Array.isArray(color);
        if (isArray) {
            const { r, g, b } = (0, rgb_array_to_obj_1.rgbArrayToObj)(color);
            Object.assign(c, { r, g, b, a: 1 });
        }
    }
    switch (to) {
        case 'object':
            return c;
        default:
            return c;
    }
}
//# sourceMappingURL=index.js.map