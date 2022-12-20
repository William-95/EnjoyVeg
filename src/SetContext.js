import React, { useState, useEffect } from "react";
import Request from "./components/ClientApi";
import { useParams } from "react-router-dom";

export const RecipeContext = React.createContext();

export default function SetContext({ children }) {
  /*state*/
  const [recipeState, setRecipeState] = useState([{}]);
  const [oneRecipe, setOneRecipe] = useState([{}]);
  const [loading, setLoading] = useState([{}]);
  const [load, setLoad] = useState([{}]);
  const[filterId,setFilterId]=useState([{}])
  const [value, setValue] = useState(``);
  const [valueButton, setValueButton] = useState(``);
  const [cuisine, setCuisine] = useState(``);
  const [intolerance, setIntolerance] = useState(``);
  const [protein, setProtein] = useState(100);
  const [calories, setCalories] = useState(800);
  const [fat, setFat] = useState(100);
  
  let params = useParams();
  /*Loading*/
  useEffect(() => {
    setLoading({ loading: true });
  }, []);
  /*end Loading*/

  const filterById = (index) => {
    
    const newRecipeState = recipeState.filter((item) => parseInt(item.id) === parseInt(index));
    setFilterId(newRecipeState);
    console.log(filterId);
    
  };
  useEffect(() => {
    filterById(params.id);
   
    // eslint-disable-next-line
  }, [oneRecipe]);

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
          filterId,setFilterId,
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
