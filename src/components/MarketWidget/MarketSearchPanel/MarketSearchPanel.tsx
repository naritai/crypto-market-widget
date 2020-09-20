import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchAssetValue, setAssetsShowMode } from '../../../store/actions';
import _ from "lodash";
import { ASSETS_MODE } from '../../../utils/marketWidget';
import { useDebounce } from '../../hooks/useDebounce';
import "./market-search-panel.css";

const SEARCH_ASSET_DELAY = 500;

const mapStateToProps = (state: any) => {
  return {
    state: {
      searchValue: state.marketWidget.searchValue,
      showMode: state.marketWidget.showMode,
    }
  }
};

const actions = {
  setSearchAssetValue, 
  setAssetsShowMode
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

const MarketSearchPanelC = ({ state, actions }: any) => {
  const { searchValue, showMode } = state; 
  const { setSearchAssetValue, setAssetsShowMode } = actions;

  const [search, setSearch] = useState<string>(searchValue);
  const setSearchValueDebounced = useDebounce(setSearchAssetValue, SEARCH_ASSET_DELAY);
  
  const handleSearch = (event: any)=> {
    const { value } = event.target;
    setSearch(value);
    setSearchValueDebounced(value);
  };

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

export const MarketSearchPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketSearchPanelC);
