const initialState = {
  loading: false,
  error: false,
  data: ['test data']
};

import {
  FETCH_MARKET_DATA_REQUEST,
  FETCH_MARKET_DATA_FAILURE,
  FETCH_MARKET_DATA_SUCCESS
} from '../actions/';

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_MARKET_DATA_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      };

    case FETCH_MARKET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    case FETCH_MARKET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;