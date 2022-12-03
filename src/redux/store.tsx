import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import getBooksReducer from "./reducer/getBooksReducer";
import cartReducer from "./reducer/cartReducer";

const reducer = combineReducers({
  getBooksReducer,
  cartReducer,
});

// reducer에 있는 state값 action을 store에 저장
const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

export default store;
