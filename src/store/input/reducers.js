import { CHANGE_INPUT_VALUE } from './actions'

const initialState = {
  inputValue: 'default value',
}

export const input = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.payload,
      }
    }
  }

  return state
}
