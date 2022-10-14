import Nugget from "../../nugget/Nugget"
import { SYNCHRONIZED_STATE } from "../State"

type NUGGET_STATE = SYNCHRONIZED_STATE<Array<Nugget>>

export const initialNuggetState: NUGGET_STATE = {
    initialized: false,
    capsuledState: []
}

export default NUGGET_STATE;