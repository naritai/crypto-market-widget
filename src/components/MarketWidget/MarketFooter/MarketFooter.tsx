import React, { useContext } from "react";
import { WebSocketContext } from "../../WebSocketComponent/WebSocketComponent";
import "./market-footer.css";

const MarketFooter = () => {
  const websocket = useContext<any>(WebSocketContext);
  return (
    <div className="market-footer">
      <button className="close-connection-btn" onClick={() => websocket.close()}>
        close connection
      </button>
    </div>
  )
}

export default React.memo(MarketFooter);
