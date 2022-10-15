import { MAPPED_STATE } from "../storage/StateSynchroNICEdStorage";
import NUGGET_STATE, { initialNuggetState } from "./nugget/NuggetState";

export type STATE = {
    // TODO refactor to represent proper state
    nuggetState: NUGGET_STATE,
    storageSynchronized: MAPPED_STATE
}

export const initialState: STATE = {
    nuggetState: initialNuggetState,
    storageSynchronized: undefined  // TODO initialize
};

export type SYNCHRONIZED_STATE<State> = {
    initialized: boolean,
    capsuledState: State
}