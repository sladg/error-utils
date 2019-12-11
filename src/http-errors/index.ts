import CODES from 'http-codes';
import { BaseError } from '../base-error';
import { ErrorTemplate, IHttpErrorDescription } from './interface';

export class HttpError extends BaseError<string> {
    public message: string;
    public code: number;

    constructor(errorDescription?: IHttpErrorDescription<string>) {
        const errorMessage = {
            message: null,
            payload: null,
            type: null,
            err: null,
            code: CODES.INTERNAL_SERVER_ERROR,
            ...errorDescription,
        };

        super(errorMessage);

        const { message, type, err, code } = errorMessage;
        this.stack = err?.stack || this.stack;

        const descriptor = this.getDescriptor();
        this.code = descriptor.code || code;

        const errMessage = err?.message;
        const descriptorMessage = descriptor?.message;
        const errType = (err as any)?.type;
        const descriptorType = descriptor?.type;

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

export const BadRequestError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'bad_request',
        message: 'Request not processed',
        ...config,
        code: CODES.BAD_REQUEST,
    });

export const UnauthorizedError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'unauthorized',
        message: 'Authorization process fail',
        ...config,
        code: CODES.UNAUTHORIZED,
    });

export const ForbiddenError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'forbidden',
        message: 'Permission denied',
        ...config,
        code: CODES.FORBIDDEN,
    });

export const NotFoundError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'not_found',
        message: 'Resource not found',
        ...config,
        code: CODES.NOT_FOUND,
    });

export const MethodNotAllowedError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'method_not_allowed',
        message: 'Method Not Allowed',
        ...config,
        code: CODES.METHOD_NOT_ALLOWED,
    });

export const NotAcceptableError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'not_acceptable',
        message: `Request isn't acceptable`,
        ...config,
        code: CODES.NOT_ACCEPTABLE,
    });

export const RequestTimeoutError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'request_timeout',
        message: `Request timeouted`,
        ...config,
        code: CODES.REQUEST_TIMEOUT,
    });

export const ConflictError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'conflict',
        message: `Data conflict`,
        ...config,
        code: CODES.CONFLICT,
    });

export const GoneError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'gone',
        message: `Resource isn't available`,
        ...config,
        code: CODES.GONE,
    });

export const LengthRequiredError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'length_required',
        message: `Request length header is required`,
        ...config,
        code: CODES.LENGTH_REQUIRED,
    });

export const PreconditionFailedError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'precondition_failed',
        message: `Request precondition failed`,
        ...config,
        code: CODES.PRECONDITION_FAILED,
    });

export const RequestEntityTooLargeError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'request_entity_too_large',
        message: `Request entity is too large`,
        ...config,
        code: 413,
    });

export const UnsupportedMediaTypeError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'unsupported_media_type',
        message: `Media type is not supported`,
        ...config,
        code: CODES.UNSUPPORTED_MEDIA_TYPE,
    });

export const UnprocessableEntityError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'unprocessable_entity',
        message: `Validation isn't pass`,
        ...config,
        code: CODES.UNPROCESSABLE_ENTITY,
    });

export const LockedError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'locked',
        message: `Resource is locked`,
        ...config,
        code: CODES.LOCKED,
    });

export const FailedDependencyError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'failed_dependency',
        message: `Request depependency failed`,
        ...config,
        code: CODES.FAILED_DEPENDENCY,
    });

export const PreconditionRequiredError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'precondition_required',
        message: `Request need precondition`,
        ...config,
        code: CODES.PRECONDITION_REQUIRED,
    });

export const InternalServerError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'internal_server_error',
        message: `Internal server error`,
        ...config,
        code: CODES.INTERNAL_SERVER_ERROR,
    });

export const NotImplementedError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'not_implemented',
        message: `Feature was not implemented`,
        ...config,
        code: CODES.NOT_IMPLEMENTED,
    });

export const ServiceUnavailableError: ErrorTemplate = (config) =>
    new HttpError({
        type: 'service_unavailable',
        message: `Service is temporarily unavailable`,
        ...config,
        code: CODES.SERVICE_UNAVAILABLE,
    });
