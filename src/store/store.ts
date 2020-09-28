import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, sagaMiddleware, logger)
);


sagaMiddleware.run(rootSaga);