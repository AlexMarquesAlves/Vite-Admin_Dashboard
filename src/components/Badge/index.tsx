import { ReactChild, ReactFragment, ReactNode, ReactPortal } from "react";

import "./styles.scss";

interface BadgeProps {
  type: any;
  content:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

function Badge(props: BadgeProps) {
  return <span className={`badge badge-${props.type}`}>{props.content}</span>;
}

export default Badge;
