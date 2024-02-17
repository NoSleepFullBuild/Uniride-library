import { BaseEntity } from '../base/base.entity';
export declare class User extends BaseEntity {
    authId: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    role: string;
    phoneNumber: string;
    vehicle: string | null;
    rating: number;
}
