import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { rootReducer } from 'reducers';

export const store = createStore(rootReducer, applyMiddleware(logger) );