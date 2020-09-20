import React from "react";
import { MarketAssetsListContainer } from '../MarketAssestList';
import "./market-body.css";

export const MarketBody = React.memo(() => {
  return (
    <div className="market-body">
      <MarketAssetsListContainer />
    </div>
  )
});
