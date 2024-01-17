import userModel from './userModel';
declare class authModel {
    id: number;
    userId: userModel;
    username: string;
    email: string;
    password: string;
}
export default authModel;
