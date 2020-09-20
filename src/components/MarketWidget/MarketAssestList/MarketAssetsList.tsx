import React from "react";
import { MarketAssetsListItem } from '../MarketAssetsListItem';
import { Asset, ShowModeInterface } from "../../../store/reducers/marketWidget/types";
import "./market-assets-list.css";

interface Props {
  assets: Asset[],
  showMode: keyof ShowModeInterface;
};

export const MarketAssetsList = ({ assets, showMode }: Props) => {
  return (
    <div className="market-assets-list">
      {
        assets && assets.map((item: Asset, idx: number) => {
          return (
            <MarketAssetsListItem key={idx} asset={item} showMode={showMode} />
          )
        })
      }
    </div>
  )
};
