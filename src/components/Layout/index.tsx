import { ReactNode } from "react";

import "./styles.scss";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Layout</h1>
      {children}
    </>
  );
}

export default Layout;
