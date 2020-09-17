import React from 'react';
import store from '../../store/store';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';

export const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
};