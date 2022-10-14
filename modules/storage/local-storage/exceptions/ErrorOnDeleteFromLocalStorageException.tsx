export class ErrorOnDeleteFromLocalStorageException extends Error {
    constructor(reason: string) {
        super(reason);
    }
}