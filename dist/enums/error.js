"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["EMAIL_ALREADY_EXISTS"] = "auth/email-already-exists";
    ErrorCode["PHONE_NUMBER_ALREADY_EXISTS"] = "auth/phone-number-already-exists";
    ErrorCode["USER_NOT_FOUND"] = "auth/user-not-found";
    ErrorCode["SESSION_HAS_EXPIRED"] = "auth/session-cookie-expired";
    ErrorCode["INTERNAL_ERROR"] = "auth/internal-error";
    ErrorCode["USER_DISABLED"] = "auth/user-disabled";
    ErrorCode["INVALID_PHONE_NUMBER"] = "auth/invalid-phone-number";
    ErrorCode["INVALID_EMAIL"] = "auth/invalid-email";
    ErrorCode["INSUFFICIENT_PERMISSIONS"] = "auth/insufficient-permission";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["DEFAULT"] = "Something went wrong, please try again later.";
    ErrorMessage["INVALID_EMAIL"] = "Invalid email.";
    ErrorMessage["INVALID_PHONE_NUMBER"] = "Invalid phone number.";
    ErrorMessage["INVALID_NAME"] = "Invalid name. Name should be like, John Doe.";
    ErrorMessage["INVALID_PASSWORD"] = "Invalid password. Password should be at least 6 characters long.";
    /// Firebase
    ErrorMessage["USER_NOT_FOUND"] = "Please register an account associated with credentials";
    ErrorMessage["EMAIL_UNAVAILABLE"] = "Email is not available";
    ErrorMessage["PHONE_NUMBER_UNAVAILABLE"] = "Phone number is not available";
    ErrorMessage["SESSION_EXPIRED"] = "Session has expired";
    ErrorMessage["USER_DISABLED"] = "Account not accessible at the moment, Please contact your admin...";
    ErrorMessage["UNAUTHORIZED"] = "Unauthorized";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
