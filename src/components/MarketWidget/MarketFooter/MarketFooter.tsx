import React, { useContext, useCallback } from "react";
import { WebSocketContext } from '..';
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
      <button  onClick={closeConnection} className="close-connection-btn">
        close connection
      </button>
    </div>
  )
});
