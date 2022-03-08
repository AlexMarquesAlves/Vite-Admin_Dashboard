import { ReactNode } from "react";
import "./styles.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Sidebar from "../Sidebar";
import Routes from "../Routes";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <BrowserRouter>
      <Route
        render={(props): any => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__content">
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
