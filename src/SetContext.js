import React, { useState, useEffect } from "react";
import axios from "axios";
const apiKey = `apiKey=0205ee87d117432690b54c07f0e20f89`;
// const apiKey2 = `apiKey=1eba625fd6e54c87b44c656397f62614`;


export const RecipeContext = React.createContext();

export default function SetContext({ children }) {
  /*axios*/
  const api = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`,
    params:{
      addRecipeInformation:true,
      
      number:8,
      diet:`vegetarian`,
    responseType: "json"
    }
  });

  /*state*/
  const [recipeState, setRecipeState] = useState([{}]);
  const [value, setValue] = useState(``);
  const [valueButton, setValueButton] = useState(``);
  const [cuisine,setCuisine]=useState(``)
  /*requestApi*/
  useEffect(() => {
    api
      .get(`complexSearch?${apiKey}&query=${value}&cuisine=${cuisine}`)

      .then((response) => {
        setRecipeState(response.data.results);
        
      })
     
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueButton,cuisine]);
  
  
  
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
          // handleChange
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
}
