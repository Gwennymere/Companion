import { persistStore } from "redux-persist";
import reducers from './reducers';
import Nugget from "../nugget/Nugget"
import { configureStore } from "@reduxjs/toolkit";

export const initialState: NUGGET_STATE = {
    nuggets: []
};

const store = configureStore({reducer: reducers})
const persistor = persistStore(store);

export { store, persistor };

export type NUGGET_STATE = {
    nuggets: Array<Nugget>
}