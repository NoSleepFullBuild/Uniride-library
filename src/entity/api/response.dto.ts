import { AuthDto } from "../auth/auth.dto";

export class Response {
    message: string;
    data: any;
    user: AuthDto;
    metadata: any;
}

