import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchAssetValue } from '../../../store/actions';
import _ from "lodash";
import "./market-search-panel.css";

const MarketSearchPanel = ({ searchValue, setSearchAssetValue }: any) => {
  const [search, setSearch] = useState<string>(searchValue);
  
  const handleSearch = (event: any)=> {
    const { value } = event.target;
    setSearch(value);
    setSearchDebounced(value);
  };

  const setSearchDebounced = _.debounce(setSearchAssetValue, 500);

  return (
    <div className="market-search-panel">
      <input 
        type="text" 
        placeholder="Search"
        value={search}
        className="search-asset-input"
        onChange={handleSearch}
      />
    
      <label>
        Change
        <input type="radio" />
      </label>

      <label>
        Volume
        <input type="radio" />
      </label>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return {
    searchValue: state.marketWidget.searchValue
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ setSearchAssetValue }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketSearchPanel);
