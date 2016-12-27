import {CHANGE_LOGIN_STATE} from '../action/index.js'

export default function loginState(state=0,action){
	switch (action.type){
		case CHANGE_LOGIN_STATE:
			return action.userType;
		default:
			return state
	}
}