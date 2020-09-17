import React, { useEffect } from "react";
import MarketHeader from './MarketHeader';
import MarketBody from './MarketBody';
import { Button, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMarketData, setUpdatedMarketData } from '../../store/actions';
import _ from "lodash";
import WebSocketComponent from '../WebSocketComponent';
import "./styles.css";
import { WebSocketContext } from '../WebSocketComponent/WebSocketComponent';

const websocketUrl = `${process.env.WS_API_BASE}stream?streams=!miniTicker@arr`;

const mapStateToProps = (state: any) => {
  return { state }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchMarketData, setUpdatedMarketData }, dispatch);
}

const MarketWidget = ({ fetchMarketData, setUpdatedMarketData }: any) => {
  useEffect(() => {
    fetchMarketData();
  }, []);

  const delayedMessageHandler = _.throttle(
    setUpdatedMarketData,
    3000
  );

  return (
    <WebSocketComponent url={websocketUrl} onMessage={delayedMessageHandler}>
      <WebSocketContext.Consumer>
        {(ws) => {
          return (
            <div className="market-widget">
              <Paper square elevation="3">
                <MarketHeader />
                <MarketBody />
                <Button onClick={() => ws.close()}>Close ws connection</Button>
              </Paper>
            </div>
          )
        }}
      </WebSocketContext.Consumer>
    </WebSocketComponent>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWidget);
