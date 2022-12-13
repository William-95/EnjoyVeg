import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import SearchList from "../components/SearchList";

const RecipesList = () => {
  return (
    <div>
      <br></br>

      <header className="headerBg">
        <Banner title="List of your research">
          <Link to="/" className="btnPrimary">
            back home
          </Link>
        </Banner>
      </header>

      <SearchList />
    </div>
  );
};

export default RecipesList;
