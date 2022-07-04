import { ErrorCode, ErrorMessage } from '../enums';

export class ErrorUtil {
	static of(e: unknown) {
		let err = e as any;

		switch (err.code) {
			case ErrorCode.EMAIL_ALREADY_EXISTS:
				return new Error(ErrorMessage.EMAIL_UNAVAILABLE);
			case ErrorCode.INSUFFICIENT_PERMISSIONS:
				return new Error(ErrorMessage.UNAUTHORIZED);
			case ErrorCode.INVALID_EMAIL:
				return new Error(ErrorMessage.INVALID_EMAIL);
			case ErrorCode.INVALID_PHONE_NUMBER:
				return new Error(ErrorMessage.INVALID_PHONE_NUMBER);
			case ErrorCode.PHONE_NUMBER_ALREADY_EXISTS:
				return new Error(ErrorMessage.PHONE_NUMBER_UNAVAILABLE);
			case ErrorCode.USER_NOT_FOUND:
				return new Error(ErrorMessage.USER_NOT_FOUND);
			case ErrorCode.USER_DISABLED:
				return new Error(ErrorMessage.USER_DISABLED);
			case ErrorCode.SESSION_HAS_EXPIRED:
				return new Error(ErrorMessage.SESSION_EXPIRED);
			default:
				return new Error(ErrorMessage.DEFAULT);
		}
	}
}
