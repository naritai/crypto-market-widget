import React, { useEffect } from "react";
import MarketHeader from './MarketHeader';
import MarketBody from './MarketBody';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData } from '../../store/actions';
import "./styles.css";

const mapStateToProps = (state: any) => {
  return { state }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchMarketData }, dispatch);
}

const MarketWidget = ({ state, fetchMarketData }: any) => {
  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <div className="market-widget">
      <Paper square elevation="3">
        <MarketHeader />
        <MarketBody />
      </Paper>
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWidget);
