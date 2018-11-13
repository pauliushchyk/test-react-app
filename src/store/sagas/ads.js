import { call, put, takeLatest } from 'redux-saga/effects';

import adsActions from '../actions/ads';
import { ADS_GET, REQUEST } from '../actions-types';
import { callAPI } from '../../utils/api';

function* get() {
  try {
    const data = yield call(callAPI, 'https://api.myjson.com/bins/aysly');

    yield put(adsActions.success(data));
  } catch (errors) {
    yield put(adsActions.failure(errors));
  }
}

export default function* saga() {
  yield takeLatest(ADS_GET[REQUEST], get);
}
