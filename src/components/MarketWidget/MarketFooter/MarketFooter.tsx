import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/websocket/actions';
import "./market-footer.scss";

export const MarketFooter = React.memo(() => {
  const dispatch = useDispatch();

  const closeConnection = useCallback(() => {
    dispatch(actions.disconnectFromWebsocket())
  }, [dispatch]);

  const makeError = useCallback(() => {
    dispatch(actions.disconnectFromWebsocketWithError())
  }, [dispatch]);

  return (
    <div className="market-footer">
      <button  onClick={closeConnection} className="close-connection-btn">
        close normally
      </button>

      <button  onClick={makeError} className="close-connection-btn">
        close abnormally
      </button>
    </div>
  )
});
