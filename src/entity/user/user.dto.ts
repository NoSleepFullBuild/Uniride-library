import { BaseDto } from "../base/base.dto";

export class UserDto extends BaseDto {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    phoneNumber: string;
    vehicle: string | null;
    rating: number;
}