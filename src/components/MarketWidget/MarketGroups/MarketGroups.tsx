import React, { useState } from "react";
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
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ setAssetFilter }, dispatch);
};

const MarketGroups = ({ setAssetFilter, filter }: any) => {
  const [active, setActive] = useState(filter);

  const setBTCParentMarket = () => {
    setActive(ASSETS_FILTER.BTC);
    setAssetFilter(ASSETS_FILTER.BTC);
  };

  const setBNBParentMarket = () => {
    setActive(ASSETS_FILTER.BNB);
    setAssetFilter(ASSETS_FILTER.BNB);
  };

  const setALTSParentMarket = () => {
    setActive(ASSETS_FILTER.ALTS);
    setAssetFilter(ASSETS_FILTER.ALTS);
  };

  const setMargin = () => {
    setActive(ASSETS_FILTER.MARGIN);
    setAssetFilter(ASSETS_FILTER.MARGIN);
  };

  // const handleALTSChange = (event: any) => {
  //   const { value } = event.target;
  //   setActive(value);
  //   setAssetFilter(value);
  // }

  const isBtcActive = active === ASSETS_FILTER.BTC;
  const isBnbActive = active === ASSETS_FILTER.BNB;
  const isMarginActive = active === ASSETS_FILTER.MARGIN;
  const isAltsActive = active === ASSETS_FILTER.ALTS;

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

      {/* <select
        className={`market-group-select ${isAltsActive ? 'active-btn' : ''}`}
        name="select" 
        onChange={handleALTSChange}
      >
        <option value={""}>ALTS</option> 
        <option value={ASSETS_FILTER.ALTS}>ALTS</option> 
        <option value={ASSETS_FILTER.XPR}>XRP</option> 
        <option value={ASSETS_FILTER.ETH}>ETH</option>
        <option value={ASSETS_FILTER.TRX}>TRX</option>
      </select> */}
    </div>
  )
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MarketGroups);
