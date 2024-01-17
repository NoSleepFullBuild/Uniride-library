import { BaseEntity } from './base.entity';
export declare class User extends BaseEntity {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    role: string;
    phoneNumber: string;
    vehicle: string | null;
}
