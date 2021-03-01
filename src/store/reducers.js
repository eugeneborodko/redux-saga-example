import { input } from './input/reducers'
import { asyncReqBtn } from './async-req-button/reducers'
import { feeriyaReq } from './feeriya-request/reducers'
import { combineReducers } from 'redux'

export default combineReducers({
  input,
  asyncReqBtn,
  feeriyaReq,
})
