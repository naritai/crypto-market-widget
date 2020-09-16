import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData } from '../../../store/actions';
import MarketAssetsList from '../MarketAssestList';
import "./market-body.css";

const mapStateToProps = (state: any) => {
  return { state }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchMarketData }, dispatch);
}

const MarketBody = ({ state, fetchMarketData }: any) => {
  // console.log(state);

  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <div className="market-body">
      <MarketAssetsList />
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketBody);
