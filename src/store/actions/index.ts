import Axios from 'axios';

export const FETCH_MARKET_DATA_REQUEST = 'FETCH_MARKET_DATA_REQUEST';
export const FETCH_MARKET_DATA_FAILURE = 'FETCH_MARKET_DATA_FAILURE';
export const FETCH_MARKET_DATA_SUCCESS = 'FETCH_MARKET_DATA_SUCCESS';
export const SET_ASSET_FILTER = 'SET_ASSET_FILTER';
export const SET_UPDATED_MARKET_DATA = 'SET_UPDATED_MARKET_DATA';
export const SAVE_MARKET_ASSETS_INDEXES = 'SAVE_MARKET_ASSETS_INDEXES';
export const SET_SEARCH_ASSET_VALUE = 'SET_SEARCH_ASSET_VALUE';
export const SET_ASSETS_SHOW_MODE = 'SET_ASSETS_SHOW_MODE';

const fetchMarketDataRequest = () => ({ type: FETCH_MARKET_DATA_REQUEST });
const fetchMarketDataFailure = () => ({ type: FETCH_MARKET_DATA_FAILURE });
const fetchMarketDataSuccess = (assets: any) => { 
  return {
    type: FETCH_MARKET_DATA_SUCCESS, 
    payload: assets 
  }
};

const setAssetFilter = (filter: any) => (dispatch: any) => {
  return dispatch({
    type: SET_ASSET_FILTER,
    payload: filter
  });
};

const saveMarketAssetIndexes = (assets: any) => (dispatch: any) => {
  const indexes: any = {};

  assets.forEach((asset: any, idx: number) => {
    indexes[asset.s] = idx;
  });

  dispatch({
    type: SAVE_MARKET_ASSETS_INDEXES,
    payload: indexes
  });
}

const fetchMarketData = () => async (dispatch: any, getState: any) => {
  const { marketWidget } = getState();
  const { assetIndexes } = marketWidget;

  dispatch(fetchMarketDataRequest());
  try {
    const payload = await Axios.get(`${process.env.REST_API_BASE}public/asset-service/product/get-products`);
    const { data: { data } } = payload;
    dispatch(fetchMarketDataSuccess(data));

    if (!assetIndexes) {
      dispatch(saveMarketAssetIndexes(data));
    }
  } catch (error) {
    dispatch(fetchMarketDataFailure())
  }
};

const setUpdatedMarketData = ({ data }: any) => (dispatch: any, getState: any) => {
  console.log('setUpdatedMarketData')
  const { marketWidget } = getState();
  const { assetIndexes, assets } = marketWidget;
  if (!assetIndexes) {
    return;
  }

  const parsedData = JSON.parse(data);
  const updatedAssets = assets.slice();

  parsedData.data.forEach((asset: any) => {
    const updatedAssetIdx = assetIndexes[asset.s];
    const { c, l, h, o } = asset;
    updatedAssets[updatedAssetIdx] = {
      ...updatedAssets[updatedAssetIdx],
      c, l, h, o
    };
  });

  dispatch({
    type: SET_UPDATED_MARKET_DATA,
    payload: updatedAssets
  })
};

const setSearchAssetValue = (value: string) => (dispatch: any) => {
  dispatch({
    type: SET_SEARCH_ASSET_VALUE,
    payload: value.trim()
  })
};

const setAssetsShowMode = (mode: string) => (dispatch: any) => {
  dispatch({
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
