import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { pokemonsReducer } from './reducers/pokemonsReducer'
import './styles/index.css'
import { Provider } from 'react-redux'
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import { logger, myFirstPokemon } from './middlewares'

const composedEnhancer=compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger,myFirstPokemon)
)

const store=createStore(
  pokemonsReducer,
  composedEnhancer,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
