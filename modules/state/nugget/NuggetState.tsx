import Nugget from "../../nugget/Nugget"
import { STORAGE_SYNCHRONIZED_STATE } from "../../storage/StateSynchroNICEdStorage"
import { NUGGET_ACTION_TYPE } from "./NuggetAction";

type SYNCED_NUGGET_STATE = STORAGE_SYNCHRONIZED_STATE<NUGGET_STATE>;

export type NUGGET_STATE = Array<Nugget>;

export const initialNuggetState: SYNCED_NUGGET_STATE = {
    isInitialized: false,
    initialPopulationAction: NUGGET_ACTION_TYPE.POPULATE_NUGGETS,
    state: [],

}

export default SYNCED_NUGGET_STATE;