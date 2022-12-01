import React, { useContext } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RecipeContext } from "../SetContext";

import Feature from "../components/Feature";
import RandomRecipe from "../components/RandomRecipe";

export default function Home() {
  const { recipeState } = useContext(RecipeContext);

  return (
    <>
      <header className="headerBg">
        
        <Banner title="Enjoy Veg" subtitle="what the chef recommends">
          <Link to={'/singlerecipe/'+recipeState[0].id} className="btn-primary">
            go to recipe
          </Link>
        </Banner>
      </header>
      
      <Feature/>
      <RandomRecipe/>

        
    </>
  );
}
