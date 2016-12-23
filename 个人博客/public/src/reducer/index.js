import {combineReducers} from 'redux'
import loginState from './loginState.js'
import getData from './getData.js'

const rootReducer=combineReducers({
	loginState,
	getData,
})

export default rootReducer