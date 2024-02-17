export interface TripCreateDto {
    userId: number;
    latitudeStartLocation: number;
    longitudeStartLocation: number;
    latitudeEndLocation: number;
    longitudeEndLocation: number;
    date: string;
    startTime: string;
    endTime: string;
    seats: number;
    passengers: number[];
}
