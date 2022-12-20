import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";
import Request from "./ClientApi";

export default function SingleRequest() {
  // let params = useParams();
  const { filterId,  oneRecipe, load, setLoad } = useContext(RecipeContext);
  

  // const filterById = (i) => {
  //   const newRecipeState = recipeState.filter((item) => item.id === i);
  //   setFilterId(newRecipeState);
  //   console.log(filterId);
  // };

  /*Loading*/
  useEffect(() => {
    setLoad({ load: true });

    const timer = setTimeout(() => {
      setLoad({ load: false });
    }, 1000);
    
    
    return () => clearTimeout(timer);
    
    // eslint-disable-next-line
  }, []);
  /*end Loading*/

  // useEffect(() => {
  //   filterById(params.id);
  //   // eslint-disable-next-line
  // }, [oneRecipe]);

  if (load.load === true) {
    return <Loading />;
  }
  return (
    <div>
      <Request.SingleClientApi />
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
