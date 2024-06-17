import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers';

const store = configureStore({ reducer: rootReducer });

export default store;
