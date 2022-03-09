import { ReactNode } from "react";

import "./styles.scss";

interface TableProps {
  children?: ReactNode;
}

function Table({ children }: TableProps) {
  return (
    <>
      <div>Table</div>
      {children}
    </>
  );
}

export default Table;
