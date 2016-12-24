import {GET_DATA,GET_DATA_SUCCESS,GET_DATA_ERROR} from '../action/index.js'

export default function getData(state=[],action){
	var newState=state;
	switch (action.type){
		case GET_DATA:
			return newState;
		case GET_DATA_SUCCESS:
			return action.data;
		case GET_DATA_ERROR:
			return action.error
		default :
			return state
	}
}