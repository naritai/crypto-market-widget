import React, { useEffect } from "react";
import MarketHeader from './MarketHeader';
import MarketBody from './MarketBody';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData, setUpdatedMarketData } from '../../store/actions';
import _ from "lodash";
import WebSocketComponent from '../WebSocketComponent';
import "./styles.css";
import { WebSocketContext } from '../WebSocketComponent/WebSocketComponent';
const websocketUrl = `${process.env.WS_API_BASE}stream?streams=!miniTicker@arr`;

const MarketWidget = ({ fetchMarketData, setUpdatedMarketData }: any) => {
  useEffect(() => {
    fetchMarketData();
  }, []);

  const delayedMessageHandler = _.throttle(
    setUpdatedMarketData,
    3500
  );

  return (
    <WebSocketComponent url={websocketUrl} onMessage={delayedMessageHandler}>
      <WebSocketContext.Consumer>
        {(ws) => {
          return (
            <div className="container">
              <div className="market-widget">
                <div>
                  <MarketHeader />
                  <MarketBody />
                </div>
              </div>

              <button 
                  className="close-connection-btn"
                  onClick={() => ws.close()}
                >
                  close connection
                </button>
            </div>
          )
        }}
      </WebSocketContext.Consumer>
    </WebSocketComponent>
  )
};

const mapStateToProps = (state: any) => {
  return { state }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchMarketData, setUpdatedMarketData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWidget);
