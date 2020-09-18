# Market widget - React, Redux, Thunk, TypeScript, Websocket, Cypress

Simple widget, that requests crypto-assets data via binance REST API, then connects to websocket binance server and receives updated parts every ~1000ms. If websocket connection fails, WebsocketComponent will reconnect to the server.

## UI
![Preview](https://github.com/naritai/crypto-market-widget/blob/master/demo.png)
