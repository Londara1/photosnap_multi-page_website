import React from "react";
import Arrow from "../assets/shared/mobile/arrow.svg";
import Hero1 from "../assets/home/mobile/create-and-share.jpg";
import ComputerPicture from "../assets/home/mobile/beautiful-stories.jpg";
import BlackArrow from "../assets/shared/desktop/arrow.svg";
import Hero2 from "../assets/home/mobile/designed-for-everyone.jpg";
import Responsive from "../assets/features/desktop/responsive.svg";
import Limit from "../assets/features/desktop/no-limit.svg";
import Emb from "../assets/features/desktop/embed.svg";

import HeroTablet from "../assets/home/tablet/create-and-share.jpg";
import ComputerPictureTablet from "../assets/home/tablet/beautiful-stories.jpg";
import Hero2Tablet from "../assets/home/tablet/designed-for-everyone.jpg";
import Hero1Desktop from "../assets/home/desktop/create-and-share.jpg";
import ComputerPictureDesktop from "../assets/home/desktop/beautiful-stories.jpg";
import Hero2Desktop from "../assets/home/desktop/designed-for-everyone.jpg";

const Home: React.FC = () => (
  <>
    <div className="illustration1">
      <img src={Hero1} className="hero" />

      <div className="illustrationWrapper">
        <div className="illustrationTexts">
          <div className="line"></div>
          <div className="textsWrapper">
            <div className="lineVertical"></div>
            <div>
              <h1 className="heading">CREATE AND SHARE YOUR PHOTO STORIES.</h1>
              <p className="about">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>

              <div className="submitPart">
                <button className="inviteButton">GET AN INVITE</button>
                <img src={Arrow} />
              </div>
            </div>
          </div>
        </div>
        <img src={HeroTablet} className="heroTablet" />
        <img src={Hero1Desktop} className="heroDesktop" />
      </div>
    </div>
    <div className="illustration2">
      <img src={ComputerPicture} className="computerPicture" />

      <div className="illustrationWrapper">
        <img src={ComputerPictureTablet} className="computerPictureTablet" />
        <img src={ComputerPictureDesktop} className="computerPictureDesktop" />
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
    </div>
    <div className="illustration3">
      <img src={Hero2} className="heroImage" />

      <div className="illustrationWrapper">
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
        <img src={Hero2Tablet} className="heroWithCamera" />
        <img src={Hero2Desktop} className="heroCameraDesktop" />
      </div>
    </div>

    <div className="cardsWrapper">
      <div className="card1">
        <div className="paddingDiv">
          <h1 className="title">The Mountains</h1>
          <p className="author">by John Appleseed</p>
          <div className="line"></div>

          <div className="submitPart">
            <button className="readButton">READ STORY</button>
            <img src={Arrow} />
          </div>
        </div>
        <div className="cardUnderline"></div>
      </div>

      <div className="card2">
        <div className="paddingDiv">
          <h1 className="title">Sunset Cityscapes</h1>
          <p className="author">by Benjamin Cruz</p>
          <div className="line"></div>

          <div className="submitPart">
            <button className="readButton">READ STORY</button>
            <img src={Arrow} />
          </div>
        </div>
        <div className="cardUnderline"></div>
      </div>
      <div className="card3">
        <div className="paddingDiv">
          <h1 className="title">18 Days Voyage</h1>
          <p className="author">by Alexei Borodin</p>
          <div className="line"></div>

          <div className="submitPart">
            <button className="readButton">READ STORY</button>
            <img src={Arrow} />
          </div>
        </div>
        <div className="cardUnderline"></div>
      </div>
      <div className="card4">
        <div className="paddingDiv">
          <h1 className="title">Architecturals</h1>
          <p className="author">by Samantha Brooke</p>
          <div className="line"></div>

          <div className="submitPart">
            <button className="readButton">READ STORY</button>
            <img src={Arrow} />
          </div>
        </div>
        <div className="cardUnderline"></div>
      </div>
    </div>

    <div className="featuresWrapper">
      <div className="features">
        <div className="featureIconsDiv">
          <img src={Responsive} />
        </div>

        <h1 className="heading">100% Responsive</h1>
        <p className="aboutFeature">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>
      <div className="features1">
        <div className="featureIconsDiv">
          <img src={Limit} />
        </div>

        <h1 className="heading">No Photo Upload Limit</h1>
        <p className="aboutFeature">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>
      <div className="features2">
        <div className="featureIconsDiv">
          <img src={Emb} />
        </div>

        <h1 className="heading">Available to Embed</h1>
        <p className="aboutFeature">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>
    </div>
  </>
);

export default Home;
