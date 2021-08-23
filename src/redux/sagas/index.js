import { all } from 'redux-saga/effects'
// import shiftSaga from './shiftSaga'
import requestShiftsSaga from './requestShiftsSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    // shiftSaga(),
    requestShiftsSaga(),
    userSaga(),
  ])
}