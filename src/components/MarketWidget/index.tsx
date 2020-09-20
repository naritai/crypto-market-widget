import React, { useEffect } from "react";
import { MarketHeader } from './MarketHeader';
import { MarketBody } from './MarketBody';
import { MarketFooter } from './MarketFooter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData, setUpdatedMarketData } from '../../store/actions';
import { WebSocketComponent } from '../WebSocketComponent';
import { WS_URL } from '../../utils/websoketComponent';
import { useThrottle } from '../hooks/useThrottle';
import _ from "lodash";
import "./styles.css";

const actions = {
  fetchMarketData, 
  setUpdatedMarketData
};

const HANDLE_WS_MESSAGE_DELAY = 2000;

const mapStateToProps = (state: any) => {
  return { state }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actions, dispatch);
};

const MarketWidget = ({ fetchMarketData, setUpdatedMarketData }: any) => {
  useEffect(() => {
    fetchMarketData();
  }, []);

  const handleWSMessageThrottled = useThrottle(setUpdatedMarketData, HANDLE_WS_MESSAGE_DELAY);
  
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWidget);