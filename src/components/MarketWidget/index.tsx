import React from "react";
import MarketWidgetHeader from './MarketWidgetHeader';
import MarketWidgetBody from './MarketWidgetBody';
import { Paper } from '@material-ui/core';
import "./styles.css";

const MarketWidget = () => {
  return (
    <div className="market-widget">
      <Paper square elevation="2">
        <MarketWidgetHeader />
        <MarketWidgetBody />
      </Paper>
    </div>
  )
};

export default MarketWidget;
