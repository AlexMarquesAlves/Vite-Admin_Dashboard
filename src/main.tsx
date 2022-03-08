import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
// Styles imports
import "./assets/boxicons-2.0.7/css/boxicons.min.scss";
import "./assets/css/grid.scss";
import "./assets/css/index.scss";

document.title = "¡Duque CRM";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
