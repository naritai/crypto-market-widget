import React from "react";
import { MarketAssetsListContainer } from '../MarketAssestList';
import "./market-body.scss";

export const MarketBody = React.memo(() => {
  return (
    <div className="market-body" data-cy="market-body">
      <MarketAssetsListContainer />
    </div>
  )
});
