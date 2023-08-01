import "./styles.scss";
import Logo from "./assets/shared/desktop/logo.svg";
import Menu from "./assets/shared/mobile/menu.svg";
import Hero1 from "./assets/home/mobile/create-and-share.jpg";
import Arrow from "./assets/shared/mobile/arrow.svg";
import ComputerPicture from "./assets/home/mobile/beautiful-stories.jpg";
import BlackArrow from "./assets/shared/desktop/arrow.svg";
import Hero2 from "./assets/home/mobile/designed-for-everyone.jpg";
import Responsive from "./assets/features/desktop/responsive.svg";
import Limit from "./assets/features/desktop/no-limit.svg";
import Emb from "./assets/features/desktop/embed.svg";
import WhiteLogo from "./assets/shared/mobile/whiteLogo.svg";

import Fb from "./assets/shared/desktop/facebook.svg";
import Yt from "./assets/shared/desktop/youtube.svg";
import Tw from "./assets/shared/desktop/twitter.svg";
import P from "./assets/shared/desktop/pinterest.svg";
import Ig from "./assets/shared/desktop/instagram.svg";

function App() {
  return (
    <>
      <div className="header">
        <img src={Logo} />
        <img src={Menu} alt="" />
      </div>

      <div className="illustration1">
        <img src={Hero1} className="hero" />
        <div className="line"></div>

        <div className="illustrationTexts">
          <h1 className="heading">CREATE AND SHARE YOUR PHOTO STORIES.</h1>
          <p className="about">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>

          <div className="submitPart">
            <button className="inviteButton">GET AN INVITE</button>
            <img src={Arrow} />
          </div>
        </div>
      </div>

      <div className="illustration2">
        <img src={ComputerPicture} className="computerPicture" />

        <div className="illustrationTexts">
          <h1 className="heading">BEAUTIFUL STORIES EVERY TIME</h1>
          <p className="about">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="submitPart">
            <button className="inviteButton">VIEW THE STORIES</button>
            <img src={BlackArrow} />
          </div>
        </div>
      </div>

      <div className="illustration3">
        <img src={Hero2} className="heroImage" />

        <div className="illustrationTexts">
          <h1 className="heading">DESIGNED FOR EVERYONE</h1>
          <p className="about">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="submitPart">
            <button className="inviteButton">VIEW THE STORIES</button>
            <img src={BlackArrow} />
          </div>
        </div>
      </div>

      <div className="card1">
        <h1 className="title">The Mountains</h1>
        <p className="author">by John Appleseed</p>
        <div className="line"></div>

        <div className="submitPart">
          <button className="readButton">READ STORY</button>
          <img src={Arrow} />
        </div>
      </div>

      <div className="card2">
        <h1 className="title">Sunset Cityscapes</h1>
        <p className="author">by Benjamin Cruz</p>
        <div className="line"></div>

        <div className="submitPart">
          <button className="readButton">READ STORY</button>
          <img src={Arrow} />
        </div>
      </div>

      <div className="card3">
        <h1 className="title">18 Days Voyage</h1>
        <p className="author">by Alexei Borodin</p>
        <div className="line"></div>

        <div className="submitPart">
          <button className="readButton">READ STORY</button>
          <img src={Arrow} />
        </div>
      </div>

      <div className="card4">
        <h1 className="title">Architecturals</h1>
        <p className="author">by Samantha Brooke</p>
        <div className="line"></div>

        <div className="submitPart">
          <button className="readButton">READ STORY</button>
          <img src={Arrow} />
        </div>
      </div>

      <div className="features">
        <img src={Responsive} />

        <h1 className="heading">100% Responsive</h1>
        <p className="aboutFeature">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="features1">
        <img src={Limit} />

        <h1 className="heading">No Photo Upload Limit</h1>
        <p className="aboutFeature">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="features1">
        <img src={Emb} />

        <h1 className="heading">Available to Embed</h1>
        <p className="aboutFeature">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>

      <div className="footer">
        <img src={WhiteLogo} alt="" />

        <div className="socialMedia">
          <img src={Fb} className="media" />
          <img src={Yt} className="media" />
          <img src={Tw} className="media" />
          <img src={P} className="media" />
          <img src={Ig} className="media" />
        </div>

        <div className="buttonDiv">
          <button className="footerButton">HOME</button>
          <button className="footerButton">STORIES</button>
          <button className="footerButton">FEATURES</button>
          <button className="footerButton">PRICING</button>
        </div>

        <div className="submitPart">
          <button className="inviteButton">GET AN INVITE</button>
          <img src={Arrow} />
        </div>

        <h1 className="copyright">Copyright 2023. All Rights Reserved</h1>
      </div>
    </>
  );
}

export default App;
