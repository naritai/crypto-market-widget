import { WS_URL } from './../../utils/websoketComponent';
import { take, put, call, cancel, cancelled, fork } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import { updateMarketData } from "../actions/marketWidget/index";
import * as actionTypes from "../actions/websocket/actionTypes";
import * as actions from "../actions/websocket/actions";

let socket: WebSocket;

function createEventChannelForSocket() {
  return eventChannel(emitter => {

    function createWSConnection(url: string) {
      socket = new WebSocket(url);

      socket.onopen = () => {
        console.log('Socket connection has been established');
      };

      socket.onerror = (event) => {
        console.log('Some error happened', event);
      };

      socket.onmessage = (event: any) => {
        emitter(event)
      };

      socket.onclose = (event: any) => {
        console.log("ONCLOSE EVENT", event)
        if (event.code === 1005) {
          console.log('Socket connection is closed');
          emitter(END); // close channel when websocket is closed
        } else {
          console.log('Websocket is closed unexpectedly. Reconnect will be attmpt in 3 sec.');
          setTimeout(() => {
            createWSConnection(url);
          }, 3000)
        }
      };
    };

    createWSConnection(WS_URL);

    return () => {
      socket.onmessage = null;
      socket.close();
    }
  })
};

function* listenerForSocketMessagesSaga() {
  let socketEventChannel;

  try {
    socketEventChannel = yield call(createEventChannelForSocket);

    yield put(actions.successWebsocketConnection());

    while (true) {
      const payload = yield take(socketEventChannel);
      yield put(updateMarketData(payload));
    }
  } catch (error) {
    yield put(actions.websocketError(
      `Some error happened while connecting to websocket, ${error}`
    ));
  } finally {
    if (yield cancelled()) {
      socketEventChannel.close();
    } else {
      yield put(actions.websocketError('Websocket was disconnected due some error'));
    }
  }
};

export function* connect() {
  while (true) {
    yield take(actionTypes.CONNECT_TO_WEBSOCKET);
    // should use fork as not to block DISCONNECT actionType below
    const socketTask = yield fork(listenerForSocketMessagesSaga);

    yield take(actionTypes.DISCONNECT_FROM_WEBSOCKET_WITH_ERROR);
    yield socket.close(1000);

    yield take(actionTypes.DISCONNECT_FROM_WEBSOCKET);
    yield cancel(socketTask);
    yield put(actions.successWebsocketDisconnection());
  }
};
