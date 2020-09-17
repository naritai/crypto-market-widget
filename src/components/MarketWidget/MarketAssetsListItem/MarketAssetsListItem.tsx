import React from "react";
import "./market-assets-list-item.css";

const MarketAssetsListItem = ({ asset }: any) => {
  const { b, pm, c, o } = asset;
  return (
    <div className="market-assets-list-item">
      <span className="list-item__part">{`${b}/${pm}`}</span>
      <span className="list-item__part">{c}</span>
      <span className="list-item__part">{(o * 100 / c - 100).toFixed(8)}</span>
    </div>
  )
}

export default MarketAssetsListItem;
