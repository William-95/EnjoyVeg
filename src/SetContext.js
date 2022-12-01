import React, { useState, useEffect } from "react";
import axios from "axios";
// const apiKey2 = `apiKey=0205ee87d117432690b54c07f0e20f89`;
const apiKey = `apiKey=1eba625fd6e54c87b44c656397f62614`;


export const RecipeContext = React.createContext();

export default function SetContext({ children }) {
  /*axios*/
  const api = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`,
    params:{
      addRecipeInformation:true,
      number:8,
      diet:`vegetarian`,
      responseType: "json",
      
    }
  });

  /*state*/
  const [recipeState, setRecipeState] = useState([{}]);
  const [value, setValue] = useState(``);
  const [valueButton, setValueButton] = useState(``);
  const [cuisine,setCuisine]=useState(``);
  const [intolerance,setIntolerance]=useState(``);
  const [protein,setProtein]=useState(100);
  const [calories,setCalories]=useState(800);
  const [fat,setFat]=useState(100);
  /*requestApi*/
  useEffect(() => {
    api
      .get(`complexSearch?${apiKey}
      &query=${value}
      &cuisine=${cuisine}
      &intolerances=${intolerance}
      &maxCalories=${calories}
      &maxProtein=${protein}
      &maxFat=${fat} 
      `)

      .then((response) => {
        setRecipeState(response.data.results);
        
      })
     
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueButton,cuisine,intolerance,protein,calories,fat]);
  
  
  
  console.log(recipeState);

  return (
    <>
      <RecipeContext.Provider
        value={{
          api,
          recipeState,
          setRecipeState,
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
          setFat
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
}
