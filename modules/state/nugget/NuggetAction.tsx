import Nugget from "../../nugget/Nugget";

export enum NUGGET_ACTION_TYPE {
    UPDATE_NUGGET,
    POPULATE_NUGGETS,
}

export type NUGGET_ACTION = ({
    type: NUGGET_ACTION_TYPE,
    payload: Nugget | Array<Nugget>
})

// TODO das muss quatsch sein, oder? ich erstelle vllt ne action (aber nicht mal richtig)
export const updateNugget = (nugget: Nugget): NUGGET_ACTION => (nuggetAction(nugget, NUGGET_ACTION_TYPE.UPDATE_NUGGET));

const nuggetAction = (nugget: Nugget, action: NUGGET_ACTION_TYPE): NUGGET_ACTION => ({ type: action, payload: nugget });