import React from 'react';
import store from '../../store/store';
import { Provider } from 'react-redux';
import MarketWidget from '../MarketWidget';

export const App = () => {
  return (
    <Provider store={store}>
      <MarketWidget />
    </Provider>
  )
};