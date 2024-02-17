"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areEqual = void 0;
function areEqual(value1, value2, epsilon = 0.000001) {
    return Math.abs(value1 - value2) < epsilon;
}
exports.areEqual = areEqual;
