import React, { Component } from 'react';

export class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error: any, info: any) {
    console.log(error);
    console.log(info)
    this.setState({ hasError: true })
  };

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <span>Something went wrong... But don't worry</span>
    }
    return this.props.children;
  };
};