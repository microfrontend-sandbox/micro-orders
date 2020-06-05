import React, { FC } from 'react';
import { createBrowserHistory, History } from 'history';
import './App.css';
import { Route, Router, Switch } from "react-router-dom";
import { OrderSummary } from "./OrderSummary/OrderSummary";
import { OrderDetails } from "./OrderDetails/OrderDetails";

const defaultHistory = createBrowserHistory();

interface AppProps {
  history: History;
}

export const App: FC<AppProps> = ({ history }) => {
  return <Router history={history || defaultHistory}>
    <Switch>
      <Route exact path="/orders" component={OrderSummary}/>
      <Route path="/orders/:orderId" component={OrderDetails}/>
    </Switch>
  </Router>
};
