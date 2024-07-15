import { h, render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";

const Main = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

render(<Main />, document.getElementById("app"));
