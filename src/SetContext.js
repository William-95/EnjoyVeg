import React, { useState, useEffect } from "react";
import axios from "axios";
// const apiKey2 = `apiKey=0205ee87d117432690b54c07f0e20f89`;
//  const apiKey3=`apiKey=31f3807eea49404c9733ab813bf795ad`;
 const apiKey=`apiKey=e096d1341aa24ad9b45c7459b5a1c1fd`
export const RecipeContext = React.createContext();

export default function SetContext({ children }) {
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

  /*state*/
  const [recipeState, setRecipeState] = useState([{}]);
  const [loading, setLoading] = useState([{}]);
  const [value, setValue] = useState(``);
  const [valueButton, setValueButton] = useState(``);
  const [cuisine, setCuisine] = useState(``);
  const [intolerance, setIntolerance] = useState(``);
  const [protein, setProtein] = useState(100);
  const [calories, setCalories] = useState(800);
  const [fat, setFat] = useState(100);

  /*Loading*/
  useEffect(() => {
    setLoading({ loading: true });
  }, []);
  /*end Loading*/

  /*requestApi*/
  useEffect(() => {
    api
      .get(
        `complexSearch?${apiKey}&query=${value}&cuisine=${cuisine}&intolerances=${intolerance}&maxProtein=${protein}&maxCalories=${calories}&maxFat=${fat}`
      )

      .then((response) => {
        setRecipeState(response.data.results);
         setLoading({ loading: false });
      })

      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueButton, cuisine, intolerance, protein, calories, fat]);

  return (
    <>
      <RecipeContext.Provider
        value={{
          api,
          recipeState,
          setRecipeState,
          loading,
          setLoading,
          value,
          setValue,
          valueButton,
          setValueButton,
          cuisine,
          setCuisine,
          intolerance,
          setIntolerance,
          protein,
          setProtein,
          calories,
          setCalories,
          fat,
          setFat,
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
}
