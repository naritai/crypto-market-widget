import { AssetFilterInterface, ShowModeInterface } from './../store/reducers/marketWidget/types';


export const ASSETS_FILTER: AssetFilterInterface = {
  MARGIN: 'MARGIN',
  BTC: 'BTC',
  BNB: 'BNB',
  ALTS: 'ALTS'
};

export const ASSETS_MODE: ShowModeInterface = {
  CHANGE: 'CHANGE',
  VOLUME: 'VOLUME'
};

export const HANDLE_WS_MESSAGE_DELAY: number = 2000;
