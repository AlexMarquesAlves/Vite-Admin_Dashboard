import React from "react";
import "./styles.scss";

const Badge = (props: {
  type: any;
  content:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <span className={`badge badge-${props.type}`}>{props.content}</span>;
};

export default Badge;
