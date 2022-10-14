import Nugget from "../../nugget/Nugget"
import { STANDARD_STATE } from "../State"

type NUGGET_STATE = STANDARD_STATE<Array<Nugget>>

export const initialNuggetState: NUGGET_STATE = {
    initialzed: false,
    capsuledState: []
}

export default NUGGET_STATE;