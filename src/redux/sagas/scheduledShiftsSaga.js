import { call, put, takeEvery } from 'redux-saga/effects'
import { getScheduledShifts, postScheduledShiftsApi } from '../../services/apiServices';

function* fetchScheduledShifts(action) {
   try {
      const scheduledShifts = yield call(getScheduledShifts);
      yield put({type: 'GET_SCHEDULED_SHIFTS_SUCCESS', scheduledShifts: scheduledShifts});
   } catch (e) {
      yield put({type: 'GET_SCHEDULED_SHIFTS_FAILED', message: e.message});
   }
}

function* addScheduledShifts(action) {
   try {
      yield call(postScheduledShiftsApi, action.payload);
      // yield addRequestShift();
   } catch (e) {
      yield put({type: 'ADD_SCHEDULED_SHIFTS_FAILED', message: e.message});
   }
}

function* scheduledShiftsSaga() {
   yield takeEvery('GET_SCHEDULED_SHIFTS_REQUESTED', fetchScheduledShifts);
   yield takeEvery('ADD_SCHEDULED_SHIFTS_REQUESTED', addScheduledShifts);
}

export default scheduledShiftsSaga;