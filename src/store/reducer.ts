import { combineReducers } from "redux";
import { appReducer } from "./app/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootReducer };
