import { BaseEntity } from '../base/base.entity';
export declare enum TripStatus {
    PENDING = "pending",
    ACCEPTED = "accepted",
    REJECTED = "rejected"
}
export declare class Trip extends BaseEntity {
    userId: number;
    latitudeStartLocation: number;
    longitudeStartLocation: number;
    latitudeEndLocation: number;
    longitudeEndLocation: number;
    startTime: string;
    endTime: string;
    date: string;
    price: number;
    distance: number;
    seats: number;
    passengers: number[];
    status: TripStatus;
}
