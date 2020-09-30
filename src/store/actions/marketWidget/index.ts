import {  Asset, AssetFilterInterface, ShowModeInterface } from './../../reducers/marketWidget/types';
import { MarketWidgetActionTypes } from "./types";
import {
  FETCH_MARKET_DATA_REQUEST,
  FETCH_MARKET_DATA_FAILURE,
  FETCH_MARKET_DATA_SUCCESS,
  SET_ASSET_FILTER,
  SAVE_MARKET_ASSETS_INDEXES,
  SET_UPDATED_MARKET_DATA,
  SET_SEARCH_ASSET_VALUE,
  SET_ASSETS_SHOW_MODE,
  FETCH_MARKET_DATA,
  UPDATE_MARKET_DATA
} from "./actionTypes";

const fetchMarketData = (): MarketWidgetActionTypes => ({ type: FETCH_MARKET_DATA });
const fetchMarketDataRequest = (): MarketWidgetActionTypes => ({ type: FETCH_MARKET_DATA_REQUEST });
const fetchMarketDataFailure = (): MarketWidgetActionTypes => ({ type: FETCH_MARKET_DATA_FAILURE })
const fetchMarketDataSuccess = (assets: Asset[]): MarketWidgetActionTypes => { 
  return {
    type: FETCH_MARKET_DATA_SUCCESS, 
    payload: assets 
  }
};

const saveMarketAssetIndexes = (indexes: any): MarketWidgetActionTypes => {
  return {
    type: SAVE_MARKET_ASSETS_INDEXES,
    payload: indexes
  }
};

const updateMarketData = ({ data }: { data: string }) => {
  return {
    type: UPDATE_MARKET_DATA,
    payload: data
  }
};

const setUpdatedMarketData = (updatedAssets: Asset[]): MarketWidgetActionTypes => {
  return {
    type: SET_UPDATED_MARKET_DATA,
    payload: updatedAssets
  }
};

const setAssetFilter = (filter: keyof AssetFilterInterface) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_ASSET_FILTER,
    payload: filter
  })
};

const setAssetsShowMode = (mode: keyof ShowModeInterface) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_ASSETS_SHOW_MODE,
    payload: mode
  })
};

const setSearchAssetValue = (value: string) => (dispatch: any): MarketWidgetActionTypes => {
  return dispatch({
    type: SET_SEARCH_ASSET_VALUE,
    payload: value.trim()
  })
};

export {
  fetchMarketDataRequest,
  fetchMarketDataSuccess,
  fetchMarketDataFailure,
  fetchMarketData, 
  setAssetFilter,
  setUpdatedMarketData,
  setSearchAssetValue,
  setAssetsShowMode,
  saveMarketAssetIndexes,
  updateMarketData
};
