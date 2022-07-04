export enum ErrorCode {
	EMAIL_ALREADY_EXISTS = 'auth/email-already-exists',
	PHONE_NUMBER_ALREADY_EXISTS = 'auth/phone-number-already-exists',
	USER_NOT_FOUND = 'auth/user-not-found',
	SESSION_HAS_EXPIRED = 'auth/session-cookie-expired',
	INTERNAL_ERROR = 'auth/internal-error',
	USER_DISABLED = 'auth/user-disabled',
	INVALID_PHONE_NUMBER = 'auth/invalid-phone-number',
	INVALID_EMAIL = 'auth/invalid-email',
	INSUFFICIENT_PERMISSIONS = 'auth/insufficient-permission',
	INVALID_ARGUMENT = 'auth/invalid-argument',
	WRONG_PASSWORD = 'auth/wrong-password',
}

export enum ErrorMessage {
	DEFAULT = 'Something went wrong, please try again later.',
	INVALID_EMAIL = 'Invalid email.',
	INVALID_PHONE_NUMBER = 'Invalid phone number.',
	INVALID_NAME = 'Invalid name. Name should be like, John Doe.',
	INVALID_PASSWORD = 'Invalid password. Password should be at least 6 characters long.',

	/// Firebase
	USER_NOT_FOUND = 'Please register an account associated with credentials',
	EMAIL_UNAVAILABLE = 'Email is not available',
	PHONE_NUMBER_UNAVAILABLE = 'Phone number is not available',
	SESSION_EXPIRED = 'Session has expired',
	USER_DISABLED = 'Account not accessible at the moment, Please contact your admin...',
	UNAUTHORIZED = 'Unauthorized',
	INVALID_ARGUMENT = 'Invalid data provided',
	WRONG_CREDENTIALS = 'Wrong email/password',
}
