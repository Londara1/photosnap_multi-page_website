import { useState } from "react";
import Hero from "../assets/pricing/mobile/hero.jpg";
import Hero2 from "../assets/pricing/tablet/hero.jpg";
import Check from "../assets/pricing/desktop/check.svg";
import Arrow from "../assets/shared/mobile/arrow.svg";
import Hero2Desktop from "../assets/pricing/desktop/hero.jpg";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <>
      <img src={Hero} className="heroImage" />

      <div className="pricingIntro">
        <div className="line"></div>

        <div className="pricingWrapper">
          <div className="verticalLine"></div>
          <div className="textsDiv">
            <h1 className="pricingHeading">PRICING</h1>
            <p className="pricingAbout">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
        <img src={Hero2} className="hero2" />
        <img src={Hero2Desktop} className="hero2Desktop" />
      </div>

      <div className="pricePlansWrapper">
        <div className="pricePlans">
          <h1
            className={isYearly ? "priceMonthly priceActive" : "priceMonthly"}
          >
            Monthly
          </h1>

          <label className="switch">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="slider round"></span>
          </label>

          <h1
            className={isYearly ? "priceMonthly" : "priceMonthly priceActive"}
          >
            Yearly
          </h1>
        </div>

        <div className="plansWrapper">
          <div className="basicPlan">
            <div className="priceTop">
              <h1 className="basicText">Basic</h1>
              <p className="aboutBasic">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              <button className="claimButton2">PICK PLAN</button>
            </div>

            <div className="priceDiv">
              <h1 className="basicPrice">{isYearly ? "$190.00" : "$19.00"}</h1>
              <p className="priceMonthlyText">per month</p>
            </div>

            <button className="claimButton">PICK PLAN</button>
          </div>

          <div className="line"></div>
          <div>
            <div className="lineDesktop"></div>
            <div className="proPlan">
              <div className="wrapper">
                <div className="verticalLine"></div>
                <div className="textWrapper">
                  <h1 className="proText">Pro</h1>
                  <p className="aboutPro">
                    More advanced features available. Recommended for
                    photography veterans and professionals.
                  </p>
                  <button className="claimButton2">PICK PLAN</button>
                </div>
              </div>

              <div className="proPriceDiv">
                <h1 className="proPrice">{isYearly ? "$390.00" : "$39.00"}</h1>
                <p className="priceMonthlyText">per month</p>
              </div>

              <button className="claimButton">PICK PLAN</button>
            </div>
          </div>

          <div className="businessPlan">
            <div className="priceTop">
              <h1 className="businessText">Business</h1>
              <p className="aboutBusiness">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
              <button className="pickButton">PICK PLAN</button>
            </div>
            <div className="businessPriceDiv">
              <h1 className="businessPrice">
                {isYearly ? "$990.00" : "$99.00"}
              </h1>
              <p className="priceMonthlyText">per month</p>
            </div>

            <button className="claimButton">PICK PLAN</button>
          </div>
        </div>
      </div>

      <div className="chartDiv">
        <div className="compareDiv">
          <h1 className="compare">COMPARE</h1>
        </div>
        <div className="wholeChart">
          <div className="chartIntroWrapper">
            <div>
              <h1 className="chartHeadings">THE FEATURES</h1>
            </div>
            <div className="forTicks">
              <h1 className="chartHeadings">BASIC</h1>
              <h1 className="chartHeadings">PRO</h1>
              <h1 className="chartHeadings">BUSINESS</h1>
            </div>
          </div>
          <div className="line"></div>

          <div className="chartWrapperDiv">
            <div>
              <h1 className="chartHeadings">UNLIMITED STORY POSTING</h1>
            </div>

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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">UNLIMITED PHOTO UPLOAD</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">EMBEDDING CUSTOM CONTENT</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">CUSTOMIZE METADATA</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">ADVANCED METRICS</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">PHOTO DOWNLOADS</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">SEARCH ENGINE INDEXING</h1>
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
          </div>

          <div className="whiteLine"></div>
          <div className="chartWrapperDiv">
            <h1 className="chartHeadings">CUSTOM ANALYTICS</h1>
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
          </div>
          <div className="whiteLine"></div>
        </div>
      </div>

      <div className="inviteDiv">
        <div className="line"></div>

        <div className="lineTextWrapper">
          <div className="verticalLine"></div>
          <h1 className="inviteText">We’re in beta. Get your invite today!</h1>
        </div>

        <div className="invitePart">
          <button className="inviteButton">GET AN INVITE</button>
          <img src={Arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default Pricing;
