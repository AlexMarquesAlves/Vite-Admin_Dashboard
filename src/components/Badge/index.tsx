import { ReactNode } from "react";

import "./styles.scss";

interface BadgeProps {
  children?: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <>
      <div>Badge</div>
      {children}
    </>
  );
}

export default Badge;
