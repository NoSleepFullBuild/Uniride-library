"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcul_1 = require("./calcul"); // Assurez-vous que le chemin est correct
describe('CalculTrip', () => {
    let calc;
    beforeAll(() => {
        calc = new calcul_1.CalculTrip();
    });
    // Tests existants pour calculateDistance et calculatePriceForMeters restent inchangés
    describe('calculateEstimatedTime', () => {
        it('should return correct estimated time for given distance and speed', () => {
            const distance = 100000; // 100 km
            const speed = 50; // 50 km/h
            expect(calc.calculateEstimatedTime(distance, speed)).toBe(2); // 2 heures attendues
        });
    });
    describe('setPricePerKm', () => {
        it('should correctly update the price per km', () => {
            calc.setPricePerKm(0.75);
            expect(calc.calculatePriceForMeters(2000)).toBe(1.5); // Prix attendu pour 2 km à 0.75 par km
        });
    });
});
