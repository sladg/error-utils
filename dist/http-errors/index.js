"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_codes_1 = __importDefault(require("http-codes"));
const base_error_1 = require("../base-error");
class HttpError extends base_error_1.BaseError {
    constructor(errorDescription) {
        var _a, _b, _c, _d, _e;
        const errorMessage = Object.assign({ message: null, payload: null, type: null, err: null, code: http_codes_1.default.INTERNAL_SERVER_ERROR }, errorDescription);
        super(errorMessage);
        const { message, type, err, code } = errorMessage;
        this.stack = ((_a = err) === null || _a === void 0 ? void 0 : _a.stack) || this.stack;
        const descriptor = this.getDescriptor();
        this.code = descriptor.code || code;
        const errMessage = (_b = err) === null || _b === void 0 ? void 0 : _b.message;
        const descriptorMessage = (_c = descriptor) === null || _c === void 0 ? void 0 : _c.message;
        const errType = (_d = err) === null || _d === void 0 ? void 0 : _d.type;
        const descriptorType = (_e = descriptor) === null || _e === void 0 ? void 0 : _e.type;
        this.message = message || errMessage || descriptorMessage;
        this.type = type || errType || descriptorType;
    }
    getDescriptor() {
        return {
            type: this.type,
            message: this.message,
            code: this.code,
        };
    }
}
exports.HttpError = HttpError;
exports.BadRequestError = (config) => new HttpError(Object.assign(Object.assign({ type: 'bad_request', message: 'Request not processed' }, config), { code: http_codes_1.default.BAD_REQUEST }));
exports.UnauthorizedError = (config) => new HttpError(Object.assign(Object.assign({ type: 'unauthorized', message: 'Authorization process fail' }, config), { code: http_codes_1.default.UNAUTHORIZED }));
exports.ForbiddenError = (config) => new HttpError(Object.assign(Object.assign({ type: 'forbidden', message: 'Permission denied' }, config), { code: http_codes_1.default.FORBIDDEN }));
exports.NotFoundError = (config) => new HttpError(Object.assign(Object.assign({ type: 'not_found', message: 'Resource not found' }, config), { code: http_codes_1.default.NOT_FOUND }));
exports.MethodNotAllowedError = (config) => new HttpError(Object.assign(Object.assign({ type: 'method_not_allowed', message: 'Method Not Allowed' }, config), { code: http_codes_1.default.METHOD_NOT_ALLOWED }));
exports.NotAcceptableError = (config) => new HttpError(Object.assign(Object.assign({ type: 'not_acceptable', message: `Request isn't acceptable` }, config), { code: http_codes_1.default.NOT_ACCEPTABLE }));
exports.RequestTimeoutError = (config) => new HttpError(Object.assign(Object.assign({ type: 'request_timeout', message: `Request timeouted` }, config), { code: http_codes_1.default.REQUEST_TIMEOUT }));
exports.ConflictError = (config) => new HttpError(Object.assign(Object.assign({ type: 'conflict', message: `Data conflict` }, config), { code: http_codes_1.default.CONFLICT }));
exports.GoneError = (config) => new HttpError(Object.assign(Object.assign({ type: 'gone', message: `Resource isn't available` }, config), { code: http_codes_1.default.GONE }));
exports.LengthRequiredError = (config) => new HttpError(Object.assign(Object.assign({ type: 'length_required', message: `Request length header is required` }, config), { code: http_codes_1.default.LENGTH_REQUIRED }));
exports.PreconditionFailedError = (config) => new HttpError(Object.assign(Object.assign({ type: 'precondition_failed', message: `Request precondition failed` }, config), { code: http_codes_1.default.PRECONDITION_FAILED }));
exports.RequestEntityTooLargeError = (config) => new HttpError(Object.assign(Object.assign({ type: 'request_entity_too_large', message: `Request entity is too large` }, config), { code: 413 }));
exports.UnsupportedMediaTypeError = (config) => new HttpError(Object.assign(Object.assign({ type: 'unsupported_media_type', message: `Media type is not supported` }, config), { code: http_codes_1.default.UNSUPPORTED_MEDIA_TYPE }));
exports.UnprocessableEntityError = (config) => new HttpError(Object.assign(Object.assign({ type: 'unprocessable_entity', message: `Validation isn't pass` }, config), { code: http_codes_1.default.UNPROCESSABLE_ENTITY }));
exports.LockedError = (config) => new HttpError(Object.assign(Object.assign({ type: 'locked', message: `Resource is locked` }, config), { code: http_codes_1.default.LOCKED }));
exports.FailedDependencyError = (config) => new HttpError(Object.assign(Object.assign({ type: 'failed_dependency', message: `Request depependency failed` }, config), { code: http_codes_1.default.FAILED_DEPENDENCY }));
exports.PreconditionRequiredError = (config) => new HttpError(Object.assign(Object.assign({ type: 'precondition_required', message: `Request need precondition` }, config), { code: http_codes_1.default.PRECONDITION_REQUIRED }));
exports.InternalServerError = (config) => new HttpError(Object.assign(Object.assign({ type: 'internal_server_error', message: `Internal server error` }, config), { code: http_codes_1.default.INTERNAL_SERVER_ERROR }));
exports.NotImplementedError = (config) => new HttpError(Object.assign(Object.assign({ type: 'not_implemented', message: `Feature was not implemented` }, config), { code: http_codes_1.default.NOT_IMPLEMENTED }));
exports.ServiceUnavailableError = (config) => new HttpError(Object.assign(Object.assign({ type: 'service_unavailable', message: `Service is temporarily unavailable` }, config), { code: http_codes_1.default.SERVICE_UNAVAILABLE }));
//# sourceMappingURL=index.js.map