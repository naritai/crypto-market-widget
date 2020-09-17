import React from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { ASSETS_FILTER } from '../../../utils/marketWidget';

const mapStateToProps = (state: any) => {
  return {
    assets: state.marketWidget.assets,
    filter: state.marketWidget.filter,
    searchValue: state.marketWidget.searchValue,
    loading: state.marketWidget.loading,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

const MarketAssetsList = ({ assets, filter, searchValue, loading }: any) => {
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
    resolvedAssets = assets && assets.filter((asset: any) => {
      return asset.s.toLowerCase().includes(lower)
    });
  }

  return (
    <div>
      <MarketAssetsListHeader />
      <div className="market-assets-list">
        {
          resolvedAssets && resolvedAssets.map((item: any, idx: any) => {
            return (
              <MarketAssetsListItem key={idx} asset={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketAssetsList);
