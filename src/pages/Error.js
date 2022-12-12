import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../img/error-404.png";
import Banner from "../components/Banner";
export default function Error() {
  return (
    <div>
      <header className="headerBg">
        <Banner title="404" subtitle="Page not found">
          <Link to={"/"} className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </header>
      <div className="error">
        <img src={errorImg} className="errorImg" alt="" />
        <h4>We have found error, please:</h4>
        <ol>
          <li>Control your search recipe's name</li>
          <li>Control your connection</li>
          <li>Refresh the page</li>
        </ol>
      </div>
    </div>
  );
}
