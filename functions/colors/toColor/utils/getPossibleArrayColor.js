"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleArrayColor = void 0;
const getMostImportantColorType_1 = require("./getMostImportantColorType");
const getPossibleComponentByValue_1 = require("./getPossibleComponentByValue");
const parseComponent_1 = require("./parseComponent");
const getPossibleArrayColor = (arr) => {
    switch (arr.length) {
        case 1:
            return (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[0]);
        case 2: {
            const possibleComponent1 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[0]);
            const possibleComponent2 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[1]);
            return (0, getMostImportantColorType_1.getMostImportantColorType)([possibleComponent1, possibleComponent2]);
        }
        case 3: {
            const possibleComponent1 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[0]);
            const possibleComponent2 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[1]);
            const possibleComponent3 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[2]);
            return (0, getMostImportantColorType_1.getMostImportantColorType)([
                possibleComponent1,
                possibleComponent2,
                possibleComponent3,
            ]);
        }
        case 4: {
            const possibleComponent1 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[0]);
            const possibleComponent2 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[1]);
            const possibleComponent3 = (0, getPossibleComponentByValue_1.getPossibleComponentByValue)(arr[2]);
            const component4 = (0, parseComponent_1.parseComponent)(arr[3]);
            let possibleComponent4 = 'rgb';
            if (component4 > 1)
                possibleComponent4 = 'cmyk';
            return (0, getMostImportantColorType_1.getMostImportantColorType)([
                possibleComponent1,
                possibleComponent2,
                possibleComponent3,
                possibleComponent4,
            ]);
        }
        default:
            return 'rgb';
    }
};
exports.getPossibleArrayColor = getPossibleArrayColor;
