import React from "react";
import Hero from "../assets/pricing/mobile/hero.jpg";
import Check from "../assets/pricing/desktop/check.svg";
import Arrow from "../assets/shared/mobile/arrow.svg";

const Pricing: React.FC = () => (
  <>
    <img src={Hero} className="heroImage" />
    <div className="pricingIntro">
      <div className="line"></div>

      <h1 className="pricingHeading">PRICING</h1>
      <p className="pricingAbout">
        Create a your stories, Photosnap is a platform for photographers and
        visual storytellers. It’s the simple way to create and share your
        photos.
      </p>
    </div>

    <div className="pricePlansWrapper">
      <div className="pricePlans">
        <h1 className="priceMonthly">Monthly</h1>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

        <h1 className="priceYearly">Yearly</h1>
      </div>

      <div className="basicPlan">
        <h1 className="basicText">Basic</h1>
        <p className="aboutBasic">
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </p>

        <h1 className="basicPrice">$19.00</h1>
        <p className="priceMonthlyText">per month</p>

        <button className="claimButton">PICK PLAN</button>
      </div>

      <div className="line"></div>
      <div className="proPlan">
        <h1 className="proText">Pro</h1>
        <p className="aboutPro">
          More advanced features available. Recommended for photography veterans
          and professionals.
        </p>

        <h1 className="proPrice">$39.00</h1>
        <p className="priceMonthlyText">per month</p>

        <button className="claimButton">PICK PLAN</button>
      </div>

      <div className="businessPlan">
        <h1 className="businessText">Business</h1>
        <p className="aboutBusiness">
          Additional features available such as more detailed metrics.
          Recommended for business owners.
        </p>

        <h1 className="businessPrice">$99.00</h1>
        <p className="priceMonthlyText">per month</p>

        <button className="claimButton">PICK PLAN</button>
      </div>
    </div>

    <div className="chartDiv">
      <h1 className="chartHeadings">THE FEATURES</h1>
      <div className="line"></div>
      <h1 className="chartHeadings">UNLIMITED STORY POSTING</h1>

      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">UNLIMITED PHOTO UPLOAD</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">EMBEDDING CUSTOM CONTENT</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">CUSTOMIZE METADATA</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
          <img src={Check} className="checkImage" />
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">ADVANCED METRICS</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">PHOTO DOWNLOADS</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">SEARCH ENGINE INDEXING</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>

      <h1 className="chartHeadings">CUSTOM ANALYTICS</h1>
      <div className="whiteLine"></div>
      <div className="plansClassified">
        <div>
          <p className="chartPlanTexts">BASIC</p>
        </div>
        <div>
          <p className="chartPlanTexts">PRO</p>
        </div>
        <div>
          <p className="chartPlanTexts">BUSINESS</p>
          <img src={Check} className="checkImage" />
        </div>
      </div>
      <div className="whiteLine"></div>
    </div>

    <div className="inviteDivPricing">
      <div className="line"></div>
      <h1 className="inviteText">We’re in beta. Get your invite today!</h1>

      <div className="invitePart">
        <button className="inviteButton">GET AN INVITE</button>
        <img src={Arrow} alt="" />
      </div>
    </div>
  </>
);

export default Pricing;
