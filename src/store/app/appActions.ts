import { Dispatch } from "redux";
import { appActions } from "./appReducer";
import axios from "axios";

export const getTasks = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(appActions.setLoading(true));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(appActions.setUsers(response.data));
      dispatch(appActions.setLoading(false));
    } catch (error) {
      dispatch(appActions.setLoading(false));
    }
  };
};
