import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "../assets/shared/mobile/menu.svg";
import X from "../assets/shared/mobile/close.svg";

const HeaderMenu = () => {
  const [menu, openMenu] = useState(false);
  console.log(menu);

  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={Logo} className="logo" />
        </Link>

        <div className="linksWrapper">
          <Link to={"/stories"} className="menuLinks">
            STORIES
          </Link>
          <Link to={"/features"} className="menuLinks">
            FEATURES
          </Link>
          <Link to={"/pricing"} className="menuLinks">
            PRICING
          </Link>
        </div>
        <button className="inviteButton">GET AN INVITE</button>

        <img
          src={menu ? X : Menu}
          onClick={() => openMenu(!menu)}
          className="hamburgerMenu"
        />
      </div>

      <div className={menu ? "menu" : "menuNone"}>
        <Link
          to={"/stories"}
          className="storiesLink"
          onClick={() => openMenu(false)}
        >
          STORIES
        </Link>

        <Link
          to={"/features"}
          className="featuresLink"
          onClick={() => openMenu(false)}
        >
          FEATURES
        </Link>

        <Link
          to={"/pricing"}
          className="pricingLink"
          onClick={() => openMenu(false)}
        >
          PRICING
        </Link>

        <div className="line"></div>

        <button className="inviteButton">GET AN INVITE</button>
      </div>

      <div onClick={() => openMenu(false)} className={menu ? "blur" : ""}></div>
    </>
  );
};

export default HeaderMenu;
