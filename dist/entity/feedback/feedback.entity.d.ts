import { BaseEntity } from '../base/base.entity';
export declare class Feedback extends BaseEntity {
    userId: number;
    tripId: number;
    message: string;
    rating: number;
    date: string;
}
