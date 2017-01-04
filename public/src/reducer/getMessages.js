import {GET_MESSAGES} from '../action/index.js'

export default function getMessages(state=[],action){
	switch (action.type){
		case GET_MESSAGES:
			return action.data;
		default:
			return state
	}
}