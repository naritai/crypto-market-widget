import React, { Component } from 'react';
import { CharacterList, CharacterDetails } from '../../marvel-components';
import Row from '../../Row';
import ErrorBoundry from '../../ErrorBoundry';
import './charactersPage.css';

export class CharactersPage extends Component {
  state = {
    selectedCharacter: null
  }

  setCharacter = (id: number) => {
    this.setState({
      selectedCharacter: id
    });
  };

  render() {

    const characterList = (
      <CharacterList onItemClick={this.setCharacter} />
    );

    const characterDetails = (
      <CharacterDetails itemId={this.state.selectedCharacter} />
    );

    return (
      <ErrorBoundry>
        <Row left={characterList} right={characterDetails} />
      </ErrorBoundry>
    )
  }
};