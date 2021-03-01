import { useSelector, useDispatch } from 'react-redux'

import { loadData } from './store/async-req-button/actions'
import { loadFeeriyaData } from './store/feeriya-request/actions'

import styles from './app.module.scss'
import globalStyles from './global.module.scss'

import Input from './Input'

const Connected = () => {
  const inputValue = useSelector((state) => state.input.inputValue)
  const fetchData = useSelector((state) => state.asyncReqBtn.data)
  const feeriyaData = useSelector((state) => state.feeriyaReq.data)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <div className={styles.div}>555</div>
      <button className={globalStyles.btn}>Add note</button>
      <Input />
      <div className={styles.resultDiv}>{inputValue}</div>
      <button onClick={() => dispatch(loadData())}>Async request</button>
      <div>{fetchData.title}</div>
      <button onClick={() => dispatch(loadFeeriyaData())}>
        Feeriya request
      </button>
      <div>{JSON.stringify(feeriyaData[0])}</div>
    </div>
  )
}

export default Connected
