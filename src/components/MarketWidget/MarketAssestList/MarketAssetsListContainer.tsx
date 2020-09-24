import React from "react";
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { MarketAssetsList } from './MarketAssetsList';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/index";
import { Asset } from '../../../store/reducers/marketWidget/types';
import { MarketAssetsListHeader } from './MarketAssetsListHeader';
import "./market-assets-list.scss";

const marketWidgetSelector = (state: RootState) => state.marketWidget;

export const MarketAssetsListContainer = () => {
  const marketWidget = useSelector(marketWidgetSelector);
  const { assets, filter, searchValue, 
    loading, showMode, error } = marketWidget;

  let resolvedAssets = assets;
  if (filter && filter !== ASSETS_FILTER.MARGIN) {
    resolvedAssets = assets && assets.filter((asset: Asset) => {
      return asset.pm === filter;
    })
  }

  if (searchValue) {
    const lower = searchValue.toLowerCase();
    resolvedAssets = resolvedAssets && resolvedAssets.filter((asset: Asset) => {
      return asset.s.toLowerCase().includes(lower)
    });
  }

  const isAssetNotFound = searchValue && resolvedAssets.length === 0;

  return (
    <>
      {(!isAssetNotFound || error) && <MarketAssetsListHeader showMode={showMode} />}
      <div className="market-assets-list-container">
        { error && <span className="error">Some error happened</span>}
        { isAssetNotFound && <span className="asset-not-found">Asset is not found</span>}

        { (!isAssetNotFound || error) && (
          <MarketAssetsList 
            assets={resolvedAssets} 
            showMode={showMode} 
            loading={loading}
          />)
        }
      </div>
    </>
  )
};
