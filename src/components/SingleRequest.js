import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";
import Request from "./ClientApi";

export default function SingleRequest() {
  let params = useParams();
  const { recipeState, oneRecipe, load, setLoad } = useContext(RecipeContext);

  // Filtered Data
  const newRecipeState = recipeState.filter((recipe) => {
    return recipe.id === parseInt(params.id);
  });
  // eslint-disable-next-line
  var ingr = newRecipeState[0].analyzedInstructions[0].steps;
  console.log(ingr);
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

  if (load.load === true) {
    return <Loading />;
  }
  return (
    <div>
      <Request.SingleClientApi />
      <div className="oneRecipeArticle">
        <img src={oneRecipe.url} alt="" />
      </div>

      <div>
        <h2>{newRecipeState[0].title}</h2>
        <img src={newRecipeState[0].image} alt="" />

        {ingr.map((item) => {
          return (
            <div>
              <h4>Step: {item.number}</h4>
              <div>
                <h5>Ingredients:</h5>
                <ul>
                  {item.ingredients.map((ingredient) => {
                    return <il>{ingredient.name}</il>;
                  })}
                </ul>
              </div>
              <div>
                <h5>Procedure:</h5>
                <article>{item.step}</article>
              </div>
            </div>
          );
        })}

        <article
          dangerouslySetInnerHTML={{ __html: newRecipeState[0].summary }}
        ></article>
      </div>

      <div className="btnCenter">
        <a href={newRecipeState[0].sourceUrl} target="_blank" rel="noreferrer">
          <button className="btnPrimary">More</button>
        </a>
      </div>
    </div>
  );
}
