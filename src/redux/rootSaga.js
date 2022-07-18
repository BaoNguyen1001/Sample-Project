import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/page/login/authSagaa';


export default function* rootSaga() {
  yield all([
    authSaga()
  ]);
}