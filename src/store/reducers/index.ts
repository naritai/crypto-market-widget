import { combineReducers } from 'redux';
import { marketWidget } from './marketWidget';

export const rootReducer = combineReducers({
  marketWidget
});

export type RootState = ReturnType<typeof rootReducer>;
