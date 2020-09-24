import React, { useContext, useCallback } from "react";
import { WebSocketContext } from "../../WebSocketComponent/WebSocketComponent";
import { Button } from "antd";
import "./market-footer.scss";

export const MarketFooter = React.memo(() => {
  const websocket = useContext(WebSocketContext);

  const closeConnection = useCallback(() => {
    if (websocket) {
      websocket.close()
    }
  }, [websocket]);

  return (
    <div className="market-footer">
      <Button  onClick={closeConnection}>
        close connection
      </Button>
    </div>
  )
});
