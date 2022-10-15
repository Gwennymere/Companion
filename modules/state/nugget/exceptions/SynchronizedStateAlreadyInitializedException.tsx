import { STORAGE_SYNCHRONIZED_STATE_KEY } from "../../State";

export default class SynchronizedStateAlreadyInitializedException extends Error{
    constructor(key: STORAGE_SYNCHRONIZED_STATE_KEY) {
        super("Error on initializing SyncedStorage: " + key.toString() + ". Is already initialized.");
    }
}