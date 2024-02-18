import { BaseDto } from "../base/base.dto";

export class AuthDto extends BaseDto {
    username: string;
    email: string;
    role: string;
    password: string;
}