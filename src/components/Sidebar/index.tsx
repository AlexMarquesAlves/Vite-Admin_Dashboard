import { ReactNode } from "react";

import "./styles.scss";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({ children }: SidebarProps | any) {
  return (
    <>
      <h1>Sidebar</h1>
      {children}
    </>
  );
}

export default Sidebar;
