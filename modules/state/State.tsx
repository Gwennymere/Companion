import NUGGET_STATE, { initialNuggetState } from "./nugget/NuggetState";

export type STATE = {
    nuggetState: NUGGET_STATE
}

export const initialState: STATE = {
    nuggetState: initialNuggetState
};

export type STANDARD_STATE<State> = {
    initialzed: boolean,
    capsuledState: State
}