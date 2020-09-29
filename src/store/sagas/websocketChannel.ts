import { WS_URL } from './../../utils/websoketComponent';
import { take, put, fork, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

function createWebsocketConnection(url: string) {
  const socket = new WebSocket(url);
  return socket;
};

function createSocketChannel(socket: any) {
  return eventChannel(emitter => {

    socket.onmessage = (event: any) => {
      emitter(event)
    };

    socket.onclose = (event: any) => {
      emitter(event);
    }

    return () => {
      socket.close();
    }
  })
};

function* listenForSocket() {
  try {
    const socket = yield call(createWebsocketConnection, WS_URL);
    const channel = yield call(createSocketChannel, socket);

    while (true) {
      const payload = yield take(channel);
      console.log(payload);
    }

  } catch (error) {
    console.log('ERROR BLOCK', error)
  } finally {
    console.log('FINALLY block');
  }
};

export function* connect() {
  const socketTask = yield fork(listenForSocket);

  // listen for disconnect action
}



