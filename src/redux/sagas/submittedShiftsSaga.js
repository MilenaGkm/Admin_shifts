import { call, put, takeEvery } from 'redux-saga/effects'
import { getSubmittedShifts } from '../../services/apiServices';

function* fetchSubmittedShifts(action) {
   try {
      const submittedShifts = yield call(getSubmittedShifts);
      yield put({type: 'GET_SUB_SHIFTS_SUCCESS', submittedShifts: submittedShifts});
   } catch (e) {
      yield put({type: 'GET_SUB_SHIFTS_FAILED', message: e.message});
   }
}

function* submittedShiftsSaga() {
   yield takeEvery('GET_SUB_SHIFTS_REQUESTED', fetchSubmittedShifts);
}

export default submittedShiftsSaga;