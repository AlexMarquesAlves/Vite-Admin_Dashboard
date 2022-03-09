import { ReactNode } from "react";

import "./styles.scss";

interface DropdownProps {
  children?: ReactNode;
}

function Dropdown({ children }: DropdownProps) {
  return (
    <>
      <h1>Dropdown</h1>
      {children}
    </>
  );
}

export default Dropdown;
