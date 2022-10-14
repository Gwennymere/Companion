import { combineReducers } from 'redux';
import { NUGGET_ACTION_TYPE } from "./nugget/NuggetAction";
import reduceNuggets from "./nugget/NuggetReducer";

export type INITIAL_POPULATION_ACTION = NUGGET_ACTION_TYPE.POPULATE_NUGGETS;

export default combineReducers({ reduceNuggets });