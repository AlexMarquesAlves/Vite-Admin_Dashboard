import { ReactChild, ReactFragment, ReactNode, ReactPortal } from "react";

import "./styles.scss";

interface DropdownProps {
  children?: ReactNode;
  icon: string | undefined;
  badge: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
  customToggle: () =>
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  contentData: any[];
  renderItems: (arg0: any, arg1: any) => any;
  renderFooter: () =>
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown">
      <button className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge} </span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dropdown;
