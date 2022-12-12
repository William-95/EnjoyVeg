import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";
import Loading from "./Loading";

const apiKey = `apiKey=0205ee87d117432690b54c07f0e20f89`;
// const apiKey=`apiKey=31f3807eea49404c9733ab813bf795ad`;

export default function SingleRequest() {
  let params = useParams();
  const { api, recipeState } = useContext(RecipeContext);

  const [oneRecipe, setOneRecipe] = useState([{}]);
  const [filterId, setFilterId] = useState(recipeState);
  const [load, setLoad] = useState([{}]);

  /*Loading*/
  useEffect(() => {
    setLoad({ load: true });
  }, []);
  /*end Loading*/

  const filterById = (id) => {
    const newRecipeState = recipeState.filter((item) => item.id == id);
    setFilterId(newRecipeState);
  };
  
  useEffect(() => {
    api
      .get(`${params.id}/card?${apiKey}`)

      .then((response) => {
        setOneRecipe(response.data);
        setLoad({ load: false });
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  useEffect(() => {
    filterById(params.id);
  }, [oneRecipe]);

  if (load.load === true) {
    return <Loading />;
  }
  return (
    <div>
      <div className="oneRecipeArticle">
        <img src={oneRecipe.url} alt="" />
      </div>
      <div className="btnCenter">
        <button className="btn-primary">
          <a href={filterId[0].sourceUrl} target="_blank">
            Complete Recipe
          </a>
        </button>
      </div>
    </div>
  );
}