import React from 'react';
import { MarvelService } from '../../services/marvelService';
const marvelAPI = new MarvelService();

const MarvelServiceContext = React.createContext(marvelAPI);
const MarvelServiceProvider = MarvelServiceContext.Provider;
const MarvelServiceConsumer = MarvelServiceContext.Consumer;

export {
  MarvelServiceProvider,
  MarvelServiceConsumer
};

export default MarvelServiceContext;