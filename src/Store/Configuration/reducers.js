import { base, colorOptions, darkTheme, lightTheme } from "./theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { LOG_OUT_SUCCEEDED } from "store/Authentication/actionTypes";


const initialState = {
  // theme: { ...base, ...colorOptions.orange, ...darkTheme },
  theme: { ...base, ...colorOptions.orange, ...lightTheme, colors: colorOptions },
};

const configurationPersistConfig = {
  key: "configuration",
  storage: AsyncStorage,
  blacklist: ["theme"],
};

const configurationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_OUT_SUCCEEDED:
      return initialState;
    default:
      return state;
  }
};

export default persistReducer(configurationPersistConfig, configurationReducer);