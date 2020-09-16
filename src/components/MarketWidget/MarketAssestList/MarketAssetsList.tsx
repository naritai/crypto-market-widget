import React from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import { List } from '@material-ui/core';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { makeStyles } from '@material-ui/core/styles';
import { getFilteredAssets } from '../../../store/selectors/marketWidget';


const styles = makeStyles({
  root: {
    height: '370px',
    overflow: 'auto'
  }
});

const mapStateToProps = (state: any) => {
  return {
    assets: getFilteredAssets(state)
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

const MarketAssetsList = ({ assets }: any) => {
  if (!assets.length) {
    return null;
  }

  const classes = styles();

  return (
    <div className="market-assets-list">
      <MarketAssetsListHeader />
      <List dense classes={{ root: classes.root }}>
        {
          assets.map((item: any, idx: any) => {
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
