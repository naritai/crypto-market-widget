import React from "react";
import { MarketAssetsListItem } from '../MarketAssetsListItem';
import { Asset, ShowModeInterface } from "../../../store/reducers/marketWidget/types";
import { List } from "antd";
import "./market-assets-list.scss";

interface Props {
  assets: Asset[],
  showMode: keyof ShowModeInterface;
  loading: boolean;
};

export const MarketAssetsList = ({ assets, showMode, loading }: Props) => {
  return (
    <List
      dataSource={assets}
      loading={loading}
      size="small"
      renderItem={item => (
        <MarketAssetsListItem asset={item} showMode={showMode} />
      )}
    />
  )
};
