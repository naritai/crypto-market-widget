import { all } from "redux-saga/effects";
import { 
  watchMarketDataRequest, 
  fetchMarketDataAsync,
  watchMarketDataUpdate
} from './marketWidget';

export function* rootSaga() {
  yield all([
    watchMarketDataRequest(),
    fetchMarketDataAsync(),
    watchMarketDataUpdate()
  ])
};