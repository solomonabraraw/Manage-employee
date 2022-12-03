import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer';
import logger from 'redux-logger';
import { rootSaga } from '../saga/rootSaga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga)

export default store;