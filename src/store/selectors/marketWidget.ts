import { createSelector } from "reselect";
import { ASSETS_FILTER } from '../../utils/marketWidget';

const getAssetFilter = (state: any) => state.marketWidget.filter;
const getAssets = (state: any) => state.marketWidget.assets;

export const getFilteredAssets = createSelector(
  [getAssetFilter, getAssets],
  (assetFilter, assets) => {
    switch (assetFilter) {
      case ASSETS_FILTER.MARGIN:
        return assets;
      case ASSETS_FILTER.BTC:
        return assets.filter((asset: any) => asset.pm === ASSETS_FILTER.BTC);
      case ASSETS_FILTER.BNB:
        return assets.filter((asset: any) => asset.pm === ASSETS_FILTER.BNB);
      default:
        return assets;
    }
  }
);