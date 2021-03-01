export const PUT_FEERIYA_DATA = 'PUT_FEERIYA_DATA'
export const LOAD_FEERIYA_DATA = 'LOAD_FEERIYA_DATA'

export const putFeeriyaData = (data) => ({
  type: PUT_FEERIYA_DATA,
  payload: data,
})

export const loadFeeriyaData = () => ({
  type: LOAD_FEERIYA_DATA,
})
