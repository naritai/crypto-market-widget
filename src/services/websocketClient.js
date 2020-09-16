const ws = new WebSocket('wss://stream.binance.com/stream?streams=!miniTicker@arr');

if (ws.readyState === "CONNECTING") {
  console.log("CONNECTING")
}

if (ws.readyState === "OPEN") {
  console.log("OPEN!")
}