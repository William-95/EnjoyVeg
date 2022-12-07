import React, { useContext } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RecipeContext } from "../SetContext";

import Feature from "../components/Feature";
import RandomRecipe from "../components/RandomRecipe";

export default function Home() {
  const { recipeState } = useContext(RecipeContext);

  return (
    <div>
      <header className="headerBg">
        
        <Banner title="Enjoy Veg" subtitle="Watch Some Random Recipes">
          <Link to={'/recipeslist/'} className="btn-primary">
            go to recipe
          </Link>
        </Banner>
      </header>
      
      <Feature/>
      <RandomRecipe/>

        
    </div>
  );
}
