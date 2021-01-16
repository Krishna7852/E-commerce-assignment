import { all, AllEffect } from "redux-saga/effects";

export default function* rootSaga(): IterableIterator<AllEffect<any>> {
  yield all([
    //   (new SettingsSaga()).watch(),
    //   (new StarsSaga()).watch()
  ]);
}
