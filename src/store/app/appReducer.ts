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
    getUserAction: CaseReducer<AppState, PayloadAction>;
    getUserSuccessAction: CaseReducer<AppState, PayloadAction<any[]>>;
    // getUserErrorAction: CaseReducer<AppState, PayloadAction<any[]>>;
  }
>({
  name: "app",
  initialState,
  reducers: {
    // setLoading: (state, { payload }) => {
    //   return {
    //     ...state,
    //     loading: payload,
    //   };
    // },

    // setUsers: (state, { payload }) => {
    //   return {
    //     ...state,
    //     users: payload,
    //   };
    // },
    getUserAction: (state) => {
      state.loading = true;
      state.users = [];
    },
    getUserSuccessAction: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
  },
});

export const useAppSelector = buildSubStateSelector<AppState>(
  (state) => state.app
);

export const { getUserAction, getUserSuccessAction } = appSlice.actions;
export const appReducer = appSlice.reducer;
