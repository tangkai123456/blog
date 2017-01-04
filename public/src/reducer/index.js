import {combineReducers} from 'redux'
import loginState from './loginState.js'
import getData from './getData.js'
import getMessages from './getMessages.js'

const rootReducer=combineReducers({
	loginState,
	getData,
	getMessages,
})

export default rootReducer