import { Store } from "@reduxjs/toolkit";
import { STATE, StateHelper, STORAGE_SYNCHRONIZED_STATE_KEY } from "../state/State";
import { GenericStorage } from "./GenericStorage";

abstract class StateSynchronisedStorage<T, GENERIC_STORAGE_PAYLOAD> {
    private store: Store;
    private storage: GenericStorage<GENERIC_STORAGE_PAYLOAD>;
    private oldState: STATE;
    private key: STORAGE_SYNCHRONIZED_STATE_KEY;

    constructor(store: Store, key: STORAGE_SYNCHRONIZED_STATE_KEY, storage: GenericStorage<GENERIC_STORAGE_PAYLOAD>) {
        this.store = store;
        this.storage = storage;
        this.key = key;
        this.populateState(key);
    }

    private async populateState(key: STORAGE_SYNCHRONIZED_STATE_KEY): Promise<void> {
        this.storage.fetchAll()
            .then((entities) => {
                this.store.dispatch({
                    type: StateHelper.getSyncedStateInitialPopAction(this.store.getState(), key),
                    payload: {entities: entities}
                })
            });
        this.store.subscribe(this._handleStateChange);
    }

    private _handleStateChange(): void {
        const currentState = this.store.getState();
        if (StateHelper.isSyncedStateInitialized(this.oldState, this.key) && StateHelper.isSyncedStateInitialized(currentState, this.key)) {
            this.handleStateChange(StateHelper.getSyncedState<T>(this.oldState, this.key), StateHelper.getSyncedState<T>(currentState, this.key));
            this.oldState = currentState;
        }
    };

    protected abstract handleStateChange(oldState: T, newState: T): void;
}