// src/redux/sagas/userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../slices/userSlice';

const fetchUsersApi = async (page) => {
  const response = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
  return response.json();
};

function* fetchUsersSaga(action) {
  try {
    const { page } = action.payload;
    const data = yield call(fetchUsersApi, page);
    yield put(fetchUsersSuccess({ users: data.results, page }));
  } catch (error) {
    yield put(fetchUsersFailure(error.toString()));
  }
}

function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}

export default userSaga;
