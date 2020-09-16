import React from "react";
import MarketHeader from './MarketHeader';
import MarketBody from './MarketBody';
import { Paper } from '@material-ui/core';
import "./styles.css";

const MarketWidget = () => {
  return (
    <div className="market-widget">
      <Paper square elevation="3">
        <MarketHeader />
        <MarketBody />
      </Paper>
    </div>
  )
};

export default MarketWidget;
