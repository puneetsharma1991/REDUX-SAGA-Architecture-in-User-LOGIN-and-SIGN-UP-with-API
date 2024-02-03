import { all } from 'redux-saga/effects';
import  signupScreenSaga  from './../screens/register/saga';
import loginScreenSaga from '../screens/login/saga';

function* rootSaga() {
    yield all([
        signupScreenSaga(),
        loginScreenSaga()
      ])
}

export default rootSaga;