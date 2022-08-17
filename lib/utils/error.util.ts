import { ErrorCode, ErrorMessage } from '../enums';

export class ErrorUtil {
	static of(e: unknown) {
		let err = e as any;
		switch (err.code) {
			case ErrorCode.EMAIL_ALREADY_EXISTS:
			case ErrorCode.EMAIL_ALREADY_IN_USE:
				return ErrorMessage.EMAIL_UNAVAILABLE;
			case ErrorCode.INSUFFICIENT_PERMISSIONS:
				return ErrorMessage.UNAUTHORIZED;
			case ErrorCode.INVALID_EMAIL:
				return ErrorMessage.INVALID_EMAIL;
			case ErrorCode.INVALID_PHONE_NUMBER:
				return ErrorMessage.INVALID_PHONE_NUMBER;
			case ErrorCode.PHONE_NUMBER_ALREADY_EXISTS:
				return ErrorMessage.PHONE_NUMBER_UNAVAILABLE;
			case ErrorCode.USER_NOT_FOUND:
				return ErrorMessage.USER_NOT_FOUND;
			case ErrorCode.USER_DISABLED:
				return ErrorMessage.USER_DISABLED;
			case ErrorCode.SESSION_HAS_EXPIRED:
				return ErrorMessage.SESSION_EXPIRED;
			case ErrorCode.WRONG_PASSWORD:
				return ErrorMessage.WRONG_CREDENTIALS;
			case ErrorCode.TOO_MANY_REQUESTS:
				return ErrorMessage.TOO_MANY_REQUESTS;
			default:
				return ErrorMessage.DEFAULT;
		}
	}

	static throwError(e: unknown) {
		let error = e as Error;
		if (error.message.includes('/')) {
			throw new Error(ErrorUtil.of(e));
		} else {
			throw new Error(error.message);
		}
	}
}
