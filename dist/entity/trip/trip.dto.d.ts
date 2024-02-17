import { UserDto } from "../user/user.dto";
export declare class TripDto {
    id: number;
    origin: string;
    destination: string;
    date: Date;
    time: string;
    seats: number;
    price: number;
    userId: number;
    driver: UserDto;
    passengers: UserDto[];
}
