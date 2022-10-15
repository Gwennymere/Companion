import Nugget from "../../nugget/Nugget";
import { initialState, STATE, StateHelper, STORAGE_SYNCHRONIZED_STATE_KEY } from "../State";
import SynchronizedStateAlreadyInitializedException from "./exceptions/SynchronizedStateAlreadyInitializedException";
import { NUGGET_ACTION, NUGGET_ACTION_TYPE } from "./NuggetAction";
import { NUGGET_STATE } from "./NuggetState";

const nuggetKey = STORAGE_SYNCHRONIZED_STATE_KEY.NUGGET;

const reduceNuggets: (oldState: STATE, action: NUGGET_ACTION) => STATE = (oldState = initialState, action) => {
    let refactoredState: STATE;
    switch (action.type) {
        case NUGGET_ACTION_TYPE.UPDATE_NUGGET:
            removeExistingNugget(oldState, action);
            StateHelper.getSyncedState<NUGGET_STATE>(oldState, nuggetKey).push(action.payload as Nugget);
            refactoredState = { 
                ...oldState
             }
             console.log(action.type, refactoredState);
             return refactoredState;

        case NUGGET_ACTION_TYPE.POPULATE_NUGGETS:
            if (StateHelper.isSyncedStateInitialized(oldState, nuggetKey)) {
                throw new SynchronizedStateAlreadyInitializedException(nuggetKey);
            }
            refactoredState = {
                storageSynchronized: {
                    [nuggetKey]: {
                        initialPopulationAction: StateHelper.getSyncedStateInitialPopAction(oldState, nuggetKey),
                        isInitialized: true,
                        state: action.payload
                    },
                    ...oldState.storageSynchronized
                },
                ...oldState
            }
            console.log(action.type, refactoredState);
            return refactoredState;

        default:
            console.log(action.type, "TO DEFAUILT", oldState);
            return oldState;
    }
}

function removeExistingNugget(oldState: STATE, action: NUGGET_ACTION) {
    const index: number = StateHelper.getSyncedState<NUGGET_STATE>(oldState, nuggetKey).findIndex((_nugget: Nugget) => _nugget.id === (action.payload as Nugget).id);
    if (index >= 0) {
        StateHelper.getSyncedState<NUGGET_STATE>(oldState, nuggetKey).splice(index, 1);
    }
}

export default reduceNuggets;