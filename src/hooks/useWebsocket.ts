import { useState, useEffect, useRef, useCallback } from "react";

const defaultTimeout = 250;
type onMessageHandler = (value: MessageEvent<any>) => void;
type wsState = WebSocket | null;

const useWebsocket = (url: string, onMessage: onMessageHandler) => {
  const [websocket, setWebsocket] = useState<wsState>(null);
  const [timeout, setTimeoutState] = useState<number>(defaultTimeout);
  const shouldRetry = useRef<boolean>(true); // preserve state between effect calls

  const connectToWebsocket = useCallback(() => {
    const ws = new WebSocket(url);
    ws.onmessage = onMessage;
    let connectionInterval: any = null;

    ws.onopen = () => {
      console.log('Connected to websocket');
      setWebsocket(ws);
      setTimeoutState(defaultTimeout);
      clearInterval(connectionInterval);
    };

    ws.onclose = (event: any) => {
      console.log(
        `Websocket is closed. Reconnect will be attempted in ${Math.min(
            10000 / 1000,
            (timeout + timeout) / 1000
        )} second.`,
        event.reason
      );

      setTimeoutState(prev => prev += timeout);
      connectionInterval = setTimeout(check, Math.min(10000, timeout));
    };

    ws.onerror = (event: any) => {
      console.error('Websocket encountered an error :', event.err);
      ws.close();
    };
  }, [url, onMessage]);

  useEffect(() => { 
    connectToWebsocket();
    return () => websocket?.close();
  }, [connectToWebsocket]);

  const check = () => {
    const isShouldConnect = shouldRetry.current &&
          (!websocket || websocket.readyState === WebSocket.CLOSED);

    if (isShouldConnect) {
      connectToWebsocket();
    }
  };

  return websocket;
};

export { useWebsocket };