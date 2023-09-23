import { all, fork } from "redux-saga/effects";
import { usersSaga } from "./app/appSagas";

function* rootSaga() {
  yield all([fork(usersSaga)]);
}

export { rootSaga };
