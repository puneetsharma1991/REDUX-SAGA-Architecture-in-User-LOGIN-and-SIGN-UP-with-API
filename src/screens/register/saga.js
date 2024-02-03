import { put, takeLatest } from 'redux-saga/effects'
import { userSignup } from '../../api/signup';

function* signupUser({ payload }) {
    try {
        const response = yield (userSignup(payload));
        console.log("Response Saga Register: "+response);
        yield put({ type: "REGISTER_SUCCESS", response });
    } catch (error) {
        console.log("Response saga Register: "+error.message);
        yield put({ type: "REGISTER_FAILURE", error: error.message });
    }
}

export default function* signupScreenSaga() {
    yield takeLatest("REGISTER_REQUEST", signupUser);
}