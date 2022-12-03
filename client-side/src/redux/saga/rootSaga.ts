
import { all, fork } from "redux-saga/effects";
import EmployeeSaga from "./EmployeeSaga";

export function* rootSaga() {
    yield all([fork(EmployeeSaga)]);
};