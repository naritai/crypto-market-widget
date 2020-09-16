import Axios from 'axios';
import { connectToWebsocket } from "../../services/websocketClient";

export const FETCH_MARKET_DATA_REQUEST = 'FETCH_MARKET_DATA_REQUEST';
export const FETCH_MARKET_DATA_FAILURE = 'FETCH_MARKET_DATA_FAILURE';
export const FETCH_MARKET_DATA_SUCCESS = 'FETCH_MARKET_DATA_SUCCESS';
export const SET_ASSET_FILTER = 'SET_ASSET_FILTER';

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
}

const handleWSMessage = (updatedAssets: any) => (dispatch: any, getState: any) => {
  console.log("updatedAssets", updatedAssets);
};

const saveWSConnection = (ws: any) => (dispatch: any) => {
  return dispatch({
    type: "SAVE_WS_CONNECTION",
    payload: ws
  })
}

const fetchMarketData = () => (dispatch: any) => {
  dispatch(fetchMarketDataRequest());

  Axios.get('https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products')
    .then((payload: any) => {
      const { data: { data } } = payload;
      dispatch(fetchMarketDataSuccess(data));
      const wsConnection = connectToWebsocket(handleWSMessage);
      dispatch(saveWSConnection(wsConnection));
    })
    .catch(() => {
      dispatch(fetchMarketDataFailure())
    })
};

export { fetchMarketData, setAssetFilter };











