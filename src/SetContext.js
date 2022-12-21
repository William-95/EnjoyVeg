import React, { useState, useEffect } from "react";
import Request from "./components/ClientApi";

export const RecipeContext = React.createContext();

export default function SetContext({ children }) {
  /*state*/
  const [recipeState, setRecipeState] = useState([{}]);
  const [oneRecipe, setOneRecipe] = useState([{}]);
  const [loading, setLoading] = useState([{}]);
  const [load, setLoad] = useState([{}]);
  const [filterId, setFilterId] = useState([{}]);
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

  
  return (
    <>
      <RecipeContext.Provider
        value={{
          recipeState,
          setRecipeState,
          oneRecipe,
          setOneRecipe,
          loading,
          setLoading,
          load,
          setLoad,
          filterId,
          setFilterId,
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
        <Request.ClientApi />
        {children}
      </RecipeContext.Provider>
    </>
  );
}
