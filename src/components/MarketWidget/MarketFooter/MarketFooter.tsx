import React, { useContext, useCallback } from "react";
import { WebSocketContext } from "../../WebSocketComponent/WebSocketComponent";
import "./market-footer.css";

const MarketFooter = () => {
  const websocket = useContext<any>(WebSocketContext);

  const closeConnection = useCallback(() => {
    if (websocket) {
      websocket.close()
    }
  }, [websocket]);

  return (
    <div className="market-footer">
      <button className="close-connection-btn" onClick={closeConnection}>
        close connection
      </button>
    </div>
  )
}

export default React.memo(MarketFooter);
