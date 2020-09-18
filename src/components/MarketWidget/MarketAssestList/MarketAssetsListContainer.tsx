import React from "react";
import { connect } from 'react-redux';
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import MarketAssetsList from './MarketAssetsList';
import "./market-assets-list.css";

const mapStateToProps = (state: any) => {
  return { marketWidget: state.marketWidget }
};

const MarketAssetsListContainer = ({ marketWidget }: any) => {
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
    resolvedAssets = assets && assets.filter((asset: any) => {
      return asset.pm === filter;
    })
  }

  if (searchValue) {
    const lower = searchValue.toLowerCase();
    resolvedAssets = resolvedAssets && resolvedAssets.filter((asset: any) => {
      return asset.s.toLowerCase().includes(lower)
    });
  }

  return <MarketAssetsList assets={resolvedAssets} showMode={showMode} />
};


export default connect(
  mapStateToProps
)(MarketAssetsListContainer);
