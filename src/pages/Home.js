import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Feature from "../components/Feature";
import RandomRecipe from "../components/RandomRecipe";

export default function Home() {
  return (
    <div>
      <header className="headerBg">
        <Banner title="Enjoy Veg" subtitle="Watch Some Random Recipes">
          <Link to={"/recipeslist/"} className="btnPrimary">
            go to recipe
          </Link>
        </Banner>
      </header>

      <Feature />
      <RandomRecipe />
    </div>
  );
}
