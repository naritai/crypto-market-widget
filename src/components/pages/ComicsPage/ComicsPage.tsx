import React, { Component } from 'react';
import Row from '../../Row';
import ErrorBoundry from '../../ErrorBoundry';
import { ComicsList, ComicsDetails } from '../../marvel-components';


export class ComicsPage extends Component {
  state = {
    selectedComics: null
  }

  setComics = (id: number) => {
    this.setState({
      selectedComics: id
    });
  };

  render() {
    const comicsList = (
      <ComicsList onItemClick={this.setComics} />
    );

    const comicsDetails = (
      <ComicsDetails itemId={this.state.selectedComics} />
    );

    return (
      <ErrorBoundry>
        <Row left={comicsList} right={comicsDetails} />
      </ErrorBoundry>
    )
  }
};