class ErrorOnSaveToLocalStorageException extends Error {
    constructor(reason: Error) {
        super(reason.message);
    }
}