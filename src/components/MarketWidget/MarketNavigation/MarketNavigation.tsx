import React from "react";
import "./market-navigation.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { setAssetFilter } from '../../../store/actions';

const mapStateToProps = (state: any) => {
  return {
    filter: state.marketWidget.filter,
    active: state.marketWidget.activeMarketGroup
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ setAssetFilter }, dispatch);
};

const MarketNavigation = ({ setAssetFilter, filter }: any) => {
  const setBTCParentMarket = () => {
    setAssetFilter(ASSETS_FILTER.BTC);
  };

  const setBNBParentMarket = () => {
    setAssetFilter(ASSETS_FILTER.BNB);
  };

  const setALTSParentMarket = () => {
    setAssetFilter(ASSETS_FILTER.ALTS);
  };

  const setMargin = () => {
    setAssetFilter(ASSETS_FILTER.MARGIN);
  };

  const isBtcActive = filter === ASSETS_FILTER.BTC;
  const isBnbActive = filter === ASSETS_FILTER.BNB;
  const isMarginActive = filter === ASSETS_FILTER.MARGIN;
  const isAltsActive = filter === ASSETS_FILTER.ALTS;

  return (
    <div className="market-navigation">
      <button 
        className={`market-navigation__btn ${isMarginActive ? 'active-btn' : ''}`}
        onClick={setMargin}
      >
        margin
      </button>
      <button 
        className={`market-navigation__btn ${isBnbActive ? 'active-btn' : ''}`}
        onClick={setBNBParentMarket}
      >
        bnb
      </button>
      <button 
        className={`market-navigation__btn ${isBtcActive ? 'active-btn' : ''}`}
        onClick={setBTCParentMarket}
      >
        btc
      </button>

      <button 
        className={`market-navigation__btn ${isAltsActive ? 'active-btn' : ''}`}
        onClick={setALTSParentMarket}
      >
        alts
      </button>
    </div>
  )
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MarketNavigation);
