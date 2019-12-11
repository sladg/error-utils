import { HttpError } from 'http-errors';
import { BaseError } from '../base-error';
export interface IHttpError extends Error {
    code: number;
    type: string;
    payload: any;
}
export interface IHttpErrorDescription<T> {
    type?: T;
    code?: number;
    message?: string;
    payload?: any;
    err?: BaseError<T> | Error;
}
export interface IErrorDesriptor<T> {
    type: T;
    message: string;
    code: number;
}
export declare type ErrorTemplate = (config: IHttpErrorDescription<string>) => HttpError;
