import Axios from 'axios';

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


// const exampleSocket = new WebSocket('wss://stream.binance.com/stream?streams=!miniTicker@arr');

// exampleSocket.onopen = function(arg) {
//   console.log("OPEN!")
//   console.log(arg);
// };

// exampleSocket.onmessage = function (event) {
//   console.log("MESSAGE!")

//   const { data } = event;
//   console.log(JSON.parse(data));
// }

// setTimeout(() => {
//   exampleSocket.close();
// }, 2000);

const fetchMarketData = () => (dispatch: any) => {
  dispatch(fetchMarketDataRequest());

  Axios.get('https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products')
    .then((payload: any) => {
      const { data: { data } } = payload;
      dispatch(fetchMarketDataSuccess(data))
    })
    .catch(() => {
      dispatch(fetchMarketDataFailure())
    })
};

export { fetchMarketData };











