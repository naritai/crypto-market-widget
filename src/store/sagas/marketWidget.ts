import { Asset, AssetIndex, AssetUpdated } from './../reducers/marketWidget/types';
import { marketWidgetSelector } from './../selectors/marketWidget';
import { put, takeEvery, call, select } from "redux-saga/effects";
import { 
  FETCH_MARKET_DATA,
  UPDATE_MARKET_DATA
} from './../actions/marketWidget/actionTypes';
import Axios from 'axios';

const GET_ASSETS_URL = 'https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products';

import { 
  fetchMarketDataRequest,
  fetchMarketDataSuccess,
  fetchMarketDataFailure,
  saveMarketAssetIndexes,
  setUpdatedMarketData
} from "../actions/marketWidget/"

function* watchMarketDataRequest() {
  yield takeEvery(FETCH_MARKET_DATA, fetchMarketDataAsync);
};

function* fetchMarketDataAsync() {
  try {
    yield put(fetchMarketDataRequest());
    const data = yield call(() => fetchAssets());
    const marketWidget = yield select(marketWidgetSelector);
    
    if (!Object.entries(marketWidget.assetIndexes).length) {
      const indexes = yield call(() => getMarketAssetsIndexes(data));
      yield put(saveMarketAssetIndexes(indexes));
    }

    yield put(fetchMarketDataSuccess(data));
  } catch (error) {
    yield put(fetchMarketDataFailure());
  }
};

const getMarketAssetsIndexes = (data: Asset[]) => {
  const indexes: AssetIndex = {};
  data.forEach((asset: Asset, idx: number) => {
    indexes[asset.s] = idx;
  });

  return indexes;
};

const fetchAssets = async () => {
  try {
    const payload = await Axios.get(GET_ASSETS_URL);
    const { data: { data } } = payload;
    return data;
  } catch (error) {
    console.error('Failed to fetch assets', error);
  }
};

function* watchMarketDataUpdate() {
  yield takeEvery(UPDATE_MARKET_DATA, updateMarketDataAsync);
};

function* updateMarketDataAsync({ payload }: any) {
  const marketWidget = yield select(marketWidgetSelector);
  const { assetIndexes, assets } = marketWidget;

  const parsedData = JSON.parse(payload);
  const updatedAssets = assets.slice();
  
  parsedData.data.forEach((asset: AssetUpdated) => {
    const updatedAssetIdx = assetIndexes[asset.s];
    const { c, l, h, o } = asset;
    updatedAssets[updatedAssetIdx] = {
      ...updatedAssets[updatedAssetIdx],
      c, l, h, o
    };
  });

  yield put(setUpdatedMarketData(updatedAssets));
}

export {
  watchMarketDataRequest,
  fetchMarketDataAsync,
  watchMarketDataUpdate
};