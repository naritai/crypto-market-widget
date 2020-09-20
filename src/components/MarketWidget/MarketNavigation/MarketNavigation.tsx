import React, { useCallback } from "react";
import "./market-navigation.css";
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { setAssetFilter } from '../../../store/actions';
import { useSelector, useDispatch } from "react-redux";

const filterSelector = (state: any) => state.marketWidget.filter;

export const MarketNavigation = () => {
  const filter = useSelector<any>(filterSelector);
  const dispatch = useDispatch();

  const setBTCParentMarket = useCallback(() => {
    dispatch(setAssetFilter(ASSETS_FILTER.BTC));
  }, [dispatch]);

  const setBNBParentMarket = useCallback(() => {
    dispatch(setAssetFilter(ASSETS_FILTER.BNB));
  }, [dispatch]);

  const setALTSParentMarket = useCallback(() => {
    dispatch(setAssetFilter(ASSETS_FILTER.ALTS));
  }, [dispatch]);

  const setMargin = useCallback(() => {
    dispatch(setAssetFilter(ASSETS_FILTER.MARGIN));
  }, [dispatch]);

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
