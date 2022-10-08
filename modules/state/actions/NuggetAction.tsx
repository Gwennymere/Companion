import Nugget from "../../nugget/Nugget";

export enum NUGGET_ACTION_TYPE {
    UPDATE_NUGGET
}

export type NUGGET_ACTION = ({
    type: NUGGET_ACTION_TYPE,
    nugget: Nugget
}) 

export const updateNugget = (nugget: Nugget): NUGGET_ACTION => (nuggetAction(nugget, NUGGET_ACTION_TYPE.UPDATE_NUGGET));

const nuggetAction = (nugget: Nugget, action: NUGGET_ACTION_TYPE): NUGGET_ACTION => ({ type: action, nugget });