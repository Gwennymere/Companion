import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import reducers from "./Reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  export default persistReducer(persistConfig, reducers)
