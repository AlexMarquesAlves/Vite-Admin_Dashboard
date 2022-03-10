import { ReactNode } from "react";

import "./styles.scss";

interface ThemeMenuProps {
  children?: ReactNode;
}

function ThemeMenu({ children }: ThemeMenuProps) {
  return (
    <>
      <h1>ThemeMenu</h1>
      {children}
    </>
  );
}

export default ThemeMenu;
