import React from "react";
import { Route, Switch } from "react-router-dom";
import { Customers, Dashboard, Products } from "../../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/Products" component={Products} />
    </Switch>
  );
};

export default Routes;
