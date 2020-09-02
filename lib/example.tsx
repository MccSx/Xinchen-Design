import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./icon/icon.example";
import "./index.scss";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="head">XinChen-Design</div>
      <div className="content">
        <div className="aside">
          <div className="title">组件</div>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Route path="/icon">
            <IconExample />
          </Route>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
