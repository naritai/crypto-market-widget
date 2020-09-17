import React from "react";
import { ASSETS_MODE } from '../../../utils/marketWidget';

const MarketAssetsListHeader = ({ showMode }: any) => {
  return (
    <div className="market-assets-list-header">
      <h3> Pair </h3>
      <h3> Last price </h3>
      <h3> {`${showMode === ASSETS_MODE.CHANGE ? 'Change' : 'Volume' }`} </h3>
    </div>
  )
}

export default MarketAssetsListHeader;
