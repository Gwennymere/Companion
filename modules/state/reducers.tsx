import Nugget from "../nugget/Nugget";
import { combineReducers } from 'redux';
import { NUGGET_ACTION, NUGGET_ACTION_TYPE } from "./actions/NuggetAction";
import { initialState, NUGGET_STATE } from "./store";

const reduceNuggets: (oldState: NUGGET_STATE, action: NUGGET_ACTION) => NUGGET_STATE = (oldState = {nuggets: []}, action) => {
    switch (action.type) {
        case NUGGET_ACTION_TYPE.UPDATE_NUGGET:

            removeExistingNugget(oldState, action);
            oldState.nuggets.push(action.nugget);
            return { 
                ...oldState
             }
        default:
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