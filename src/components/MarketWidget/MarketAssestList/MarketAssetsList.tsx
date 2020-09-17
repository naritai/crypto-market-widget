import React from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { ASSETS_FILTER } from '../../../utils/marketWidget';

const MarketAssetsList = ({ 
  assets, 
  filter, 
  searchValue, 
  loading,
  showMode
}: any) => {
  if (loading) {
    return (
      <div className="loading-indicator">
        Loading data...
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

  return (
    <div>
      <MarketAssetsListHeader showMode={showMode} />
      <div className="market-assets-list">
        {
          resolvedAssets && resolvedAssets.map((item: any, idx: any) => {
            return (
              <MarketAssetsListItem key={idx} asset={item} showMode={showMode} />
            )
          })
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return {
    assets: state.marketWidget.assets,
    filter: state.marketWidget.filter,
    searchValue: state.marketWidget.searchValue,
    loading: state.marketWidget.loading,
    showMode: state.marketWidget.showMode,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketAssetsList);
