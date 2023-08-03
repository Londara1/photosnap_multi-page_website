import React from "react";
import Hero from "../assets/features/mobile/hero.jpg";
import Responsive from "../assets/features/desktop/responsive.svg";
import Limit from "../assets/features/desktop/no-limit.svg";
import Domain from "../assets/features/desktop/custom-domain.svg";
import Exposure from "../assets/features/desktop/boost-exposure.svg";
import DragDrop from "../assets/features/desktop/drag-drop.svg";
import Arrow from "../assets/shared/mobile/arrow.svg";

const Features: React.FC = () => (
  <>
    <div>
      <img src={Hero} className="heroImage" />

      <div className="featuresAboutDiv">
        <div className="line"></div>

        <h1 className="featuresHeading">FEATURES</h1>
        <p className="featuresAbout">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
    </div>

    <div className="featuresCards">
      <div className="featuresCard">
        <img src={Responsive} />
        <h1 className="featureCardHeading">100% Responsive</h1>
        <p className="featureCardAbout">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="featuresCard2">
        <img src={Limit} />
        <h1 className="featureCardHeading">No Photo Upload Limit</h1>
        <p className="featureCardAbout">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="featuresCard3">
        <img src={Domain} />
        <h1 className="featureCardHeading">Available to Embed</h1>
        <p className="featureCardAbout">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>

      <div className="featuresCard4">
        <img src={Exposure} />
        <h1 className="featureCardHeading">Boost Your Exposure</h1>
        <p className="featureCardAbout">
          Users that viewed your story or gallery can easily get notifed of new
          and featured stories with our built in mailing list.
        </p>
      </div>

      <div className="featuresCard5">
        <img src={Exposure} />
        <h1 className="featureCardHeading">Boost Your Exposure</h1>
        <p className="featureCardAbout">
          Users that viewed your story or gallery can easily get notifed of new
          and featured stories with our built in mailing list.
        </p>
      </div>

      <div className="featuresCard6">
        <img src={DragDrop} />
        <h1 className="featureCardHeading">Drag & Drop Image</h1>
        <p className="featureCardAbout">
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </p>
      </div>
    </div>

    <div className="inviteDiv">
      <div className="line"></div>
      <h1 className="inviteText">We’re in beta. Get your invite today!</h1>

      <div className="invitePart">
        <button className="inviteButton">GET AN INVITE</button>
        <img src={Arrow} alt="" />
      </div>
    </div>
  </>
);

export default Features;
