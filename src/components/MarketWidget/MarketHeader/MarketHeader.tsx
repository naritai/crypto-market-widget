import React from "react";
import MarketNavigation from '../MarketNavigation';
import MarketSearchPanel from '../MarketSearchPanel';
import "./market-header.css";

const MarketHeader = () => {
  return (
    <div className="market-widget__header">
      <MarketNavigation />
      <MarketSearchPanel />
    </div>
  )
};

export default React.memo(MarketHeader);
