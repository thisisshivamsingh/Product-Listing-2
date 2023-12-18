import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Listing = () => {
  const [products, setProducts] = useState([]);

  const getToken = async () => {
    try {
      let config = {
        method: "post",
        url: `http://localhost:3001/devcore02.cimet.io/v1/generate-token`,
        headers: {
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        },
      };

      let response = await axios.request(config);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async (token) => {
    try {
      let config = {
        method: "post",
        url: `http://localhost:3001/devcore02.cimet.io/v1/plan-list`,
        headers: {
          "Auth-token": token,
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        },
      };

      let response = await axios.request(config);

      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const takeToken = async () => {
    try {
      const tokenResponse = await getToken();
      let accessToken = tokenResponse?.data?.data?.token;
      const dataResponse = await getData(accessToken);
      setProducts(dataResponse?.data?.data?.electricity);
      console.log("++++++", dataResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    takeToken();
  }, []);

  return (
    <>
      {products?.length === 0 ? (
        <center>
          <h1>Loading...</h1>
        </center>
      ) : (
        <div className="productListing">
          {console.log("======", products)}
          <div className="productListingChild" />
          <div className="button">
            <div className="buttonChild" />
            <div className="electricity">Electricity</div>
            <div className="notifications">
              <div className="notificationsChild" />
              <div className="div">8</div>
            </div>
          </div>
          <div className="button1">
            <div className="filterWrapper">
              <div className="filter">Filter</div>
            </div>
          </div>
          <div className="nsw">2000, NSW</div>
          <div className="mapIcon">
            <div className="mapIconChild" />
            <img className="vectorIcon" alt="" src="" />
          </div>
          <div className="initialRecommendationsAreContainer">
            <p className="initialRecommendationsAre">{`Initial recommendations are based on average medium usage as determined by relevant energy regulators, please view the information hover next to the estimated cost box for more information. For a more `}</p>
            <p className="initialRecommendationsAre">
              accurate comparison relevant to your circumstances, please use the
              Bill Details tab on the results page to enter your most recent
              energy bill details.
            </p>
          </div>
          <div className="invertedExclamationMark">
            <div className="invertedExclamationMarkChild" />
            <img className="boxImportantIcon" alt="" src="" />
          </div>
          {products && <Card products={products} />}
        </div>
      )}
    </>
  );
};
