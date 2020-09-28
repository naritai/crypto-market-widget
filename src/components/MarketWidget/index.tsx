import React, { useEffect } from "react";
import { MarketHeader } from './MarketHeader';
import { MarketBody } from './MarketBody';
import { MarketFooter } from './MarketFooter';
import { fetchMarketData, updateMarketData } from '../../store/actions/marketWidget';
import { WS_URL } from '../../utils/websoketComponent';
import { useThrottle } from '../../hooks/useThrottle';
import { useDispatch } from "react-redux";
import { HANDLE_WS_MESSAGE_DELAY } from '../../utils/marketWidget';
import { useWebsocket } from '../../hooks/useWebsocket';
import 'antd/dist/antd.css';
import "./styles.scss";

export const WebSocketContext = React.createContext<WebSocket | null>(null);

export const MarketWidget = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMarketData());
  }, []);

  const handleWSMessageThrottled = useThrottle(
    (value: { data: string }) => dispatch(updateMarketData(value)), 
    HANDLE_WS_MESSAGE_DELAY
  );

  const websocket = useWebsocket(WS_URL, handleWSMessageThrottled);

  return (
    <WebSocketContext.Provider value={websocket}>
      <div className="market-widget" data-cy="market-widget">
        <MarketHeader />
        <MarketBody />
        <MarketFooter />
      </div>
    </WebSocketContext.Provider>
  )
};
