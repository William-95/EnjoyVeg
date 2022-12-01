import React, { useContext } from "react";

import { RecipeContext } from "../SetContext";

import RecipeCard from "../components/RecipeCard";
import Title from "./Title";

export default function RandomRecipe() {
  const { recipeState } = useContext(RecipeContext);
  return (
    <div >
      <Title title='Random Recipes'/>
      <div className="recipeContainer">
        {recipeState.map((item) => {
          return (
            <div className="recipeCard">
              <RecipeCard title={item.title} id={item.id} image={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
