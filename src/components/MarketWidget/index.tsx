import React, { useEffect } from "react";
import MarketHeader from './MarketHeader';
import MarketBody from './MarketBody';
import MarketFooter from './MarketFooter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData, setUpdatedMarketData } from '../../store/actions';
import WebSocketComponent from '../WebSocketComponent';
import { WS_URL } from '../../utils/websoketComponent';
import _ from "lodash";
import "./styles.css";

const actions = {
  fetchMarketData, 
  setUpdatedMarketData
};

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

  const handleWSMessage = _.throttle(
    setUpdatedMarketData,
    2000
  );

  return (
    <WebSocketComponent url={WS_URL} onMessage={handleWSMessage}>
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