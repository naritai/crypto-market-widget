import React from "react";
import { connect } from 'react-redux';
import MarketAssetsListItem from '../MarketAssetsListItem';
import { List } from '@material-ui/core';
import "./market-assets-list.css";
import MarketAssetsListHeader from './MarketAssetsListHeader';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    height: '370px',
    overflow: 'auto'
  }
});

const mapStateToProps = (state: any) => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

const MarketAssetsList = ({ data }: any) => {
  if (!data) {
    return null;
  }

  const classes = styles();

  return (
    <List dense classes={{ root: classes.root }}>
      <MarketAssetsListHeader />
      {
        data.map((item: any, idx: any) => {
          return (
            <MarketAssetsListItem key={idx} asset={item} />
          )
        })
      }
    </List>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketAssetsList);
