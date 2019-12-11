export interface IBaseErrorDescription<T> {
    type: T;
    message: string;
    payload?: any;
    fingerprint?: string;
    previousError?: Error;
}

export abstract class BaseError<T = string> extends Error {
    name: string;
    payload: any;
    type: T;
    fingerprint: string;

    constructor(errorDescription: IBaseErrorDescription<T>) {
        super(errorDescription.message);
        const { type, payload, fingerprint, previousError } = errorDescription;

        this.name = this.getErrorName();
        this.payload = payload || {};
        this.type = type;
        this.fingerprint = fingerprint;
        if (previousError) {
            try {
                const currentStack = this.stack.split('\n');
                const previousStack = previousError.stack.split('\n');
                this.stack = [previousStack[0], currentStack[1], ...previousStack.slice(1)].join('\n');
            } catch (err) {
                this.stack = previousError.stack; // if something went wrong, we won't throw exception in base error
            }
        }
    }

    getErrorName() {
        return this.constructor.name;
    }
}
