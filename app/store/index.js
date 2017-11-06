import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducers'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware), autoRehydrate())
  )
  
  persistStore(store, { storage: AsyncStorage })


export default store;
