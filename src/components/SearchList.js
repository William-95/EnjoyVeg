import React, { useContext } from "react";
import { RecipeContext } from "../SetContext";
import RecipeCard from "../components/RecipeCard";
import Title from "../components/Title";
import Filter from "./Filter";

export default function SearchList() {
  const { recipeState } = useContext(RecipeContext);
  return (
    <div>
      <Title title="Search Recipes" />
      <Filter />
      <div className="searchListContainer">
        <div className="searchList">
          {recipeState.map((item) => {
            
            return (
            
              <RecipeCard title={item.title} id={item.id} image={item.image}/>
             
            );
          })}
        </div>
      </div>
    </div>
  );
}
