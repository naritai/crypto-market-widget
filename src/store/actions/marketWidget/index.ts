import { 
  Asset,
  AssetFilterInterface,
  AssetIndex,
  ShowModeInterface,
  AssetUpdated
} from './../../reducers/marketWidget/types';
import { MarketWidgetActionTypes } from "./types";
import {
  FETCH_MARKET_DATA_REQUEST,
  FETCH_MARKET_DATA_FAILURE,
  FETCH_MARKET_DATA_SUCCESS,
  SET_ASSET_FILTER,
  SAVE_MARKET_ASSETS_INDEXES,
  SET_UPDATED_MARKET_DATA,
  SET_SEARCH_ASSET_VALUE,
  SET_ASSETS_SHOW_MODE
} from "./actionTypes";
import Axios from 'axios';

const fetchMarketDataRequest = (): MarketWidgetActionTypes => ({ type: FETCH_MARKET_DATA_REQUEST });
const fetchMarketDataFailure = (): MarketWidgetActionTypes => ({ type: FETCH_MARKET_DATA_FAILURE });
const fetchMarketDataSuccess = (assets: Asset[]): MarketWidgetActionTypes => { 
  return {
    type: FETCH_MARKET_DATA_SUCCESS, 
    payload: assets 
  }
};

const setAssetFilter = (filter: AssetFilterInterface) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_ASSET_FILTER,
    payload: filter
  });
};

const saveMarketAssetIndexes = (assets: Asset[]) => {
  return (dispatch: any): MarketWidgetActionTypes => {
    const indexes: AssetIndex = {};
  
    assets.forEach((asset: Asset, idx: number) => {
      indexes[asset.s] = idx;
    });
  
    return dispatch({
      type: SAVE_MARKET_ASSETS_INDEXES,
      payload: indexes
    });
  }
}

const fetchMarketData = () => async (dispatch: any, getState: any) => {
  const { marketWidget } = getState();
  const { assetIndexes } = marketWidget;

  dispatch(fetchMarketDataRequest());
  try {
    const payload = await Axios.get(`${process.env.REST_API_BASE}public/asset-service/product/get-products`);
    const { data: { data } } = payload;
    dispatch(fetchMarketDataSuccess(data));

    if (!Object.entries(assetIndexes).length) {
      dispatch(saveMarketAssetIndexes(data));
    }
  } catch (error) {
    dispatch(fetchMarketDataFailure())
  }
};

const setUpdatedMarketData = ({ data }: { data: string }) => {
  return (dispatch: any, getState: any): MarketWidgetActionTypes => {
    const { marketWidget } = getState();
    const { assetIndexes, assets } = marketWidget;
  
    const parsedData = JSON.parse(data);
    const updatedAssets = assets.slice();
  
    parsedData.data.forEach((asset: AssetUpdated) => {
      const updatedAssetIdx = assetIndexes[asset.s];
      const { c, l, h, o } = asset;
      updatedAssets[updatedAssetIdx] = {
        ...updatedAssets[updatedAssetIdx],
        c, l, h, o
      };
    });
  
    return dispatch({
      type: SET_UPDATED_MARKET_DATA,
      payload: updatedAssets
    })
  }
};

const setSearchAssetValue = (value: string) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_SEARCH_ASSET_VALUE,
    payload: value.trim()
  })
};

const setAssetsShowMode = (mode: ShowModeInterface) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_ASSETS_SHOW_MODE,
    payload: mode
  })
};

export { 
  fetchMarketData, 
  setAssetFilter,
  setUpdatedMarketData,
  setSearchAssetValue,
  setAssetsShowMode
};
