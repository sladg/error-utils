import { BaseError } from '../base-error';
import { ErrorTemplate, IHttpErrorDescription } from './interface';
export declare class HttpError extends BaseError<string> {
    message: string;
    code: number;
    constructor(errorDescription?: IHttpErrorDescription<string>);
    getDescriptor(): {
        type: string;
        message: string;
        code: number;
    };
}
export declare const BadRequestError: ErrorTemplate;
export declare const UnauthorizedError: ErrorTemplate;
export declare const ForbiddenError: ErrorTemplate;
export declare const NotFoundError: ErrorTemplate;
export declare const MethodNotAllowedError: ErrorTemplate;
export declare const NotAcceptableError: ErrorTemplate;
export declare const RequestTimeoutError: ErrorTemplate;
export declare const ConflictError: ErrorTemplate;
export declare const GoneError: ErrorTemplate;
export declare const LengthRequiredError: ErrorTemplate;
export declare const PreconditionFailedError: ErrorTemplate;
export declare const RequestEntityTooLargeError: ErrorTemplate;
export declare const UnsupportedMediaTypeError: ErrorTemplate;
export declare const UnprocessableEntityError: ErrorTemplate;
export declare const LockedError: ErrorTemplate;
export declare const FailedDependencyError: ErrorTemplate;
export declare const PreconditionRequiredError: ErrorTemplate;
export declare const InternalServerError: ErrorTemplate;
export declare const NotImplementedError: ErrorTemplate;
export declare const ServiceUnavailableError: ErrorTemplate;
