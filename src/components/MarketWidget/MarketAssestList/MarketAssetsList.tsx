import React from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import { List } from '@material-ui/core';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { makeStyles } from '@material-ui/core/styles';
import { ASSETS_FILTER } from '../../../utils/marketWidget';

const styles = makeStyles({
  root: {
    height: '370px',
    overflow: 'auto'
  }
});

const mapStateToProps = (state: any) => {
  return {
    assets: state.marketWidget.assets,
    filter: state.marketWidget.filter,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

const MarketAssetsList = ({ assets, filter }: any) => {
  if (!assets.length) {
    return null;
  }

  const classes = styles();

  let resolvedAssets = assets;
  if (filter && filter !== ASSETS_FILTER.MARGIN) {
    resolvedAssets = assets.filter((asset: any) => {
      return asset.pm === filter;
    })
  }

  return (
    <div className="market-assets-list">
      <MarketAssetsListHeader />
      <List dense classes={{ root: classes.root }}>
        {
          resolvedAssets.map((item: any, idx: any) => {
            return (
              <MarketAssetsListItem key={idx} asset={item} />
            )
          })
        }
      </List>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketAssetsList);
