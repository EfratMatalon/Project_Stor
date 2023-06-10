import { combineReducers, createStore } from "redux";
import categoRyreducer from "./Redocer/categoRyreducer";
import clientReducer from "./Redocer/clientReducer";
import gameReducer from "./Redocer/gameReducer";
import buyReducer from "./Redocer/buyReducer";
import BugReducer from "./Redocer/bugReducer"
const reducer=combineReducers({categoRyreducer,clientReducer,gameReducer,buyReducer,BugReducer})
const stor =createStore(reducer)
window.stor=stor
export default stor