import React from "react";
import ReactDOM from "react-dom";
import App from "./basicpage";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ParentForm from "./parentForm";

import "./styles.css";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/*<Header />*/}
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/abc" component={ParentForm} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
