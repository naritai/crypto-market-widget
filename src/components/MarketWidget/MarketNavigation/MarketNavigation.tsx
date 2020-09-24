import React, { useCallback } from "react";
import { ASSETS_FILTER } from '../../../utils/marketWidget';
import { setAssetFilter } from '../../../store/actions/marketWidget';
import { useSelector, useDispatch } from "react-redux";
import { marketWidgetSelector } from '../../../store/selectors/marketWidget';
import { RootState } from '../../../store/reducers';
import { Button } from "antd";
import "./market-navigation.scss";

const filterSelector = (state: RootState) => marketWidgetSelector(state).filter;

export const MarketNavigation = () => {
  const filter = useSelector(filterSelector);
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
      <Button
        size="large"
        className="market-nav__btn"
        type={isMarginActive ? 'primary' : 'default'}
        onClick={setMargin}
      >
        margin
      </Button>
      <Button
        size="large"
        className="market-nav__btn"
        type={isBnbActive ? 'primary' : 'default'}
        onClick={setBNBParentMarket}
      >
        bnb
      </Button>
      <Button
        size="large"
        className="market-nav__btn"
        type={isBtcActive ? 'primary' : 'default'}
        onClick={setBTCParentMarket}
      >
        btc
      </Button>

      <Button
        size="large"
        className="market-nav__btn no-margin"
        type={isAltsActive ? 'primary' : 'default'}
        onClick={setALTSParentMarket}
      >
        alts
      </Button>
    </div>
  )
};
