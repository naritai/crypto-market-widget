import React from "react";
import MarketGroups from '../MarketGroups';
import MarketSearchPanel from '../MarketSearchPanel';
import "./market-header.css";

const MarketHeader = () => {
  return (
    <div className="market-widget__header">
      <MarketGroups />
      <MarketSearchPanel />
    </div>
  )
};

export default MarketHeader;
