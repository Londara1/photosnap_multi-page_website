import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/shared/mobile/arrow.svg";
import WhiteLogo from "../assets/shared/mobile/whiteLogo.svg";
import Fb from "../assets/shared/desktop/facebook.svg";
import Yt from "../assets/shared/desktop/youtube.svg";
import Tw from "../assets/shared/desktop/twitter.svg";
import P from "../assets/shared/desktop/pinterest.svg";
import Ig from "../assets/shared/desktop/instagram.svg";

const Footer: React.FC = () => (
  <>
    <div className="footer">
      <div className="submitWrapper">
        <img src={WhiteLogo} alt="" />

        <div className="submit">
          <button className="inviteButton">GET AN INVITE</button>
          <img src={Arrow} />
        </div>
      </div>

      <div className="socialMedia">
        <img src={Fb} className="media" />
        <img src={Yt} className="media" />
        <img src={Tw} className="media" />
        <img src={P} className="media" />
        <img src={Ig} className="media" />
      </div>

      <div className="buttonDiv">
        <Link to={"/"} className="footerButton">
          HOME
        </Link>
        <Link to={"/stories"} className="footerButton">
          STORIES
        </Link>
        <Link to={"/features"} className="footerButton">
          FEATURES
        </Link>
        <Link to={"/pricing"} className="footerButton">
          PRICING
        </Link>
      </div>

      <div className="submitPart">
        <button className="inviteButton">GET AN INVITE</button>
        <img src={Arrow} />
      </div>

      <h1 className="mobileCopyright">Copyright 2023. All Rights Reserved</h1>

      <div className="mediaWrapper">
        <div className="mediaDiv">
          <img src={Fb} className="media" />
          <img src={Yt} className="media" />
          <img src={Tw} className="media" />
          <img src={P} className="media" />
          <img src={Ig} className="media" />
        </div>

        <div>
          <h1 className="copyright">Copyright 2023. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
