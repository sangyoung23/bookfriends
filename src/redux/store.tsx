import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";

// reducer에 있는 state값 action을 store에 저장
let store = createStore(reducer, applyMiddleware(thunk));

export default store;
