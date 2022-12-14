import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './styles/index.css'
import { Provider } from 'react-redux'
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import { logger } from './middlewares'
import thunk from 'redux-thunk'
import {mainReducer} from './reducers/mainReducer'

const composeAlt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancer=composeAlt(
  applyMiddleware(thunk,logger)
)

const store=createStore(
  mainReducer,
  composedEnhancer,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
