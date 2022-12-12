import React, { useContext } from "react";
import { RecipeContext } from "../SetContext";
import RecipeCard from "../components/RecipeCard";
import Title from "../components/Title";
import Filter from "./Filter";
import Loading from "./Loading";

export default function SearchList() {
  const { recipeState,loading } = useContext(RecipeContext);
  
  if (loading.loading ===true) {
    return <Loading />;
  }
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
