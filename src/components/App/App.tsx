import React from 'react';
import Header from '../Header';
import ErrorBoundry from '../ErrorBoundry';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import store from '../../store/store';
import { Provider } from 'react-redux';
import HomePage from '../pages/HomePage';

export const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundry>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route render={() => <PageNotFound />} />
            </Switch>
          </Router>
      </ErrorBoundry>
    </Provider>
  )
};