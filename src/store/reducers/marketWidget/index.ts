import { ASSETS_FILTER, ASSETS_MODE } from '../../../utils/marketWidget';

const initialState = {
  loading: false,
  error: false,
  assets: [],
  assetIndexes: null,
  searchValue: '',
  filter: ASSETS_FILTER.MARGIN,
  showMode: ASSETS_MODE.CHANGE
};

import {
  FETCH_MARKET_DATA_REQUEST,
  FETCH_MARKET_DATA_FAILURE,
  FETCH_MARKET_DATA_SUCCESS,
  SET_ASSET_FILTER,
  SET_UPDATED_MARKET_DATA,
  SAVE_MARKET_ASSETS_INDEXES,
  SET_SEARCH_ASSET_VALUE,
  SET_ASSETS_SHOW_MODE
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
      };

    case SAVE_MARKET_ASSETS_INDEXES:
      return {
        ...state,
        assetIndexes: action.payload
      };
    
    case SET_UPDATED_MARKET_DATA:
      return {
        ...state,
        assets: action.payload
      };

    case SET_SEARCH_ASSET_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    
    case SET_ASSETS_SHOW_MODE:
      return {
        ...state,
        showMode: action.payload
      }

    default:
      return state;
  }
};

export default marketWidget;