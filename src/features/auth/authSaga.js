import { authActions } from './authSlice';
import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { push } from '@lagunovsky/redux-react-router';

function* handleLogin(payload) {
  //call api login
  try {
    console.log('handle login')
    const { username, password } = payload.payload
    const result = yield call(() => {
      if (username === 'admin' && password === 'admin') {
        return username;
      }
      return null;
    }, { username, password })

    if (result) {
      localStorage.setItem('username', result);
      yield put(authActions.loginSuccess(result))
      yield put(push('/admin'))
    } else {
      yield put(authActions.loginFailed())
    }

  } catch (error) {
    yield put(authActions.loginFailed(error))
  }
  //set access_token to localStogare
  //redirect to admin page

}

function* handleLogout() {
  console.log('handle logout')
  //remove access_token from localStogare
  localStorage.removeItem('username')
  //redirect to login page
  yield put(push('/login'))
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem('username');
    if (!isLoggedIn) {
      const action = yield take(authActions.login.type);
      yield fork(handleLogin, action);
    }
    yield take([authActions.logout, authActions.loginFailed]);
    yield call(handleLogout);
  }
}


export default function* authSaga() {
  yield fork(watchLoginFlow);
}