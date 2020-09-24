import React, { useState, useCallback, ChangeEvent } from "react";
import { setSearchAssetValue, setAssetsShowMode } from '../../../store/actions/marketWidget';
import _ from "lodash";
import { useDebounce } from '../../../hooks/useDebounce';
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_ASSET_DELAY } from '../../../utils/marketSeacrhPanel';
import { marketWidgetSelector } from '../../../store/selectors/marketWidget';
import { RootState } from '../../../store/reducers';
import { Radio } from "antd";
import "./market-search-panel.scss";
import { ShowModeInterface } from '../../../store/reducers/marketWidget/types';
import { RadioChangeEvent } from 'antd/lib/radio';
import { ASSETS_MODE } from '../../../utils/marketWidget';

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
    setSearchValueDebounced(value);
  }, []);

  const changeAssetMode = useCallback((event: RadioChangeEvent) => {
    const { value } = event.target;
    dispatch(setAssetsShowMode(value as keyof ShowModeInterface));
  }, [dispatch]);

  return (
    <div className="market-search-panel" data-cy="search-panel">
      <input 
        type="text" 
        placeholder="Search"
        value={search}
        className="search-asset-input"
        onChange={handleSearch}
      />

      <Radio.Group onChange={changeAssetMode} value={showMode}>
        <Radio className="radio-btn" style={{ marginRight: 15 }} value={ASSETS_MODE.CHANGE}>Change</Radio>
        <Radio className="radio-btn" value={ASSETS_MODE.VOLUME}>Volume</Radio>
      </Radio.Group>
    </div>
  )
};
