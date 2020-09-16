export const FETCH_MARKET_DATA_REQUEST = 'FETCH_MARKET_DATA_REQUEST';
export const FETCH_MARKET_DATA_FAILURE = 'FETCH_MARKET_DATA_FAILURE';
export const FETCH_MARKET_DATA_SUCCESS = 'FETCH_MARKET_DATA_SUCCESS';

const fetchMarketDataRequest = () => ({ type: FETCH_MARKET_DATA_REQUEST });
const fetchMarketDataFailure = () => ({ type: FETCH_MARKET_DATA_FAILURE });
const fetchMarketDataSuccess = (data: any) => { 
  return {
    type: FETCH_MARKET_DATA_SUCCESS, 
    payload: data 
  }
};

const fetchMarketData = (getData: any) => () => (dispatch: any) => {
  dispatch(fetchMarketDataRequest());
  getData()
    .then((data: any) => dispatch(fetchMarketDataSuccess(data)))
    .catch(() => {
      dispatch(fetchMarketDataFailure())
    })
};

export { fetchMarketData };











