import Nugget from "../nugget/Nugget";
import { combineReducers } from 'redux';
import { NUGGET_ACTION, NUGGET_ACTION_TYPE } from "./actions/NuggetAction";
import { initialState, NUGGET_STATE } from "./store";

// TODO use default state from store.tsx
const reduceNuggets: (oldState: NUGGET_STATE, action: NUGGET_ACTION) => NUGGET_STATE = (oldState = {nuggets: []}, action) => {
    // console.log("redcing", oldState);
    switch (action.type) {
        case NUGGET_ACTION_TYPE.UPDATE_NUGGET:
            // console.log("update");

            removeExistingNugget(oldState, action);
            oldState.nuggets.push(action.nugget);
            return { 
                ...oldState
             }
        default:
            // console.log("default");
            return oldState;
    }
}

function removeExistingNugget(oldState: NUGGET_STATE, action: NUGGET_ACTION) {
    const index: number = oldState.nuggets.findIndex((_nugget: Nugget) => _nugget.id === action.nugget.id);
    if (index >= 0) {
        oldState.nuggets.splice(index, 1);
    }
}

export default combineReducers({ reduceNuggets });