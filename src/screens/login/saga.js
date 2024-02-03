
import { put, takeLatest } from 'redux-saga/effects';
import { userLogin } from '../../api/login';

function* loginUser({ payload }) {
    try {
        const response = yield (userLogin(payload));
        console.log("Response Saga Login: "+response);
        yield put({ type: "LOGIN_SUCCESS", response });
    } catch (error) {
        console.log("Response Saga Login: "+error);
        yield put({ type: "LOGIN_FAILURE", error: error.message });
    }
}

export default function* loginScreenSaga() {
    yield takeLatest("LOGIN_REQUEST", loginUser);
}