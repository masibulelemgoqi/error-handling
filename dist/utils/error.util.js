"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtil = void 0;
const enums_1 = require("../enums");
class ErrorUtil {
    static of(e) {
        let err = e;
        switch (err.name) {
            case enums_1.ErrorCode.EMAIL_ALREADY_EXISTS:
                return enums_1.ErrorMessage.EMAIL_UNAVAILABLE;
            case enums_1.ErrorCode.INSUFFICIENT_PERMISSIONS:
                return enums_1.ErrorMessage.UNAUTHORIZED;
            case enums_1.ErrorCode.INVALID_EMAIL:
                return enums_1.ErrorMessage.INVALID_EMAIL;
            case enums_1.ErrorCode.INVALID_PHONE_NUMBER:
                return enums_1.ErrorMessage.INVALID_PHONE_NUMBER;
            case enums_1.ErrorCode.PHONE_NUMBER_ALREADY_EXISTS:
                return enums_1.ErrorMessage.PHONE_NUMBER_UNAVAILABLE;
            case enums_1.ErrorCode.USER_NOT_FOUND:
                return enums_1.ErrorMessage.USER_NOT_FOUND;
            case enums_1.ErrorCode.USER_DISABLED:
                return enums_1.ErrorMessage.USER_DISABLED;
            case enums_1.ErrorCode.SESSION_HAS_EXPIRED:
                return enums_1.ErrorMessage.SESSION_EXPIRED;
            default:
                return enums_1.ErrorMessage.DEFAULT;
        }
    }
}
exports.ErrorUtil = ErrorUtil;
