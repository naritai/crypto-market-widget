import { Asset, AssetIndex, AssetUpdated } from './../reducers/marketWidget/types';
import { marketWidgetSelector } from './../selectors/marketWidget';
import { put, call, select, takeLatest, all } from "redux-saga/effects";
import Axios from 'axios';
import * as actions from "../actions/marketWidget/";
import * as actionTypes from './../actions/marketWidget/actionTypes';
const GET_ASSETS_URL = 'https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products';

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

function* fetchMarketDataAsync() {
  try {
    yield put(actions.fetchMarketDataRequest());
    const data = yield call(() => fetchAssets());
    const marketWidget = yield select(marketWidgetSelector);
    
    if (!Object.entries(marketWidget.assetIndexes).length) {
      const indexes = yield call(() => getMarketAssetsIndexes(data));
      yield put(actions.saveMarketAssetIndexes(indexes));
    }

    yield put(actions.fetchMarketDataSuccess(data));
  } catch (error) {
    yield put(actions.fetchMarketDataFailure());
  }
};

function* updateMarketData({ payload }: any) {
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

  yield put(actions.setUpdatedMarketData(updatedAssets));
};

export function* watchMarketDataSagas() {
  all([
    yield takeLatest(actionTypes.FETCH_MARKET_DATA, fetchMarketDataAsync),
    yield takeLatest(actionTypes.UPDATE_MARKET_DATA, updateMarketData)
  ])
};
