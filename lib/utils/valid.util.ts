import { ErrorMessage } from '../enums';
export class ValidUtil {
	static email(email: string) {
		try {
			email = email.trim();
			const re =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (!re.test(email)) {
				throw new Error(ErrorMessage.INVALID_EMAIL);
			}
		} catch (error) {
			throw error;
		}
	}

	static fullName(name: string) {
		try {
			name = name.trim();
			if (!name || name.length < 3 || name.split(' ').length < 2) {
				throw new Error(ErrorMessage.INVALID_NAME);
			} else if (name.split(' ').length > 2) {
				let first = name.split(' ')[0];
				let last = name.split(' ')[1];
				if (first.length < 2 || last.length < 2) {
					throw new Error(ErrorMessage.INVALID_NAME);
				}
			}
		} catch (error) {
			throw error;
		}
	}

	static phoneNumber(phoneNumber: string) {
		try {
			phoneNumber = phoneNumber.trim();
			const re = /^\d{10}$/;
			if (!re.test(phoneNumber)) {
				throw new Error(ErrorMessage.INVALID_PHONE_NUMBER);
			}
		} catch (error) {
			throw error;
		}
	}

	static password(password: string) {
		try {
			password = password.trim();
			if (!password || password.length < 6) {
				throw new Error(ErrorMessage.INVALID_PASSWORD);
			}
		} catch (error) {
			throw error;
		}
	}
}
