import React from 'react';
import Header from '../Header';
import { MarvelServiceProvider } from '../marvel-service-context';
import { MarvelService } from '../../services/marvelService';
import ErrorBoundry from '../ErrorBoundry';
import CharactersPage from '../pages/CharactersPage';
import ComicsPage from '../pages/ComicsPage';
import '../../bootstrap.min.css';

const marvelAPI = new MarvelService();

export const App = () => {
  return (
    <ErrorBoundry>
      <MarvelServiceProvider value={marvelAPI}>
        <Header />
        <CharactersPage />
        <ComicsPage />
      </MarvelServiceProvider>
    </ErrorBoundry>
  )
};