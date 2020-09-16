import { ListItem, ListItemText, Typography } from '@material-ui/core';
import React from "react";

const MarketAssetsListHeader = () => {
  return (
    <div className="market-assets-list-header">
      <ListItem dense divider>
        <ListItemText>
          <Typography variant="h5" gutterBottom>
            Pair
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography variant="h5" gutterBottom>
            Last price
          </Typography>
        </ListItemText>

        <ListItemText>
          <Typography variant="h5" gutterBottom>
            Change
          </Typography>
        </ListItemText>
      </ListItem>
    </div>
  )
}

export default MarketAssetsListHeader;
