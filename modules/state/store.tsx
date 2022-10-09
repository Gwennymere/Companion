import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import Nugget from "../nugget/Nugget"
import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./persistedReducer";

export const initialState: NUGGET_STATE = {
    nuggets: []
};

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

const persistor = persistStore(store)

type NUGGET_STATE = {
    nuggets: Array<Nugget>
}

export { store, persistor, NUGGET_STATE };