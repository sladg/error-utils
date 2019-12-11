export interface IBaseErrorDescription<E> {
    type: E;
    message: string;
    payload?: any;
    fingerprint?: string;
    previousError?: Error;
}