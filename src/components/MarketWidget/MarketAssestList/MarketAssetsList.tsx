import React from "react";
import { MarketAssetsListItem } from '../MarketAssetsListItem';
import "./market-assets-list.css";

export const MarketAssetsList = ({ assets, showMode }: any) => {
  return (
    <div className="market-assets-list">
      {
        assets && assets.map((item: any, idx: any) => {
          return (
            <MarketAssetsListItem key={idx} asset={item} showMode={showMode} />
          )
        })
      }
    </div>
  )
};
