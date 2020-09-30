import React, { useEffect } from "react";
import { MarketHeader } from './MarketHeader';
import { MarketBody } from './MarketBody';
import { MarketFooter } from './MarketFooter';
import { fetchMarketData } from '../../store/actions/marketWidget';
import { useDispatch } from "react-redux";
import "./styles.scss";
import * as actions from '../../store/actions/websocket/actions';

export const MarketWidget = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketData());
    dispatch(actions.connectToWebsocket());
    return () => {
      dispatch(actions.disconnectFromWebsocket());
    }
  }, [dispatch]);

  return (
    <div className="market-widget" data-cy="market-widget">
      <MarketHeader />
      <MarketBody />
      <MarketFooter />
    </div>
  )
};
