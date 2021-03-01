export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

export const changeInputValue = (newValue) => ({
  type: CHANGE_INPUT_VALUE,
  payload: newValue,
})
