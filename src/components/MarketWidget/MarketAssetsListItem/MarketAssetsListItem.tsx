import React from "react";
import { ASSETS_MODE } from '../../../utils/marketWidget';
import "./market-assets-list-item.css";

const MarketAssetsListItem = ({ asset, showMode }: any) => {
  const { b, pm, c, o, qv } = asset;

  const isChange = showMode === ASSETS_MODE.CHANGE;
  const resolvedValue = isChange ? (o * 100 / c - 100).toFixed(8) : qv.toFixed(4);

  const pos = resolvedValue > 0;
  const neut = resolvedValue === 0 || showMode === ASSETS_MODE.VOLUME;

  return (
    <div className="market-assets-list-item">
      <span className="list-item__part">{`${b}/${pm}`}</span>
      <span className="list-item__part">{c}</span>
      <span className={`bolded list-item__part ${neut ? '' : `${pos ? 'growth' : 'loss' }`}`}>
        {resolvedValue}
      </span>
    </div>
  )
}

export default MarketAssetsListItem;
