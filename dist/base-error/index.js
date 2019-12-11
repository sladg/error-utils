"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(errorDescription) {
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
            }
            catch (err) {
                this.stack = previousError.stack;
            }
        }
    }
    getErrorName() {
        return this.constructor.name;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=index.js.map