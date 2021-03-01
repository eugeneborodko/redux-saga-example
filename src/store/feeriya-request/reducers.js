import { PUT_FEERIYA_DATA } from './actions'

const initialState = {
  data: {},
}

export const feeriyaReq = (state = initialState, action) => {
  switch (action.type) {
    case PUT_FEERIYA_DATA:
      return {
        ...state,
        data: action.payload,
      }
  }

  return state
}
