import React, { Component } from "react";

export const WebSocketContext = React.createContext(null);

type Props = {
  url: string;
  onMessage: (event: any) => void;
};

class WebSocketComponent extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ws: null
    }
  };

  timeout = 250;

  componentDidMount() {
    this.connect();
  }

  connect = () => {
    const { url, onMessage } = this.props;
    let ws = new WebSocket(url);
    ws.onmessage = onMessage;
  
    let that = this;
    let connectionInterval: any = null;

    ws.onopen = () => {
      console.log('WebSocketComponent has established connection.');
      this.setState({ ws });
      that.timeout = 250;
      clearTimeout(connectionInterval);
    };

    ws.onclose = (event: any) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
            10000 / 1000,
            (that.timeout + that.timeout) / 1000
        )} second.`,
        event.reason
      )

      that.timeout = that.timeout + that.timeout;
      connectionInterval = setTimeout(this.check, Math.min(10000, that.timeout));
    };

    ws.onerror = (event: any) => {
      console.error('Websocket encountered an error :', event.err);
      ws.close();
    }
  };

  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState === WebSocket.CLOSED) {
      this.connect();
    }
  }

  render() {
    return (
      <WebSocketContext.Provider value={this.state.ws}>
        {this.props.children}
      </WebSocketContext.Provider>
    )
  }
};

export default WebSocketComponent;
