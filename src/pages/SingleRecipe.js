import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom/";
import SingleRequest from "../components/SingleRequest";

export default function SingleRecipe() {
  return (
    <div>
      <br></br>

      <header className="headerBg">
        <Banner title="the chef recomands">
          <Link to="/" className="btnPrimary">
            back home
          </Link>
        </Banner>
      </header>
      <SingleRequest />
      
    </div>
  );
}
