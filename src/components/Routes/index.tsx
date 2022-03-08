import { ReactNode } from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";
interface RoutesProps {
  children: ReactNode;
}

function Routes({ children }: RoutesProps) {
  return (
    <Switch>
      <Route path="/" element={Dashboard} />
      <Route path="/customers" element={Customers} />
    </Switch>
  );
}

export default Routes;
