export declare class CalculTrip {
    private pricePerKm;
    constructor();
    setPricePerKm(newPrice: number): void;
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
    calculatePriceForMeters(distance: number): number;
    calculateEstimatedTime(distance: number, averageSpeedKmH: number): number;
}
