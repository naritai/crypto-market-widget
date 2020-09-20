import React from "react";
import { MarketNavigation } from '../MarketNavigation';
import { MarketSearchPanel } from '../MarketSearchPanel';
import "./market-header.scss";

export const MarketHeader = React.memo(() => {
  return (
    <div className="market-widget__header">
      <MarketNavigation />
      <MarketSearchPanel />
    </div>
  )
});
