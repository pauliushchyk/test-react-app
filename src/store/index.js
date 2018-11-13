import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ads } from './reducers/ads';
import adsSaga from './sagas/ads';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  ads,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(adsSaga);
