import Nugget from "../../nugget/Nugget";
import { initialState, STATE } from "../State";
import { NUGGET_ACTION, NUGGET_ACTION_TYPE } from "./NuggetAction";

const reduceNuggets: (oldState: STATE, action: NUGGET_ACTION) => STATE = (oldState = initialState, action) => {
    switch (action.type) {
        case NUGGET_ACTION_TYPE.UPDATE_NUGGET:
            removeExistingNugget(oldState, action);
            oldState.nuggetState.capsuledState.push(action.payload as Nugget);
            return { 
                ...oldState
             }

        case NUGGET_ACTION_TYPE.POPULATE_NUGGETS:
            return {
                nuggetState: {
                    initialzed: true,
                    capsuledState: action.payload
                },
                ...oldState
            }

        default:
            return oldState;
    }
}

function removeExistingNugget(oldState: STATE, action: NUGGET_ACTION) {
    const index: number = oldState.nuggetState.capsuledState.findIndex((_nugget: Nugget) => _nugget.id === (action.payload as Nugget).id);
    if (index >= 0) {
        oldState.nuggetState.capsuledState.splice(index, 1);
    }
}

export default reduceNuggets;