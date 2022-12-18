import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";
import Request from "./ClientApi";

export default function SingleRequest() {
  let params = useParams();
  const { recipeState, oneRecipe, load, setLoad } = useContext(RecipeContext);

  const [filterId, setFilterId] = useState(recipeState);

  /*Loading*/
  useEffect(() => {
    setLoad({ load: true });
    // eslint-disable-next-line
  }, []);
  /*end Loading*/

  const filterById = (id) => {
    const newRecipeState = recipeState.filter((item) => item.id === id);
    
    setFilterId(newRecipeState);
    
  };


  useEffect(() => {
    filterById(params.id);
    console.log(filterId);
    // eslint-disable-next-line
  }, [oneRecipe]);

  if (load.load === true) {
    return <Loading />&&<Request.SingleClientApi/>;
  }
  return (
    <div>
      <div className="oneRecipeArticle">
        <img src={oneRecipe.url} alt="" />
      </div>
      <div className="btnCenter">
        <button className="btnPrimary">
          <a href={filterId.sourceUrl} target="_blank" rel="noreferrer">
            Complete Recipe
          </a>
        </button>
      </div>
    </div>
  );
}
