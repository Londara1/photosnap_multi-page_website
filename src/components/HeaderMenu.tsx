import { useState } from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "../assets/shared/mobile/menu.svg";
import X from "../assets/shared/mobile/close.svg";

const HeaderMenu = () => {
  const [menu, openMenu] = useState(false);
  console.log(menu);

  return (
    <>
      <div className="header">
        <img src={Logo} />
        <img src={menu ? X : Menu} onClick={() => openMenu(!menu)} />
      </div>

      <div className={menu ? "menu" : "menuNone"}>
        <button className="storiesLink">STORIES</button>
        <button className="featuresLink">FEATURES</button>
        <button className="pricingLink">PRICING</button>

        <div className="line"></div>

        <button className="inviteButton">GET AN INVITE</button>
      </div>

      <div className={menu ? "blur" : ""}></div>
    </>
  );
};

export default HeaderMenu;
