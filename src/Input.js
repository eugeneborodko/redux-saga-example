import { useSelector, useDispatch } from 'react-redux'

import { changeInputValue } from './store/input/actions'

import styles from './input.module.scss'

const Input = () => {
  const inputValue = useSelector((state) => state.input.inputValue)
  const dispatch = useDispatch()
  console.log(inputValue)

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter the text..."
        value={inputValue}
        onChange={(event) => {
          dispatch(changeInputValue(event.target.value))
        }}
      />
    </>
  )
}

export default Input
