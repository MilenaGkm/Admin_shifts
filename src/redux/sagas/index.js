import { all } from 'redux-saga/effects'
// import shiftSaga from './shiftSaga'
import submittedShiftsSaga from './submittedShiftsSaga'
import requestShiftsSaga from './requestShiftsSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    // shiftSaga(),
    submittedShiftsSaga(),
    requestShiftsSaga(),
    userSaga(),
  ])
}