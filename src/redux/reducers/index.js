import { combineReducers } from 'redux'
import {filters } from './filters'
import {pizzas} from './pizzas'

export const rootReducer = combineReducers({
    filters, pizzas
})