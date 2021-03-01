import { PUT_DATA } from './actions'

const initialState = {
  data: {},
}

export const asyncReqBtn = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        ...state,
        data: action.payload,
      }
  }

  return state
}
