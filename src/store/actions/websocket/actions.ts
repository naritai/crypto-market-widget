import * as actionTypes from './actionTypes';

export const connectToWebsocket = () => ({
  type: actionTypes.CONNECT_TO_WEBSOCKET
});

export const disconnectFromWebsocket = () => ({
  type: actionTypes.DISCONNECT_FROM_WEBSOCKET
});

export const disconnectFromWebsocketWithError = () => ({
  type: actionTypes.DISCONNECT_FROM_WEBSOCKET_WITH_ERROR
});

export const websocketError = (error: any) => ({
  type: actionTypes.WEBSOCKET_ERROR,
  payload: error
});

export const successWebsocketConnection = () => ({
  type: actionTypes.SUCCESS_WEBSOCKET_CONNECTION
});

export const successWebsocketDisconnection = () => ({
  type: actionTypes.SUCCESS_WEBSOCKET_DISCONNECTION
});