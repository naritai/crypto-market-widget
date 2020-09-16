import { Button } from '@material-ui/core';
import React from "react";
import "./market-groups.css";

const MarketGroups = () => {
  return (
    <div className="market-groups">
      <Button color="primary">
        Margin
      </Button>

      <Button>
        BNB
      </Button>

      <Button>
        BTC
      </Button>

      <Button>
        ALTS
      </Button>

      <Button>
        USD@
      </Button>
    </div>
  )
}

export default MarketGroups;
