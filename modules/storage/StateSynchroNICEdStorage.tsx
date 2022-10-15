import { Store } from "@reduxjs/toolkit";
import { INITIAL_POPULATION_ACTION } from "../state/Reducers";
import { STATE } from "../state/State";
import { GenericStorage } from "./GenericStorage";

/*
MOVE
*/
enum STORAGE_SYNCHRONIZED_STATE_KEY {
    NUGGET
}

type STORAGE_SYNCHRONIZED_STATE = {
    state: any,
    initialPopulationAction: INITIAL_POPULATION_ACTION
    isInitialized: boolean
}

export type MAPPED_STATE = {
    [Property in STORAGE_SYNCHRONIZED_STATE_KEY]: STORAGE_SYNCHRONIZED_STATE
}
/*
END MOVE
*/

abstract class StateSynchronisedStorage<SYNCHRONIZED_STATE, GenericStoragePayload> {
    private store: Store;
    private storage: GenericStorage<GenericStoragePayload>;
    private oldState: STATE;
    private key: STORAGE_SYNCHRONIZED_STATE_KEY;

    constructor(store: Store, key: STORAGE_SYNCHRONIZED_STATE_KEY, storage: GenericStorage<GenericStoragePayload>) {
        this.store = store;
        this.storage = storage;
        this.key = key;
        this.populateState(key);
    }

    private async populateState(key: STORAGE_SYNCHRONIZED_STATE_KEY): Promise<void> {
        this.storage.fetchAll()
            .then((entities) => {
                this.store.dispatch({
                    type: (this.store.getState() as STATE).storageSynchronized[key].initialPopulationAction,
                    payload: {entities: entities}
                })
            });
        this.store.subscribe(this._handleStateChange);
    }

    private _handleStateChange(): void {
        const currentState = (this.store.getState() as STATE)?.storageSynchronized[this.key];
        const oldState = this.oldState?.storageSynchronized[this.key];

        if (oldState?.isInitialized && currentState?.isInitialized) {
            this.handleStateChange(oldState.state, currentState.state);
        }
    };

    protected abstract handleStateChange(oldState: SYNCHRONIZED_STATE, newState: SYNCHRONIZED_STATE): void;
}