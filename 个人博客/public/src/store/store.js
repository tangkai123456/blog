import {createStore} from 'redux'
import reducer from "../reducer/index.js"

export const store=createStore(reducer)