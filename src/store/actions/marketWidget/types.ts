import { Asset, AssetFilter, AssetIndex, ShowMode } from './../../reducers/marketWidget/types';

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

export interface fetchMarketDataRequestAction {
  type: typeof FETCH_MARKET_DATA_REQUEST;
};

export interface fetchMarketDataFailureAction {
  type: typeof FETCH_MARKET_DATA_FAILURE;
};

export interface fetchMarketDataSuccessAction {
  type: typeof FETCH_MARKET_DATA_SUCCESS;
  payload: Asset[];
};

export interface setAssetFilterAction {
  type: typeof SET_ASSET_FILTER;
  payload: AssetFilter;
};

export interface saveMarketAssetIndexesAction {
  type: typeof SAVE_MARKET_ASSETS_INDEXES;
  payload: AssetIndex;
};

export interface setUpdatedMarketDataAction {
  type: typeof SET_UPDATED_MARKET_DATA;
  payload: Asset[];
};

export interface setSearchAssetValueAction {
  type: typeof SET_SEARCH_ASSET_VALUE;
  payload: string;
};

export interface setAssetsShowModeAction {
  type: typeof SET_ASSETS_SHOW_MODE;
  payload: ShowMode;
};

export type MarketWidgetActionTypes =
  fetchMarketDataRequestAction |
  fetchMarketDataFailureAction |
  fetchMarketDataSuccessAction |
  setAssetFilterAction |
  saveMarketAssetIndexesAction |
  setUpdatedMarketDataAction |
  setSearchAssetValueAction |
  setAssetsShowModeAction;