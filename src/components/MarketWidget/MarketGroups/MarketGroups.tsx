import React from "react";
import "./market-groups.css";
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

const MarketGroups = ({ setAssetFilter, filter }: any) => {
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
    <div className="market-groups">
      <button 
        className={`market-groups__btn ${isMarginActive ? 'active-btn' : ''}`}
        onClick={setMargin}
      >
        Margin
      </button>
      <button 
        className={`market-groups__btn ${isBnbActive ? 'active-btn' : ''}`}
        onClick={setBNBParentMarket}
      >
        BNB
      </button>
      <button 
        className={`market-groups__btn ${isBtcActive ? 'active-btn' : ''}`}
        onClick={setBTCParentMarket}
      >
        BTC
      </button>

      <button 
        className={`market-groups__btn ${isAltsActive ? 'active-btn' : ''}`}
        onClick={setALTSParentMarket}
      >
        ALTS
      </button>
    </div>
  )
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MarketGroups);
