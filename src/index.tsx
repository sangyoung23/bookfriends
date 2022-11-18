import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // store안에 저장된 행동지침서를 Provider로 뿌려줌
  <Provider store={store}>
    <App />
  </Provider>
);
