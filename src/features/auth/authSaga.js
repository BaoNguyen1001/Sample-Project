import { authActions } from './authSlice'
import { call, fork, put, take } from 'redux-saga/effects'
import { push } from '@lagunovsky/redux-react-router';

function* handleLogin(payload) {
  //call api login
  console.log('handle login')
  localStorage.setItem('access_token', 'fake_token');
  //set access_token to localStogare
  //redirect to admin page
  yield put(push('/admin'))
}

function* handleLogout() {
  console.log('handle logout')
  //remove access_token from localStogare
  localStorage.removeItem('access_token')
  //redirect to login page
  yield put(push('/login'))
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem('access_token');
    if (!isLoggedIn) {
      const action = yield take(authActions.login.type);
      console.log('action ', action)
      yield fork(handleLogin, action);
    }
    yield take(authActions.logout);
    yield call(handleLogout);
  }
}


export default function* authSaga() {
  yield fork(watchLoginFlow);
}