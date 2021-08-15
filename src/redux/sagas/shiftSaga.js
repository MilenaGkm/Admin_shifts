// import { call, put, takeEvery } from 'redux-saga/effects'
// import { getApi } from '../../services/apiServices';

// function* fetchShifts(action) {
//    try {
//       const shifts = yield call(getApi);
//       yield put({type: 'GET_SHIFTS_SUCCESS', shifts: shifts});
//    } catch (e) {
//       yield put({type: 'GET_SHIFTS_FAILED', message: e.message});
//    }
// }

// function* shiftSaga() {
//    yield takeEvery('GET_SHIFTS_REQUESTED', fetchShifts);
// }

// export default shiftSaga;