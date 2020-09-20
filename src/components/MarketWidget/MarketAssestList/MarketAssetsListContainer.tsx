import React from "react";
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { MarketAssetsList } from './MarketAssetsList';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/index";
import "./market-assets-list.scss";
import { Asset } from '../../../store/reducers/marketWidget/types';

const marketWidgetSelector = (state: RootState) => state.marketWidget;

export const MarketAssetsListContainer = () => {
  const marketWidget = useSelector(marketWidgetSelector);
  const {
    assets, filter, searchValue, 
    loading, showMode, error
  } = marketWidget;

  if (error) {
    return (
      <div className="error-indicator">
        Some error happened...
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading-indicator">
        Loading data...
      </div>
    )
  }

  if (!assets.length) {
    return (
      <div className="no-data-indicator">
        No data available...
      </div>
    )
  }

  

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

  if (searchValue && resolvedAssets.length === 0) {
    return (
      <div className="asset-not-found">
        Asset is not found
      </div>
    )
  }

  return <MarketAssetsList assets={resolvedAssets} showMode={showMode} />
};
