import React from "react";
import "./market-assets-list-item.css";
import { ListItem, ListItemText } from '@material-ui/core';

const MarketAssetsListItem = ({ asset }: any) => {
  const { b, pm, c, o } = asset;
  return (
    <ListItem dense divider>
      <ListItemText
        primary={`${b}/${pm}`}
      />

      <ListItemText
        primary={c}
      />

      <ListItemText
        primary={o * 100 / c - 100}
      />
    </ListItem>
  )
}

export default MarketAssetsListItem;
