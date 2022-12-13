import React, { useContext } from "react";
import { RecipeContext } from "../SetContext";
import RecipeCard from "../components/RecipeCard";
import Title from "./Title";
import Loading from "./Loading";



export default function RandomRecipe() {
  const { recipeState, loading } = useContext(RecipeContext);
  if (loading.loading ===true) {
    return <Loading />;
  }
  
  return (
    <div>
      <Title title="Random Recipes" />
      <div className="recipeContainer">
        {recipeState.map((item) => {
          return (
            <div className="recipeCard">
              <RecipeCard title={item.title} key={item.id} id={item.id} image={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
         
}
