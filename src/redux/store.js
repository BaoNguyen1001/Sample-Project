import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { createRouterReducer, createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { browserHistory } from './history';
import { authReducers } from '../features/auth/authSlice';
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(browserHistory);

export const store = configureStore({
  reducer: {
    router: createRouterReducer(browserHistory),
    auth: authReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);