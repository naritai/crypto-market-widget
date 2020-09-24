import React from "react";
import { ASSETS_MODE } from '../../../utils/marketWidget';
import { ShowModeInterface } from "../../../store/reducers/marketWidget/types";
import { List } from "antd";

type Props = {
  showMode: keyof ShowModeInterface;
};

export const MarketAssetsListHeader = ({ showMode }: Props) => {
  return (
    <List.Item className="list-header">
      <h3 className="list-header__part"> Pair </h3>
      <h3 className="list-header__part"> Last price </h3>
      <h3 className="list-header__part"> {`${showMode === ASSETS_MODE.CHANGE ? 'Change' : 'Volume' }`} </h3>
    </List.Item>
  )
};
