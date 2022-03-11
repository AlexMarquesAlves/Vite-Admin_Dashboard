import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./assets/boxicons-2.0.7/css/boxicons.min.scss";
import "./assets/css/grid.scss";
import "./assets/css/index.scss";
import "./assets/css/theme.scss";
import Layout from "./components/Layout";
import rootReducer from "./redux/reducers";
const store = createStore(rootReducer);

document.title = "¡Duque CRM";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
