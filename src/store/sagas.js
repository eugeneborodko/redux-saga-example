import { takeEvery, put, call, all } from 'redux-saga/effects'
import { LOAD_DATA, putData } from './async-req-button/actions'
import { LOAD_FEERIYA_DATA, putFeeriyaData } from './feeriya-request/actions'

function fetchData() {
  return fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  ).then((response) => response.json())
}

function fetchFeeriyaData() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json(),
  )
}

function* workerLoadData() {
  const data = yield call(fetchData)
  yield put(putData(data))
}

function* workerLoadFeeriyaData() {
  const data = yield call(fetchFeeriyaData)
  yield put(putFeeriyaData(data))
}

export function* watchAll() {
  yield all([
    takeEvery(LOAD_DATA, workerLoadData),
    takeEvery(LOAD_FEERIYA_DATA, workerLoadFeeriyaData),
  ])
}
