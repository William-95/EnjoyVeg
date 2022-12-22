import React, { useContext, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { RecipeContext } from "../SetContext";

/*axios*/
const api = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/`,
  params: {
    addRecipeInformation: true,
    number: 100,
    diet: `vegetarian`,
    responseType: "json",
  },
});


/*ClienAPI Function*/
function ClientApi() {
  const API_KEY=process.env.NEXT_PUBLIC_ANALYTICS_ID
  const {
    valueButton,
    setRecipeState,
    setLoading,
    value,
    cuisine,
    intolerance,
    protein,
    calories,
    fat,
  } = useContext(RecipeContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(
        `complexSearch?${API_KEY}&query=${value}&cuisine=${cuisine}&intolerances=${intolerance}&maxProtein=${protein}&maxCalories=${calories}&maxFat=${fat}`
      )

      .then((response) => {
        setRecipeState(response.data.results);
        setLoading({ loading: false });
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, valueButton, cuisine, intolerance, protein, calories, fat]);

  return <></>;
}

const Request = { ClientApi };
export default Request;
