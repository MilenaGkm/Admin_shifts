import { all } from 'redux-saga/effects'
import shiftSaga from './shiftSaga'

export default function* rootSaga() {
  yield all([
    shiftSaga(),
  ])
}