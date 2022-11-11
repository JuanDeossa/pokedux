import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemonsReducer'
import { uiReducer } from './uiReducer'

export const mainReducer=combineReducers({
  data:pokemonsReducer,
  ui:uiReducer
})

