export class ErrorOnSaveToLocalStorageException extends Error {
    constructor(reason: string) {
        super(reason);
    }
}