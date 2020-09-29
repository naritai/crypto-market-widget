import { all } from "redux-saga/effects";
import { watchMarketDataSagas } from './marketWidget';

export function* rootSaga() {
  yield all([
    watchMarketDataSagas()
  ])
};