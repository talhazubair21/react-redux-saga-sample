import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildSubStateSelector } from "./../subSelector";

const initialState: AppStoreState = {
  users: [],
  loading: false,
};

export type AppState = typeof initialState;

export const appSlice = createSlice<
  AppState,
  {
    setLoading: CaseReducer<AppState, PayloadAction<Boolean>>;
    setUsers: CaseReducer<AppState, PayloadAction<any[]>>;
  }
>({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },

    setUsers: (state, { payload }) => {
      return {
        ...state,
        users: payload,
      };
    },
  },
});

export const useAppSelector = buildSubStateSelector<AppState>(
  (state) => state.app
);

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
