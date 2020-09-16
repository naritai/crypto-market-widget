import { ASSETS_FILTER } from '../../../utils/marketWidget';

const initialState = {
  loading: false,
  error: false,
  assets: [],
  filter: ASSETS_FILTER.MARGIN
};

import {
  FETCH_MARKET_DATA_REQUEST,
  FETCH_MARKET_DATA_FAILURE,
  FETCH_MARKET_DATA_SUCCESS,
  SET_ASSET_FILTER
} from '../../actions';

function marketWidget(state = initialState, action: any) {
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
        assets: action.payload
      };

    case SET_ASSET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
};

export default marketWidget;