import { ReactNode } from "react";

import "./styles.scss";

interface StatusCardProps {
  children: ReactNode;
}

function StatusCard({ children }: StatusCardProps) {
  return (
    <>
      <h1>Status-Card</h1>
      {children}
    </>
  );
}

export default StatusCard;
