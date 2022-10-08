class ErrorOnLoadFromLocalStorageException extends Error {
    constructor(reason: Error) {
        super(reason.message);
    }
}