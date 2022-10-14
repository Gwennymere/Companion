import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import Nugget from "../nugget/Nugget"
import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./persistedReducer";

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

const persistor = persistStore(store)

export { store, persistor };