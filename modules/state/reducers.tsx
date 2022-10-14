import Nugget from "../nugget/Nugget";
import { combineReducers } from 'redux';
import { NUGGET_ACTION, NUGGET_ACTION_TYPE } from "./actions/NuggetAction";

type NUGGET_STATE = {
    nuggets: Array<Nugget>
}

const initialState: NUGGET_STATE = {
    nuggets: []
};

const reduceNuggets: (oldState: NUGGET_STATE, action: NUGGET_ACTION) => NUGGET_STATE = (oldState = initialState, action) => {
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