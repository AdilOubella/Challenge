import {fork} from "redux-saga/effects";
import userSaga from "./userSaga"
import usersSaga from "./usersSaga"

export default function* rootSaga() {
    yield fork(userSaga)
    yield fork(usersSaga)
    // code after fork-effect
  }