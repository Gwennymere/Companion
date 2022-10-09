import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  export default persistReducer(persistConfig, reducers)
