export class ErrorOnLoadFromLocalStorageException extends Error {
    constructor(reason: string) {
        super(reason);
    }
}