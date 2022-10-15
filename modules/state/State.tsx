import { initialNuggetState } from "./nugget/NuggetState";
import { INITIAL_POPULATION_ACTION } from "./Reducers";

export type STATE = {
    storageSynchronized: MAPPED_STATE
}

export enum STORAGE_SYNCHRONIZED_STATE_KEY {
    NUGGET
}

export const initialState: STATE = {
    storageSynchronized: {
        [STORAGE_SYNCHRONIZED_STATE_KEY.NUGGET]: initialNuggetState
    }
}

export type STORAGE_SYNCHRONIZED_STATE<T> = {
    state: T,
    initialPopulationAction: INITIAL_POPULATION_ACTION
    isInitialized: boolean
}

export type MAPPED_STATE = {
    [Property in STORAGE_SYNCHRONIZED_STATE_KEY]: STORAGE_SYNCHRONIZED_STATE<any>
}

export const StateHelper = {
    getSyncedState<T>(state: STATE, key: STORAGE_SYNCHRONIZED_STATE_KEY): T {
        return state.storageSynchronized[key]?.state;
    },
    
    isSyncedStateInitialized(state: STATE, key: STORAGE_SYNCHRONIZED_STATE_KEY): boolean {
        return state.storageSynchronized[key]?.isInitialized;
    },
    
    getSyncedStateInitialPopAction(state: STATE, key: STORAGE_SYNCHRONIZED_STATE_KEY): INITIAL_POPULATION_ACTION {
        return state.storageSynchronized[key]?.initialPopulationAction;
    }
}