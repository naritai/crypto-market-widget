import React, { useEffect } from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import { List } from '@material-ui/core';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { makeStyles } from '@material-ui/core/styles';
// import { getFilteredAssets } from '../../../store/selectors/marketWidget';
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { setUpdatedMarketData } from '../../../store/actions';
import _ from "lodash";
import { bindActionCreators } from 'redux';

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
  return bindActionCreators({ setUpdatedMarketData }, dispatch);
}

const MarketAssetsList = ({ assets, filter, setUpdatedMarketData }: any) => {
  if (!assets.length) {
    return null;
  }

  useEffect(() => {
    const ws = new WebSocket(`${process.env.WS_API_BASE}stream?streams=!miniTicker@arr`);
    ws.onopen = () => {
      console.log("CONNECTION OPEN!");
    }

    ws.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      delayedUpdateMarketData(parsed)
    }

    setTimeout(() => {
      ws.close();
    }, 5000);
  }, []);

  const delayedUpdateMarketData = _.throttle(
    setUpdatedMarketData,
    3000
  );

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
