export const LOAD_DATA = 'LOAD_DATA'
export const PUT_DATA = 'PUT_DATA'

export const loadData = () => ({
  type: LOAD_DATA,
})

export const putData = (data) => ({
  type: PUT_DATA,
  payload: data,
})
