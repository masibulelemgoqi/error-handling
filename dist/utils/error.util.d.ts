import { ErrorMessage } from '../enums';
export declare class ErrorUtil {
    static of(e: unknown): ErrorMessage.DEFAULT | ErrorMessage.INVALID_EMAIL | ErrorMessage.INVALID_PHONE_NUMBER | ErrorMessage.USER_NOT_FOUND | ErrorMessage.EMAIL_UNAVAILABLE | ErrorMessage.PHONE_NUMBER_UNAVAILABLE | ErrorMessage.SESSION_EXPIRED | ErrorMessage.USER_DISABLED | ErrorMessage.UNAUTHORIZED | ErrorMessage.WRONG_CREDENTIALS;
    static throwError(e: unknown): void;
}
