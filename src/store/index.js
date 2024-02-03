import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from '../store/rootSaga';
import { combinedReducers } from './reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  combinedReducers,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;