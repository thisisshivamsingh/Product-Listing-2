import React from "react";
import "../styles.css";

export const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="electricityBrand">
        <div className="energyLogo" />
        <div
          className="monthEnergyPlan"
          dangerouslySetInnerHTML={{ __html: product.cooling_off_period }}
        ></div>
        <div className="skyBlueHighlightedText">
          <div className="skyBlueHighlightedTextChild" />
          <div className="standardFeedIn">
            {product.solar_rates[0].solar_description}
          </div>
        </div>
        <div
          className="noExitFees"
          dangerouslySetInnerHTML={{ __html: product.view_exit_fee }}
        ></div>
        <div
          className="creditIncludingGst"
          dangerouslySetInnerHTML={{
            __html: product.credit_card_service_fee,
          }}
        ></div>
        <div
          className="noLockInContract"
          dangerouslySetInnerHTML={{ __html: product.contract_length }}
        ></div>
        <div className="energyImageParent">
          <div className="energyImage">
            <div className="energyImageChild" />
            <img
              className="energyaustralia1Icon"
              alt=""
              src={product.provider_image}
            />
          </div>
          <div className="viewDetails">View Details</div>
          <div className="basicPlanInformation">
            Basic Plan Information Document
          </div>
        </div>
        <div className="lessThanTheCurrentReferencWrapper">
          <div className="lessThanTheCurrentContainer">
            <p className="initialRecommendationsAre">
              {product.dmo_percentage.Ausgrid}
            </p>
            <p
              className="initialRecommendationsAre"
              dangerouslySetInnerHTML={{
                __html: product.dmo_content.Ausgrid,
              }}
            ></p>
          </div>
        </div>
        <div
          className="thisOriginAdvantage"
          dangerouslySetInnerHTML={{ __html: product.dmo_content.Ausgrid }}
        ></div>
        <div className="estimatedCostBox">
          <div className="estimatedCostBoxChild"/>
          <div className="estimatedCostBoxItem"/>
          <div className="estimatedCost">Estimated cost</div>
          <div className="yr">
            <span>
              <span className="span">
                ${product.expected_annually_bill_amount}^
              </span>
              <span className="span1">/</span>
            </span>
            <span className="span1">
              <span>yr</span>
            </span>
          </div>
          <div className="mo">
            <span className="span">
              ${product.expected_monthly_bill_amount}
            </span>
            <span className="span1">/mo</span>
          </div>
          <div className="invertedExclamationMark1">
            <div className="invertedExclamationMarkItem" />
            <img className="boxImportantIcon1" alt="" src="" />
          </div>
        </div>
        <div className="tick">
          <div className="energyImageChild"/>
          <img className="vectorIcon1" alt="" src="" />
        </div>
        <div className="componentFooter">
          <div className="componentFooterChild"/>
          <div
            className="theEstimatedCost"
            dangerouslySetInnerHTML={{ __html: product.view_discount }}
          ></div>
          <div className="connectOnlineTodayWrapper">
            <div className="filter">Connect online Today</div>
          </div>
          <div
            className="businessDaysCooling"
            dangerouslySetInnerHTML={{ __html: product.cooling_off_period }}
          ></div>
          <div className="secureSignupIn">{product.green_options_desc}</div>
          <div
            className="saveTimeAnd"}
            dangerouslySetInnerHTML={{ __html: product.view_discount }}
          ></div>
          <div className={"tick1"}>
            <div className={"tickItem"} />
            <img className={"vectorIcon1"} alt="" src="" />
          </div>
          <div className={"tick2"}>
            <div className={"tickItem"} />
            <img className={"vectorIcon1"} alt="" src="" />
          </div>
          <div className={"tick3"}>
            <div className={"tickItem"} />
            <img className={"vectorIcon1"} alt="" src="" />
          </div>
        </div>
        <div className={"tick4"}>
          <div className={"energyImageChild"} />
          <img className={"vectorIcon1"} alt="" src="" />
        </div>
        <div className={"tick5"}>
          <div className={"energyImageChild"} />
          <img className={"vectorIcon1"} alt="" src="" />
        </div>
        <div className={"tick6"}>
          <div className={"energyImageChild"} />
          <img className={"vectorIcon1"} alt="" src="" />
        </div>
      </div>
    </div>
  );
};
