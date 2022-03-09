import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal } from "react";
import Dropdown from "../Dropdown";
import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/tuat.png";
import user_menu from "../../assets/JsonData/user_menus.json";

import "./styles.scss";
import { Link } from "react-router-dom";

interface TopNavProps {
  children?: ReactNode;
}

const curr_user = {
  display_name: `¡Duque`,
  image: user_image,
};

const renderNotifications = (
  item: {
    icon: string | undefined;
    content:
      | boolean
      | ReactChild
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
  },
  index: Key | null | undefined
) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="User pic" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

function TopNav({ children }: TopNavProps) {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          {/* Dropdown here */}
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotifications(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* Dropdown here */}
        </div>
        <div className="topnav__right-item">
          <Dropdown />
          {/* theme settings */}
        </div>
      </div>
    </div>
  );
}

export default TopNav;
