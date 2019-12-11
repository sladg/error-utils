export interface IBaseErrorDescription<T> {
    type: T;
    message: string;
    payload?: any;
    fingerprint?: string;
    previousError?: Error;
}
export declare abstract class BaseError<T = string> extends Error {
    name: string;
    payload: any;
    type: T;
    fingerprint: string;
    constructor(errorDescription: IBaseErrorDescription<T>);
    getErrorName(): string;
}
