import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getBooksReducer from "./reducer/getBooksReducer";

// reducer에 있는 state값 action을 store에 저장
let store = createStore(getBooksReducer, applyMiddleware(thunk));

export default store;
