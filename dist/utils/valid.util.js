"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidUtil = void 0;
const enums_1 = require("../enums");
class ValidUtil {
    static email(email) {
        try {
            email = email.trim();
            const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!re.test(email)) {
                throw new Error(enums_1.ErrorMessage.INVALID_EMAIL);
            }
        }
        catch (error) {
            throw error;
        }
    }
    static fullName(name) {
        try {
            name = name.trim();
            if (!name || name.length < 3 || name.split(' ').length < 2) {
                throw new Error(enums_1.ErrorMessage.INVALID_NAME);
            }
            else if (name.split(' ').length > 2) {
                let first = name.split(' ')[0];
                let last = name.split(' ')[1];
                if (first.length < 2 || last.length < 2) {
                    throw new Error(enums_1.ErrorMessage.INVALID_NAME);
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
    static phoneNumber(phoneNumber) {
        try {
            phoneNumber = phoneNumber.trim();
            const re = /^\d{10}$/;
            if (!re.test(phoneNumber)) {
                throw new Error(enums_1.ErrorMessage.INVALID_PHONE_NUMBER);
            }
        }
        catch (error) {
            throw error;
        }
    }
    static password(password) {
        try {
            password = password.trim();
            if (!password || password.length < 6) {
                throw new Error(enums_1.ErrorMessage.INVALID_PASSWORD);
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ValidUtil = ValidUtil;
