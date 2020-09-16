const WS_API = 'wss://stream.binance.com/stream?streams=!miniTicker@arr';

export function connectToWebsocket(hadnleMessage) {
  const ws = new WebSocket(WS_API);

  // ws.onmessage = function (event) {
  //   console.log("MESSAGE!")
  
  //   const { data } = event;
  //   const parsedData = JSON.parse(data);
  //   hadnleMessage(parsedData);
  // }

  return ws;
}