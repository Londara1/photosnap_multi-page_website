import React from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "../assets/shared/mobile/menu.svg";

const HeaderMenu: React.FC = () => (
  <>
    <div className="header">
      <img src={Logo} />
      <img src={Menu} alt="" />
    </div>
  </>
);

export default HeaderMenu;
