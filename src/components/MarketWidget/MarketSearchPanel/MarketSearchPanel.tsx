import React, { useState, useCallback, ChangeEvent } from "react";
import { setSearchAssetValue, setAssetsShowMode } from '../../../store/actions/marketWidget';
import _ from "lodash";
import { ASSETS_MODE } from '../../../utils/marketWidget';
import { useDebounce } from '../../../hooks/useDebounce';
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_ASSET_DELAY } from '../../../utils/marketSeacrhPanel';
import { marketWidgetSelector } from '../../../store/selectors/marketWidget';
import "./market-search-panel.css";
import { RootState } from '../../../store/reducers';

const searchValueSelector = (state: RootState) => marketWidgetSelector(state).searchValue;
const showModeSelector = (state: RootState) => marketWidgetSelector(state).showMode;

export const MarketSearchPanel = () => {
  const searchValue = useSelector(searchValueSelector);
  const showMode = useSelector(showModeSelector);
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>(searchValue);
  const setSearchValueDebounced = useDebounce(
    (value: string) => dispatch(setSearchAssetValue(value)),
    SEARCH_ASSET_DELAY
  );
  
  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    setSearchValueDebounced(value)
  }, []);

  const changeAssetMode = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setAssetsShowMode(value));
  }, [dispatch]);

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
