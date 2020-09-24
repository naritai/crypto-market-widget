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
      <Button size="large" danger className="close-ws-btn" onClick={closeConnection}>
        close connection
      </Button>
    </div>
  )
});
