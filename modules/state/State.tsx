import NUGGET_STATE, { initialNuggetState } from "./nugget/NuggetState";

export type STATE = {
    nuggetState: NUGGET_STATE
}

export const initialState: STATE = {
    nuggetState: initialNuggetState
};

export type SYNCHRONIZED_STATE<State> = {
    initialized: boolean,
    capsuledState: State
}