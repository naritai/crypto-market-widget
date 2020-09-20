import React, { Component } from "react";
export const WebSocketContext = React.createContext<WebSocket | null>(null);

type Props = {
  url: string;
  onMessage: (event: any) => void;
};

type State = {
  ws: WebSocket | null;
  isShouldReconnect: boolean;
};

export class WebSocketComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ws: null,
      isShouldReconnect: true
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
    };

    setTimeout(() => {
      that.setState({ isShouldReconnect: false })
    }, 5000)
  };

  check = () => {
    const { ws, isShouldReconnect } = this.state;
    if ((!ws || ws.readyState === WebSocket.CLOSED) && isShouldReconnect) {
      this.connect();
    }
  };

  componentWillUnmount() {
    const { ws } = this.state;
    this.setState({ isShouldReconnect: false });
    if (ws && ws.close) {
      ws.close();
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
