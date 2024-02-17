"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculTrip = void 0;
class CalculTrip {
    constructor() {
        this.pricePerKm = 0.5;
    }
    setPricePerKm(newPrice) {
        this.pricePerKm = newPrice;
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // Rayon de la Terre en mètres
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Distance en mètres
        const d = R * c;
        return d;
    }
    calculatePriceForMeters(distance) {
        const distanceInKm = distance / 1000; // Convertir la distance en kilomètres
        return distanceInKm * this.pricePerKm; // Calculer le prix basé sur la distance en km
    }
    calculateEstimatedTime(distance, averageSpeedKmH) {
        const timeInHours = distance / averageSpeedKmH;
        return timeInHours / 1000;
    }
}
exports.CalculTrip = CalculTrip;
