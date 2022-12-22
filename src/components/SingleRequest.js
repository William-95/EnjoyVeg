import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";
import classNames from "classnames";

export default function SingleRequest() {
  let params = useParams();
  const { recipeState, load, setLoad } = useContext(RecipeContext);
  const [active, setActive] = useState({ act: "summary" });
  // Filtered Data
  const newRecipeState = recipeState.filter((recipe) => {
    return recipe.id === parseInt(params.id);
  });

  // eslint-disable-next-line
  var ingr = newRecipeState[0].analyzedInstructions[0].steps;

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
  console.log(active);

  if (load.load === true) {
    return <Loading />;
  }
  return (
    <div>
      
      {/* <div className="oneRecipeArticle">
        <img src={oneRecipe.url} alt="" />
      </div> */}

      <div className="oneContainer">
        <h2>{newRecipeState[0].title}</h2>
        <img src={newRecipeState[0].image} alt="" />
        <div className="btnChange">
          <button className="btnPrimary" onClick={() => setActive({ act: "summary" })}>Summary</button>
          <button className="btnPrimary" onClick={() => setActive({ act: "instruction" })}>
            Instruction
          </button>
        </div>
        <div
          className={classNames("ingredientContainer", {
            active: active.act === "instruction",
          })}
        >
          {ingr.map((item) => {
            return (
              <div className="singleIngredient">
                <h3>Step: {item.number}</h3>

                <div className="listIngr">
                  <h4>Ingredients:</h4>
                  <ul>
                    {item.ingredients.map((ingredient) => {
                      return <li>{ingredient.name}</li>;
                    })}
                  </ul>
                </div>
                <div className="ingredientProcedure">
                  <h4>Procedure:</h4>
                  <article>{item.step}</article>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={classNames("recipeSumaryContainer", {
            active: active.act === "summary",
          })}
        >
          <h3>Summary</h3>
          <article
            dangerouslySetInnerHTML={{ __html: newRecipeState[0].summary }}
            className="recipeSummary"
          ></article>
        </div>
      </div>

      <div className="btnCenter">
        <a href={newRecipeState[0].sourceUrl} target="_blank" rel="noreferrer">
          <button className="btnPrimary">More</button>
        </a>
      </div>
    </div>
  );
}
