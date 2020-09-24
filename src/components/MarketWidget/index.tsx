import React, { useEffect } from "react";
import { MarketHeader } from './MarketHeader';
import { MarketBody } from './MarketBody';
import { MarketFooter } from './MarketFooter';
import { fetchMarketData, setUpdatedMarketData } from '../../store/actions/marketWidget';
import { WebSocketComponent } from '../WebSocketComponent';
import { WS_URL } from '../../utils/websoketComponent';
import { useThrottle } from '../../hooks/useThrottle';
import { useDispatch } from "react-redux";
import { HANDLE_WS_MESSAGE_DELAY } from '../../utils/marketWidget';
import 'antd/dist/antd.css';
import "./styles.scss";

export const MarketWidget = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMarketData());
  }, []);

  const handleWSMessageThrottled = useThrottle(
    (value: { data: string}) => dispatch(setUpdatedMarketData(value)), 
    HANDLE_WS_MESSAGE_DELAY
  );
  
  return (
    <WebSocketComponent url={WS_URL} onMessage={handleWSMessageThrottled}>
      <div className="market-widget">
        <MarketHeader />
        <MarketBody />
        <MarketFooter />
      </div>
    </WebSocketComponent>
  )
};
