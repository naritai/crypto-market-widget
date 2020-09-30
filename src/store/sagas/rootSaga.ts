import { all } from "redux-saga/effects";
import { watchMarketDataSagas } from './marketWidget';
import { connect } from "./websocketChannel";

export function* rootSaga() {
  yield all([
    watchMarketDataSagas(),
    connect()
  ])
};