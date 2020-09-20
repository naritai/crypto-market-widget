import React from "react";
import { Asset, ShowModeInterface } from '../../../store/reducers/marketWidget/types';
import { ASSETS_MODE } from '../../../utils/marketWidget';
import "./market-assets-list-item.css";

type Props = {
  asset: Asset;
  showMode: keyof ShowModeInterface;
};

export const MarketAssetsListItem = React.memo(({ asset, showMode }: Props) => {
  const { b, pm, c, o, qv } = asset;

  const isChange: boolean = showMode === ASSETS_MODE.CHANGE;
  const resolvedValue = isChange ? Number((o * 100 / c - 100).toFixed(8)) : Number(qv.toFixed(4));

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
});
