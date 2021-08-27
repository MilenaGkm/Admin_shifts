import { all } from 'redux-saga/effects'
// import shiftSaga from './shiftSaga'
import scheduledShiftsSaga from './scheduledShiftsSaga'
import submittedShiftsSaga from './submittedShiftsSaga'
import requestShiftsSaga from './requestShiftsSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    // shiftSaga(),
    scheduledShiftsSaga(),
    submittedShiftsSaga(),
    requestShiftsSaga(),
    userSaga(),
  ])
}