import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './store/reducers'
import Connected from './Connected'

import createSagaMiddleware from 'redux-saga'
import { watchAll } from './store/sagas'

function App() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware),
  )

  sagaMiddleware.run(watchAll)

  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  )
}

export default App
