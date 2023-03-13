import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_first_div">
        <div className="home_main_div">
          <div className="home_hide_div"></div>
          <h1>moonrepo</h1>
          <h2>New era of productivity tooling</h2>
          <p>
            From build to deploy, moonrepo is a better way to manage codebases,
            save developer time, and boost your business.
          </p>
        </div>
      </div>
      <div className="home_second_div">
        <div className="product_div_1"></div>
      </div>
      <div className="home_third_div">
        <div className="product_div_2"></div>
      </div>
      <div className="home_fourth_div">
        <div className="product_div_3"></div>
      </div>
      <div className="home_fifth_div">
        <div className="product_div_4"></div>
      </div>
    </div>
  );
}

export default Home;
