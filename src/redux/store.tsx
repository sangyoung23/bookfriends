import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import getBooksReducer from "./reducer/getBooksReducer";
import cartReducer from "./reducer/cartReducer";

const persistConfig = {
  key: "CART",
  storage: storage,
  whiteList: ["cartReducer"],
};

const reducer = combineReducers({
  getBooksReducer,
  cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// reducer에 있는 state값 action을 store에 저장
const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;
