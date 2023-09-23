import { getUserSuccessAction, getUserAction } from "./appReducer";
import axios from "axios";

import { call, put, takeLatest } from "redux-saga/effects";

function fetchUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

function* getUsersSaga(): Generator<any, void, any> {
  try {
    const response = yield call(fetchUsers);
    const users = response.data;
    yield put(getUserSuccessAction(users));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Watcher saga
export function* usersSaga(): any {
  yield takeLatest(getUserAction.type, getUsersSaga);
}
