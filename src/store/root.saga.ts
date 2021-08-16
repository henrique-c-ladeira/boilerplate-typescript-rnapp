import { all } from 'redux-saga/effects';
import { watchThemeSaga } from './modules/theme';

export default function* rootSaga() {
  yield all([watchThemeSaga()]);
}
