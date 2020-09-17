import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchAssetValue, setAssetsShowMode } from '../../../store/actions';
import _ from "lodash";
import "./market-search-panel.css";
import { ASSETS_MODE } from '../../../utils/marketWidget';

const MarketSearchPanel = ({ 
    searchValue, 
    showMode, 
    setSearchAssetValue, 
    setAssetsShowMode 
  }: any) => {
  const [search, setSearch] = useState<string>(searchValue);
  
  const handleSearch = (event: any)=> {
    const { value } = event.target;
    setSearch(value);
    setSearchDebounced(value);
  };

  const setSearchDebounced = _.debounce(setSearchAssetValue, 500);

  const changeAssetMode = (event: any) => {
    const { value } = event.target;
    setAssetsShowMode(value);
  };

  return (
    <div className="market-search-panel">
      <input 
        type="text" 
        placeholder="Search"
        value={search}
        className="search-asset-input"
        onChange={handleSearch}
      />
    
      <label className="asset-show-mode">
        Change
        <input
          className="asset-show-mode"
          value={ASSETS_MODE.CHANGE} 
          id={ASSETS_MODE.CHANGE} 
          type="radio" 
          name="showMode"
          checked={showMode === ASSETS_MODE.CHANGE}
          onChange={changeAssetMode}
        />
      </label>

      <label className="asset-show-mode">
        Volume
        <input
          className="asset-show-mode"
          value={ASSETS_MODE.VOLUME} 
          id={ASSETS_MODE.VOLUME} 
          type="radio"
          name="showMode"
          checked={showMode === ASSETS_MODE.VOLUME}
          onChange={changeAssetMode}
        />
      </label>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return {
    searchValue: state.marketWidget.searchValue,
    showMode: state.marketWidget.showMode,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ setSearchAssetValue, setAssetsShowMode }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketSearchPanel);
