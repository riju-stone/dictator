import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./main.css";
import Titlebar from "./components/Titlebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Titlebar />
      <App />
    </Provider>
  </React.StrictMode>
);
