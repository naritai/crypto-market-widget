import React from "react";
import MarketAssetsListContainer from '../MarketAssestList';
import "./market-body.css";

const MarketBody = () => {
  return (
    <div className="market-body">
      <MarketAssetsListContainer />
    </div>
  )
};

export default React.memo(MarketBody);
