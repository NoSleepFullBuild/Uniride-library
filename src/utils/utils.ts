export function areEqual(value1 : any, value2: any, epsilon = 0.000001) {
    return Math.abs(value1 - value2) < epsilon;
}